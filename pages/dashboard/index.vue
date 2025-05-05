<script setup lang="ts">
const route = useRoute("/dashboard");

const username = ref("Edet");

definePageMeta({
  layout: "authenticated",
  breadcrumb_top: "",
  breadcrumb_bottom: "",
});

route.meta.breadcrumb_top = `Welcome back, ${username.value}`;
route.meta.breadcrumb_bottom = "Dashboard";
</script>

<template>
  <section class="min-w-full min-h-full px-[25px] lg:px-[50px]"></section>
</template>
