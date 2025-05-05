import { v4 as uuidv4 } from "uuid";
import {
  get_client_by_uuid,
  create_client,
} from "~/server/controller/clientCont";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    let client_uuid_is_a_duplicate = true;
    let client_uid = "";

    while (client_uuid_is_a_duplicate) {
      client_uid = uuidv4();

      let get_client = await get_client_by_uuid(client_uid);
      client_uuid_is_a_duplicate = get_client ? true : false;
    }

    const client_contact_fullname = body.client_contact_fullname ?? "";
    const client_contact_phone = body.client_contact_phone ?? "";
    const client_contact_work_email = body.client_contact_work_email ?? "";
    const client_company_name = body.client_company_name ?? "";
    const client_contact_role = body.client_contact_role ?? "";

    if (
      client_contact_fullname === "" ||
      client_contact_phone === "" ||
      client_contact_work_email === ""
    ) {
      throw new Error("Required detail(s) missing");
    }

    const res = await create_client({
      client_uid: client_uid,
      client_contact_fullname: client_contact_fullname,
      client_contact_phone: client_contact_phone,
      client_contact_work_email: client_contact_work_email,
      client_company_name: client_company_name,
      client_contact_role: client_contact_role,
    });

    return {
      error: false,
      data: res,
      message: "client created",
    };
  } catch (err) {
    console.log(err);

    if (err instanceof Error) {
      return {
        error: true,
        data: null,
        message: err.message,
      };
    } else {
      return {
        error: true,
        data: null,
        message: String(err),
      };
    }
  }
});
