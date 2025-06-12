import axios from "axios";

export const useClientController = () => {
  const get_client = async (uid: string) => {
    try {
      const response = await axios.get(`/api/clients/${uid}`);
      // console.log(response);

      const client = (response.data?.data?.client as ClientDetail) ?? null;
      return { client };
    } catch (error) {
      return { client: null };
    }
  };

  const get_client_submissions = async (uid: string) => {
    try {
      const response = await axios.get(`/api/clients/${uid}/form_submission`);
      console.log(response);

      const submissions = (response.data?.data?.submissions as any) ?? [];
      return { submissions };
    } catch (error) {
      return { submissions: [] };
    }
  };

  const get_client_files = async (uid: string) => {
    try {
      const response = await axios.get(`/api/clients/${uid}/assets`);
      console.log(response);

      const files = (response.data?.data?.client_files as any) ?? [];
      const pagination = (response.data?.data?.pagination as any) ?? null;
      return { files, pagination };
    } catch (error) {
      return { files: [], pagination: null };
    }
  };

  const get_clients = async () => {
    try {
      const response = await axios.get("/api/clients");

      // console.log(response);

      const pagination =
        (response.data?.data?.pagination as Pagination) ?? null;
      const clients = (response.data?.data?.clients as ClientDetail[]) ?? [];
      return { pagination, clients };
    } catch (error) {
      return { pagination: null, clients: [] as ClientDetail[] };
    }
  };

  const create_client = async (client_details: ClientDetail) => {
    const response = await axios.post("/api/clients", client_details);

    console.log(response);
  };

  const got_to_client_files_home = (uid: string) => {
    useRouter().push(`/client-dashboard/${uid}/files`);
  };

  return {
    get_clients,
    get_client_submissions,
    get_client_files,
    create_client,
    get_client,
    got_to_client_files_home,
  };
};
