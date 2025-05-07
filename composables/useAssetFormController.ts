import axios from "axios";

import { useAssetUploadFormStore } from "~/store/asset_upload_form/useAssetUploadFormStore";

export const useAssetFormController = () => {
  const isUploading = ref(false);

  const submit_form = async (client: ClientDetail) => {
    const assetUploadFormStore = useAssetUploadFormStore();
    isUploading.value = true;

    const formData =
      assetUploadFormStore.get_answers_as_formdata_for_submission;

    if (!formData || !(client?.client_uid ?? false)) {
      isUploading.value = false;
      throw new Error("Missing required form data or client ID.");
    }

    formData.append("client_uid", client.client_uid!);

    try {
      const response = await axios.post("/api/forms/asset-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const asset = (response?.data?.data?.asset as string) ?? "";
      return { asset };
    } catch (err: any) {
      // Handle error from the backend (e.g. file already exists, no file uploaded, etc.)
      const errorMessage =
        err?.response?.data?.message || "Something went wrong during upload.";

      throw new Error(errorMessage); // or return { error: errorMessage }
    } finally {
      isUploading.value = false;
    }
  };

  return {
    submit_form,
  };
};
