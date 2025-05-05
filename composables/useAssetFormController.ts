import axios from "axios";

import { useAssetUploadFormStore } from "~/store/asset_upload_form/useAssetUploadFormStore";

export const useAssetFormController = () => {
  const isUploading = ref(false);

  const submit_form = async (client: ClientDetail) => {
    const assetUploadFormStore = useAssetUploadFormStore();

    isUploading.value = true;

    const formData =
      assetUploadFormStore.get_answers_as_formdata_for_submission;

    if (!formData || !(client?.client_uid ?? false)) return;

    formData.append("client_uid", client.client_uid!);

    const response = await axios.post("/api/forms/asset-upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // console.log(response);

    const asset = (response.data?.data?.asset as string) ?? "";
    isUploading.value = false;

    return { asset };
  };

  return {
    submit_form,
  };
};
