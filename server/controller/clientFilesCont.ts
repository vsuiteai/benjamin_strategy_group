import { Clients, ClientFiles } from "~/server/models/index";

function mapMimeTypeToFileType(
  mimeType: string
): "csv" | "pdf" | "xlsx" | "word" {
  const mimeMap: Record<string, "csv" | "pdf" | "xlsx" | "word"> = {
    "text/csv": "csv",
    "application/pdf": "pdf",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "application/vnd.ms-excel": "xlsx", // older Excel format
    "application/msword": "word", // .doc
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      "word", // .docx
  };

  const mapped = mimeMap[mimeType];
  if (!mapped) throw new Error(`Unsupported file type: ${mimeType}`);

  return mapped;
}

const get_client_file_by_uuid_and_name = async (
  client_uid: string,
  file_original_name: string
) => {
  const client = await Clients.findOne({ where: { client_uid: client_uid } });
  if (client === null) {
    return null;
  }

  const client_files = await ClientFiles.findOne({
    where: {
      file_owner: client.dataValues.client_id,
      file_original_name: file_original_name,
    },
  });

  if (client_files === null) {
    return null;
  }
  return client_files;
};

const create_client_file = async (client_file_details: ClientUploadedFile) => {
  const mapped_type = mapMimeTypeToFileType(client_file_details.file_type);
  const res = await (
    await ClientFiles.create({
      file_type: mapped_type,
      file_original_name: client_file_details.file_original_name,
      file_GCS_name: client_file_details.file_GCS_name,
      file_GCS_id: client_file_details.file_GCS_id,
      file_owner: client_file_details.file_owner,
      file_metric_contained: client_file_details.file_metric_contained,
    })
  ).save();

  return res.dataValues;
};

const get_client_files_by_uuid = async (client_uid: string) => {
  const client = await Clients.findOne({ where: { client_uid: client_uid } });
  if (client === null) {
    return null;
  }

  const client_files = await ClientFiles.findAll({
    where: {
      file_owner: client.dataValues.client_id,
    },
  });

  if (client_files === null) {
    return null;
  }
  // console.log(client_files);

  return client_files;
};

export {
  get_client_file_by_uuid_and_name,
  create_client_file,
  get_client_files_by_uuid,
};
