import { get_query_by_query_id } from "~/server/controller/queryCont";

export default defineEventHandler(async (event) => {
  try {
    const query_id = getRouterParam(event, "query_id") ?? false;

    if (!query_id) throw new Error("query id not provided");

    const query = (await get_query_by_query_id(query_id)) ?? null;

    if (!query) throw new Error("Query not found");

    return {
      error: false,
      data: {
        query: query,
      },
      message: "query fetched successfully",
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
