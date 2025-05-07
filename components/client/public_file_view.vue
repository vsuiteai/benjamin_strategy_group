<script setup lang="ts">
import {
  IconsFileTypesCsvs,
  IconsFileTypesDocs,
  IconsFileTypesPdfs,
  IconsFileTypesUnknown,
  IconsFileTypesXlxs,
} from "#components";

const props = defineProps<{
  client_details: ClientDetail | null;
}>();

const emits = defineEmits(["restart_upload_process"]);

const clientController = useClientController();

const error_fetching_client_files = ref<boolean>(false);
const loading = ref<boolean>(true);
const client_files = ref<any[]>([]);

// IconsFileTypesDocs;
// IconsFileTypesPdfs;
// IconsFileTypesXlxs;
// IconsFileTypesUnknown;

const getIcon = (contentType: string) => {
  let type = null;
  switch (contentType) {
    case "text/csv":
      type = IconsFileTypesCsvs;
      break;
    case "application/pdf":
      type = IconsFileTypesPdfs;
      break;

    default:
      type = IconsFileTypesUnknown;
      break;
  }

  return type;
};

const parse_name = (raw_name: string) => {
  // Get just the filename after the last slash
  const maxLength = 15;
  const fileNameWithPrefix = raw_name.split("/").pop();

  const filename = fileNameWithPrefix?.split("_").slice(1).join("_");

  if (!filename) return "";
  if (filename.length <= maxLength) return filename;

  const ext = filename.split(".").pop() ?? "";
  const nameWithoutExt = filename.slice(0, filename.length - ext.length - 1);

  const firstPart = nameWithoutExt.slice(0, 7);
  const lastPart = nameWithoutExt.slice(-7);

  return `${firstPart}...${lastPart}.${ext}`;
};

const parse_date = (raw_date: string) => {
  const date = new Date(raw_date);

  const formatted = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return formatted;
};

const restart_upload_process = () => {
  emits("restart_upload_process");
};

const goto_file = (publicUrl: string) => {
  if (!(publicUrl ?? false)) return;
  window.open(publicUrl, "_blank", "noopener,noreferrer");
};

onMounted(async () => {
  if (props.client_details == null) {
    error_fetching_client_files.value = true;
    return;
  }

  const uid = props?.client_details.client_uid ?? false;
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
  // console.log(uid);

  loading.value = false;
});
</script>

<template>
  <section>
    <!-- {{ client_files }} -->

    <section class="p-[25px] lg:p-[50px]">
      <div
        class="flex flex-col items-start justify-between py-[35px] px-[30px] gap-y-[25px] bg-white rounded-[20px] shadow-[0_3px_3px_18px_rgba(0,0,0,0.01)]"
      >
        <div
          class="flex flex-col lg:flex-row items-center justify-between w-full"
        >
          <div class="flex items-center justify-center gap-x-4">
            <span class="text-[24px] font-[600] captalize">Uploaded files</span>
          </div>
          <span class="text-[18px] font-[600] uppercase text-gray-600">{{
            client_details?.client_company_name
          }}</span>
        </div>
        <hr class="h-px w-full bg-black/[0.3]" />
        <div class="w-full">
          <div></div>

          <template v-if="loading">
            <LoadersFullPage />
          </template>
          <template v-else>
            <template v-if="(client_files?.length ?? []) == 0">
              <p>You have not uploaded a file yet. Please proceed to do so</p>
              <div class="w-full grid grid-cols-1 mt-10">
                <button
                  @click="restart_upload_process()"
                  class="rounded-r-lg w-full px-[50px] py-[16px] bg-black flex items-center justify-center gap-[10px] text-white"
                >
                  <span>Upload a file</span>
                  <span class="inline-block">
                    <IconsArrowRightLeftWithLongerLegs />
                  </span>
                </button>
              </div>
            </template>
            <template v-else>
              <div
                class="grid grid-cols-4 items-start justify-between divide-x gap-[20px] w-full"
              >
                <template v-for="file in client_files">
                  <!-- {{ file }} -->
                  <div
                    class="p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 grid grid-cols-12 gap-3"
                  >
                    <div
                      @click="goto_file(file?.publicUrl)"
                      class="h-full p-2 border rounded flex items-center justify-center col-span-4 hover:cursor-pointer hover:border-black"
                    >
                      <component :is="getIcon(file.contentType)"></component>
                    </div>

                    <div class="col-span-8">
                      <p
                        class="mb-2 font-semibold text-gray-500 text-sm max-w-full break-all"
                      >
                        {{ parse_name(file.name) }}
                      </p>
                      <p class="mb-2 font-normal text-gray-500 text-sm">
                        {{ parse_date(file.updated) }}
                      </p>
                    </div>
                  </div>
                </template>
              </div>
              <p
                class="text-base leading-relaxed text-gray-500 dark:text-gray-400 my-16 mb-3"
              >
                Do you have another file that you wish to upload?
              </p>
              <div class="w-full grid grid-cols-2">
                <button
                  disabled
                  class="rounded-l-lg w-full px-[50px] py-[16px] bg-gray-700 flex items-center justify-center gap-[10px] text-white cursor-not-allowed"
                >
                  <span>No</span>
                </button>

                <button
                  @click="restart_upload_process()"
                  class="rounded-r-lg w-full px-[50px] py-[16px] bg-black flex items-center justify-center gap-[10px] text-white"
                >
                  <span class="inline-block">
                    <IconsArrowRightLeftWithLongerLegs />
                  </span>
                  <span>Yes</span>
                </button>
              </div>
            </template>
          </template>
        </div>
      </div>
    </section>
  </section>
</template>
