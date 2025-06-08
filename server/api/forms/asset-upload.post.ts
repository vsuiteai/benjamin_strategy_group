import fs from "fs";
import {
  get_client_file_by_uuid_and_name,
  create_client_file,
  get_client_files_by_uuid,
} from "~/server/controller/clientFilesCont";
import {
  email_client_by_uuid,
  get_client_by_uuid,
} from "~/server/controller/clientCont";

import formidable, { Fields, Files, File } from "formidable";
import { promisify } from "util";

export const config = {
  api: {
    bodyParser: false,
  },
};

import { storage, bucket, bucketName } from "~/server/cloud_storage/gcp";
import { Metrics } from "~/config/config";
import { initiate_query_process } from "~/server/controller/queryCont";

const has_client_uploaded_all_the_needed_files = async (client_uid: string) => {
  const file_metrics_needed = new Set(Object.values(Metrics));
  const main_files = ((await get_client_files_by_uuid(client_uid)) ??
    ([] as ClientUploadedFile[])) as ClientUploadedFile[];

  for (const file of main_files) {
    for (const metric of file_metrics_needed) {
      if (file.file_metric_contained.includes(metric)) {
        file_metrics_needed.delete(metric); // more efficient than splice
      }
    }
  }

  // console.log(file_metrics_needed);

  if (file_metrics_needed.size > 0) {
    const metricsListHtml = Array.from(file_metrics_needed)
      .map((metric) => `<li>${metric}</li>`)
      .join("");

    const metricsHtmlString = `<ul>${metricsListHtml}</ul>`;

    await email_client_by_uuid(
      client_uid,
      "insufficient_files",
      metricsHtmlString
    );
  } else {
    const client = await get_client_by_uuid(client_uid);

    if (client && client.client_id) {
      initiate_query_process(client.client_id, main_files);
    }
  }
};

export default defineEventHandler(async (event) => {
  const form = formidable({ keepExtensions: true });

  const parseForm = (): Promise<{ fields: Fields; files: Files }> =>
    new Promise((resolve, reject) => {
      form.parse(event.node.req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

  const { fields, files } = await parseForm();

  // Handle single file case
  const fileData = files.step_two_file_to_be_uploaded;
  const uploadedFile = Array.isArray(fileData)
    ? fileData[0]
    : fileData ?? undefined;

  const start_date = Array.isArray(fields.start_date)
    ? fields.start_date[0]
    : fields.start_date;
  const end_date = Array.isArray(fields.end_date)
    ? fields.end_date[0]
    : fields.end_date;
  const client_uid =
    (Array.isArray(fields.client_uid)
      ? fields.client_uid[0]
      : fields.client_uid) ?? "";
  const metric_contained = Array.isArray(fields.metric_contained)
    ? fields.metric_contained[0]
    : fields.metric_contained;

  if (
    !uploadedFile ||
    !uploadedFile.filepath ||
    !uploadedFile.originalFilename
  ) {
    throw createError({ statusCode: 400, statusMessage: "No file uploaded" });
  }

  const client = await get_client_by_uuid(client_uid);
  const file_owner = client?.client_id ?? "";
  if (file_owner === "") {
    throw createError({
      statusCode: 400,
      statusMessage: "File owner not found",
    });
  }

  const file_with_same_name = await get_client_file_by_uuid_and_name(
    client_uid,
    uploadedFile.originalFilename
  );

  console.log(file_with_same_name?.dataValues);

  if (file_with_same_name) {
    throw createError({
      statusCode: 400,
      statusMessage: "File with the same name already exists.",
    });
  }

  const file_GCS_name = `${Date.now()}_${uploadedFile.originalFilename}`;
  const destination = `uploads/${
    client_uid || "unknown_user"
  }/${file_GCS_name}`;
  const bucket = storage.bucket(bucketName);

  const fileCreateionRes = await bucket.upload(uploadedFile.filepath, {
    destination,
    resumable: false,
    contentType: uploadedFile.mimetype || undefined,
    metadata: {
      cacheControl: "public, max-age=31536000",
      metadata: {
        start_date,
        end_date,
        client_uid,
        metric_contained,
      },
    },
  });

  console.log(metric_contained);

  const publicUrl = `https://storage.googleapis.com/${bucketName}/${destination}`;

  await create_client_file({
    file_type: uploadedFile.mimetype as fileType,
    file_original_name: uploadedFile.originalFilename,
    file_GCS_name,
    file_GCS_id: fileCreateionRes[0].id!,
    file_owner: file_owner,
    file_metric_contained: metric_contained ?? "",
  });

  await has_client_uploaded_all_the_needed_files(client_uid);

  return {
    message: "File uploaded successfully",
    url: publicUrl,
    metadata: {
      start_date,
      end_date,
      client_uid,
      metric_contained,
    },
  };
});
