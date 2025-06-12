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

const filesController = useFilesController();

const error_fetching_client_files = ref<boolean>(false);
const loading = ref<boolean>(true);
const client_files = ref<any[]>([]);
const pagination = ref<Pagination | null>(null);
const recent_client_files = ref<any[]>([]);

watchEffect(() => {
  if ((client_files.value ?? []).length > 0) {
    recent_client_files.value = filesController.getRecentlyUpdatedFiles(
      client_files.value
    );
  }
});

const get_load_client_files = async () => {
  const client_details = public_client_store.getClient;

  if (client_details == null) {
    error_fetching_client_files.value = true;
    return;
  }

  const uid = client_details.client_uid ?? false;
  if (!uid) {
    error_fetching_client_files.value = true;
    loading.value = false;
    return;
  }
  const res = await clientController.get_client_files(uid);

  if (!(res.files ?? false)) {
    error_fetching_client_files.value = true;
    loading.value = false;

    return;
  }
  client_files.value = res.files;
  pagination.value = res.pagination;
  // console.log(uid);

  loading.value = false;
};

const upload_new_file = () => {
  const client_details = public_client_store.getClient;

  if (client_details == null) {
    return;
  }

  const uid = client_details.client_uid ?? false;

  if (!uid) {
    return;
  }

  filesController.upload_new_file(uid);
};

onMounted(async () => {
  const res = await clientController.get_client(uid);
  // console.log(res);

  if (res.client) {
    public_client_store.setClient(res.client);
  }

  await get_load_client_files();
});
</script>

<template>
  <ClientDashboardBase :uid="uid">
    <template v-if="loading" class="w-full h-full">
      <LoadersFullPage />
    </template>
    <template v-else>
      <template v-if="recent_client_files.length > 0">
        <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Recent Files
        </h3>

        <div class="flex items-start justify-start gap-4 w-full mb-16">
          <div
            v-for="file in recent_client_files"
            class="min-h-[160px] w-[220px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] shadow-sm flex flex-col items-start justify-center"
          >
            <div class="flex items-center justify-center w-full h-[128px]">
              <component
                :is="filesController.getIcon(file.file_type)"
                width="60px"
                height="60px"
              ></component>
            </div>

            <div
              class="px-[16px] py-[12px] w-full h-[36px] bg-white border-t border-[#E2E8F0] rounded-b-[24px] flex items-center"
            >
              <p class="font-[600] text-[14px] text-[#1E293B]">
                {{ filesController.parse_name(file.file_original_name, 6, 4) }}
              </p>
            </div>
          </div>
        </div>
      </template>

      <div class="w-full flex items-center justify-between p-[10px]">
        <div class="flex gap-2 items-center justify-center">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
            Uploaded Files
          </h3>

          <div
            class="h-[24px] min-w-[58px] flex items-center justify-center px-[8px] py-[4px] bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
          >
            {{ pagination?.totalItems }} total
          </div>
        </div>

        <div class="flex items-center justify-center gap-2">
          <button
            @click="upload_new_file"
            class="flex items-center justify-center text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center h-[40px]"
          >
            upload file
          </button>
          <form class="max-w-md min-w-[250px] mx-auto">
            <label
              for="file-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative">
              <input
                type="search"
                id="file-search"
                class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 h-[40px]"
                placeholder="Filename ..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-3 bottom-1.5 bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5"
              >
                <svg
                  class="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <template v-if="client_files.length > 0">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Filename</th>
                <th scope="col" class="px-6 py-3">Uploaded on</th>
                <th scope="col" class="px-6 py-3">Metric(s) contained</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="file in client_files"
                class="border-b border-gray-200 odd:bg-white even:bg-gray-50"
              >
                <th
                  scope="row"
                  class="px-6 py-4 whitespace-nowrap dark:text-white"
                >
                  <div
                    class="min-h-[50px] py-[10px] flex items-center gap-[12px]"
                  >
                    <div
                      class="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-gray-200"
                    >
                      <component
                        :is="filesController.getIcon(file.file_type)"
                        width="20px"
                        height="20px"
                      ></component>
                    </div>

                    <div class="flex flex-col items-start">
                      <span class="font-[700] text-[14px] text-[#475569]">
                        {{
                          filesController.parse_name(
                            file.file_original_name,
                            15,
                            15
                          )
                        }}</span
                      >
                      <!-- <span class="font-[400] text-[14px] text-[#475569]"
                        >25 MB</span
                      > -->
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4 font-[400] text-[14px] text-[#475569]">
                  {{ filesController.parse_date(file.created_at) }}
                </td>
                <td class="px-6 py-4">
                  <span
                    v-if="
                      (file.file_metric_contained ?? '').includes('Financial')
                    "
                    class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
                    >Financial</span
                  >
                  <span
                    v-if="(file.file_metric_contained ?? '').includes('Sales')"
                    class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300"
                    >Sales</span
                  >
                  <span
                    v-if="
                      (file.file_metric_contained ?? '').includes('Operational')
                    "
                    class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300"
                    >Operational</span
                  >
                </td>
              </tr>
            </tbody>
          </table>

          <nav
            v-if="pagination ?? false"
            class="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
            aria-label="Table navigation"
          >
            <span
              class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
              >Showing
              <span class="font-semibold text-gray-900 dark:text-white">{{
                pagination?.showing
              }}</span>
              of
              <span class="font-semibold text-gray-900 dark:text-white">{{
                pagination?.totalItems
              }}</span></span
            >
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button
                  :disabled="!(pagination?.hasPrev ?? false)"
                  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>

              <li>
                <button
                  :disabled="!(pagination?.hasNext ?? false)"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </template>
      </div>
    </template>
  </ClientDashboardBase>
</template>
