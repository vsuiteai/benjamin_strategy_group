import { verifyToken } from "~/server_f/utils/jwt";

export default defineEventHandler(async (event) => {
  // console.log(event);

  const config = useRuntimeConfig();

  const path = event._path;
  const protected_backend_route = config.protected_backend_route;

  if (
    typeof path !== "string" ||
    (typeof path !== "string" && !protected_backend_route.includes(path))
  )
    return;
  // console.log("protected");

  // const authHeader = getHeader(event, "Authorization");
  // const token = authHeader?.split(" ")[1];

  // if (!token)
  //   throw createError({ statusCode: 401, statusMessage: "Missing token" });

  // try {
  //   const decoded = verifyToken(token);
  //   event.context.auth = decoded;
  // } catch (err) {
  //   throw createError({ statusCode: 401, statusMessage: "Invalid token" });
  // }
});
