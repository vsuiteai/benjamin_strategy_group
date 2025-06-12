<script setup lang="ts">
import { useModalStore } from "~/store/modal_store";
import { modalTypes } from "~/config/modal_types";

const route = useRoute();
const domain = useDomain();

definePageMeta({
  layout: "authenticated",
  breadcrumb_top: "ddgdgd",
  breadcrumb_bottom: "dgdgdgdgdg",
  middleware: ["authenticated"],
});

onBeforeMount(async () => {
  //   const res = await clientController.get_client(uid);
  //   console.log(res);
  //   client.value = res.client;
  //   submissions.value = (
  //     await clientController.get_client_submissions(uid)
  //   ).submissions;
});
</script>

<template>
  <section class="min-w-full min-h-full px-[25px] lg:px-[50px]">
    <div
      class="grid grid-cols-12 items-start justify-between gap-x-[20px] w-full"
    >
      <div class="col-span-7">
        <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          Submissions
        </h3>

        <div class="mt-14">
          <!-- {{ submissions }} -->
        </div>
      </div>

      <div class="col-span-5 flex justify-start overflow-y-scroll">
        <div
          class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-4 w-full"
        >
          <!-- {{ client }} -->

          <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Contacts
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
