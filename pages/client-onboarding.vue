<script setup lang="ts">
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
        <OnboardingForm
          v-if="!form_submission_success"
          :client_details="client"
          @form_submission_success="form_submission_success = true"
        />
        <SuccessesFormSubmitted v-if="form_submission_success" />
      </template>
    </section>
  </section>
</template>
