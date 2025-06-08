import { Clients } from "~/server/models/index";
import { sendEmail } from "../utils/sendEmail";
import { generate_incomplete_file_submission_mail } from "~/mails/incomplete_file_submission_mail";

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

  // console.log(res.dataValues);

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

const email_client_by_uuid = async (
  client_uid: string,
  mail_type: EmailTypes,
  metricsHtmlString: string
) => {
  let html_body;
  let subject;
  const client = await Clients.findOne({ where: { client_uid: client_uid } });

  if (client === null) {
    return null;
  }

  const resolved_client = client.dataValues as ClientDetail;

  switch (mail_type) {
    case "insufficient_files":
      subject = "Incomplete File Submission";
      html_body = generate_incomplete_file_submission_mail(metricsHtmlString);
      break;
  }

  sendEmail(resolved_client.client_contact_work_email, subject, html_body);
};

export { get_client_by_uuid, create_client, get_clients, email_client_by_uuid };
