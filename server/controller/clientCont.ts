import { Clients } from "~/server/models/index";

const get_client_by_uuid = async (client_uid: string) => {
  const client = await Clients.findOne({ where: { client_uid: client_uid } });
  if (client === null) {
    return null;
  } else {
    return client.dataValues as ClientDetail;
  }
};

const create_client = async (client_details: ClientDetail) => {
  const res = await (
    await Clients.create({
      client_uid: client_details.client_uid,
      client_contact_fullname: client_details.client_contact_fullname,
      client_contact_phone: client_details.client_contact_phone,
      client_contact_work_email: client_details.client_contact_work_email,
      client_company_name: client_details.client_company_name,
      client_contact_role: client_details.client_contact_role,
    })
  ).save();

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

export { get_client_by_uuid, create_client, get_clients };
