<script setup lang="ts">
type client_view = "uploaded_file_view" | "file_upload_form_view";

definePageMeta({
  layout: "guest",
});

const route = useRoute();
const uid = route.query.uid as string;

const clientController = useClientController();
const client = ref<ClientDetail | null>(null);

const error_fetching_client = ref<boolean>(false);
const loading = ref<boolean>(true);
const form_submission_success = ref<boolean>(false);
const current_view = ref<client_view>("file_upload_form_view");

const end_upload_process = () => {
  form_submission_success.value = false;

  clientController.got_to_client_files_home(uid);
};

onMounted(async () => {
  if (!uid) {
    error_fetching_client.value = true;
    loading.value = false;
    return;
  }
  const res = await clientController.get_client(uid);

  if (!(res.client ?? false)) {
    error_fetching_client.value = true;
    loading.value = false;

    return;
  }
  client.value = res.client;
  console.log(uid);

  loading.value = false;
});
</script>
<template>
  <section class="w-full h-full">
    <!-- {{ route }} -->
    <section v-if="loading" class="w-full h-full">
      <LoadersFullPage />
    </section>
    <section v-else class="w-full h-full">
      <template v-if="error_fetching_client">
        <ErrorsFormClientNotFound />
      </template>
      <template v-else>
        <AssetUploadForm
          v-if="!form_submission_success"
          :client_details="client"
          @form_submission_success="form_submission_success = true"
          @end_upload_process="end_upload_process"
        />

        <SuccessesFileUploaded
          v-if="form_submission_success"
          @restart_upload_process="
            () => {
              form_submission_success = false;
              current_view = 'file_upload_form_view';
            }
          "
          @end_upload_process="end_upload_process"
        />
      </template>
    </section>
  </section>
</template>
