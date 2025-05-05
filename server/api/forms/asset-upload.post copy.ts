import fs from "fs";
import {
  get_client_file_by_uuid_and_name,
  create_client_file,
} from "~/server/controller/clientFilesCont";
import { get_client_by_uuid } from "~/server/controller/clientCont";

import formidable, { Fields, Files, File } from "formidable";
import { promisify } from "util";

export const config = {
  api: {
    bodyParser: false,
  },
};

import { storage, bucket, bucketName } from "~/server/cloud_storage/gcp";

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

  /**
     * "client_uid", client.client_uid!
     *    formData.append(
        "start_date",
        step_two_analysis_start_date.question_answer
      );
      formData.append("end_date", step_two_analysis_end_date.question_answer);
      formData.append(
        "metric_contained",
        step_two_metrics_type_contained_in_the_file.question_answer.join(",")
      );
      formData.append(
        "step_two_file_to_be_uploaded",
        step_two_file_to_be_uploaded.question_answer
      );

     */

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

  const publicUrl = `https://storage.googleapis.com/${bucketName}/${destination}`;

  await create_client_file({
    file_type: uploadedFile.mimetype as fileType,
    file_original_name: uploadedFile.originalFilename,
    file_GCS_name,
    file_GCS_id: fileCreateionRes[0].id!,
    file_owner: file_owner,
  });

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
