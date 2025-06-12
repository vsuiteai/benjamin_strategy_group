import { get_client_files_by_uuid_with_pagination } from "~/server/controller/clientFilesCont";
// import { storage, bucket, bucketName } from "~/server/cloud_storage/gcp";

// export  defineEventHandler(async (event) => {
//   try {
//     const uid = getRouterParam(event, "uid") ?? false;

//     if (!uid) throw new Error("client uid not provided");

//     const bucket = storage.bucket(bucketName);

//     // List all files
//     const [files] = await bucket.getFiles({ prefix: `uploads/${uid}/` });

//     const fileUrls = await Promise.all(
//       files.map(async (file) => {
//         const [signedUrl] = await file.getSignedUrl({
//           version: "v4",
//           action: "read",
//           expires: Date.now() + 60 * 60 * 1000, // 60 minutes
//         });

//         return {
//           name: file.name,
//           publicUrl: signedUrl, // ⬅️ the signed URL
//           contentType: file.metadata?.contentType,
//           size: file.metadata?.size,
//           updated: file.metadata?.updated,
//         };
//       })
//     );

//     return {
//       error: false,
//       data: {
//         files: fileUrls,
//       },
//       message: "files fetched successfully",
//     };
//   } catch (err) {
//     console.log(err instanceof Error ? err.message : String(err));
//     return {
//       error: true,
//       data: null,
//       message: err instanceof Error ? err.message : String(err),
//     };
//   }
// });

export default defineEventHandler(async (event) => {
  try {
    const uid = getRouterParam(event, "uid") ?? false;

    if (!uid) throw new Error("client uid not provided");

    const query = getQuery(event);
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 10;

    const offset = (page - 1) * limit;

    const { client_files, total } =
      await get_client_files_by_uuid_with_pagination(limit, offset, uid);

    if (client_files === null) {
      throw new Error("no file");
    }

    const totalPages = Math.ceil(total / limit);
    const from = offset + 1;
    const to = Math.min(offset + limit, total);

    return {
      error: false,
      data: {
        client_files,
        pagination: {
          currentPage: page,
          perPage: limit,
          totalItems: total,
          totalPages,
          showing: `${from}-${to}`,
          hasNext: page < totalPages,
          hasPrev: page > 1,
          pages: generatePageNumbers(page, totalPages),
        },
      },
      message: "Clients fetched successfully",
    };
  } catch (err) {
    console.log(err instanceof Error ? err.message : String(err));
    return {
      error: true,
      data: null,
      message: err instanceof Error ? err.message : String(err),
    };
  }
});

function generatePageNumbers(
  current: number,
  total: number
): (number | string)[] {
  const range = [];
  const delta = 2; // Show current +/- 2 pages
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);
  if (left > 2) range.push("...");

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < total - 1) range.push("...");
  if (total > 1) range.push(total);

  return range;
}
