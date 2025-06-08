import axios from "axios";

export const useQueryController = () => {
  const get_query = async (query_id: string) => {
    try {
      const response = await axios.get(`/api/query/${query_id}`);
      console.log(response);

      const query = response.data?.data?.query ?? null;
      return { query };
    } catch (error) {
      return { query: null };
    }
  };

  const get_queries = async (uid: string) => {
    try {
      const response = await axios.get(`/api/clients/${uid}/queries`);

      console.log(response);

      const queries = (response.data?.data?.queries as any) ?? [];
      return { queries };
    } catch (error) {
      return { queries: null };
    }
  };

  return {
    get_query,
    get_queries,
  };
};
