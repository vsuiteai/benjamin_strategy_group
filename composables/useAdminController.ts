import axios from "axios";
import { useAdminsStore } from "~/store/admins_store";

export const useAdminController = () => {
  const get_admins = async () => {
    try {
      const admins_store = useAdminsStore();
      const response = await axios.get("/api/admins");

      console.log(response);

      const pagination =
        (response.data?.data?.pagination as Pagination) ?? null;
      const admins = (response.data?.data?.admins as AdminDetail[]) ?? [];

      admins_store.setAdmins(admins);
      return { pagination, admins };
    } catch (error) {
      return { pagination: null, admins: [] as ClientDetail[] };
    }
  };

  const create_admin = async (admin_details: AdminDetail) => {
    const response = await axios.post("/api/auth/signup", admin_details);

    console.log(response);
  };

  const login_admin = async (email: string, password: string) => {
    const admin_username = email;
    const admin_password = password;
    const response = await axios.post("/api/auth/login", {
      admin_username,
      admin_password,
    });

    console.log(response);
  };

  return {
    create_admin,
    login_admin,
    get_admins,
  };
};
