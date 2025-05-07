import { storage, bucket, bucketName } from "~/server/cloud_storage/gcp";

export default defineEventHandler(async (event) => {
  try {
    const uid = getRouterParam(event, "uid") ?? false;

    if (!uid) throw new Error("client uid not provided");

    const bucket = storage.bucket(bucketName);

    // List all files
    const [files] = await bucket.getFiles({ prefix: `uploads/${uid}/` });

    const fileUrls = await Promise.all(
      files.map(async (file) => {
        const [signedUrl] = await file.getSignedUrl({
          version: "v4",
          action: "read",
          expires: Date.now() + 60 * 60 * 1000, // 60 minutes
        });

        return {
          name: file.name,
          publicUrl: signedUrl, // ⬅️ the signed URL
          contentType: file.metadata?.contentType,
          size: file.metadata?.size,
          updated: file.metadata?.updated,
        };
      })
    );

    return {
      error: false,
      data: {
        files: fileUrls,
      },
      message: "files fetched successfully",
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
