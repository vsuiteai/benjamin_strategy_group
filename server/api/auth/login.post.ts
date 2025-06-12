import { get_admin_by_username } from "~/server/controller/adminCont";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const admin_username = body.admin_username ?? "";
  const admin_password = body.admin_password ?? "";

  if (admin_username === "" || admin_password === "") {
    throw new Error("Required detail(s) missing");
  }

  const admin = await get_admin_by_username(admin_username);

  if (!admin)
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials",
    });

  const isMatch = await bcrypt.compare(admin_password, admin.admin_password);
  if (!isMatch) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials",
    });
  }

  await setUserSession(event, {
    user: { id: admin.admin_id, email: admin.admin_username },
  });
  return { message: "Login successful" };
});
