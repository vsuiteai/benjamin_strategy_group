import { Clients, ClientFiles } from "~/server/models/index";

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
  const res = await (
    await Clients.create({
      file_type: client_file_details.file_type,
      file_original_name: client_file_details.file_original_name,
      file_GCS_name: client_file_details.file_GCS_name,
      file_GCS_id: client_file_details.file_GCS_id,
      file_owner: client_file_details.file_owner,
    })
  ).save();

  /**
    : string;
    : string;
    : string;
    : number; // client_id
    created_at?: string;
    updated_at?: string;
   */

  console.log(res.dataValues);

  return res.dataValues;
};

const get_clients = async ({
  limit = 10,
  offset = 0,
}: {
  limit: number;
  offset: number;
}) => {
  const { rows: clients, count: total } = await Clients.findAndCountAll({
    limit,
    offset,
    order: [["client_created_at", "DESC"]],
  });

  return { clients, total };
};

export { get_client_file_by_uuid_and_name, create_client_file, get_clients };
