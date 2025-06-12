<script setup lang="ts">
definePageMeta({
  layout: "guest",
  breadcrumb_top: "",
  breadcrumb_bottom: "",
});

import { usePublicClientStore } from "~/store/public_client_store";

const public_client_store = usePublicClientStore();
const route = useRoute();
const uid = route.params.client_uid as string;

const clientController = useClientController();

onBeforeMount(async () => {
  const res = await clientController.get_client(uid);
  // console.log(res);

  if (res.client) {
    public_client_store.setClient(res.client);
  }
});
</script>

<template>
  <ClientDashboardBase :uid="uid"> Coming Soon </ClientDashboardBase>
</template>
