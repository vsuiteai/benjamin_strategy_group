<script setup lang="ts">
import { modalTypes } from "~/config/modal_types";
import { useModalStore } from "~/store/modal_store";

const adminController = useAdminController();
const route = useRoute("/dashboard");

const username = ref("Edet");
const modal_store = useModalStore();

definePageMeta({
  layout: "authenticated",
  breadcrumb_top: "",
  breadcrumb_bottom: "",
  middleware: ["authenticated"],
});

route.meta.breadcrumb_top = `Welcome back, ${username.value}`;
route.meta.breadcrumb_bottom = "Settings";

onMounted(async () => {
  await adminController.get_admins();
});
</script>

<template>
  <section class="min-w-full min-h-full px-[25px] lg:px-[50px] mb-[50px]">
    <div
      class="grid grid-cols-12 items-start justify-between gap-x-[20px] w-full mb-16"
    >
      <div class="col-span-7"></div>

      <div class="col-span-5 flex justify-start overflow-y-scroll">
        <div
          class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-4 w-full"
        >
          <!-- {{ client }} -->

          <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <div class="flex items-center justify-between gap-2 mb-10">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                Admins
              </h3>
              <button
                @click="modal_store.setActiveModal(modalTypes.create_new_admin)"
                class="flex items-center justify-center text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs w-full sm:w-auto px-4 py-1 text-center"
              >
                <IconsPlus width="10px" class="mr-2" />
                Add Admin
              </button>
            </div>

            <AdminsListOfAdmins />
          </div>
        </div>
      </div>
    </div>

    <!-- {{ queries.length }} -->
  </section>
</template>
