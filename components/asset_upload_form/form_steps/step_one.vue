<script setup lang="ts">
import { Datepicker } from "flowbite";
import type { DatepickerOptions, DatepickerInterface } from "flowbite";
import type { InstanceOptions } from "flowbite";

import { initFlowbite } from "flowbite";

import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

import { useAssetUploadFormStore } from "~/store/asset_upload_form/useAssetUploadFormStore";

const emits = defineEmits(["is_valid"]);

const asset_upload_form_store = useAssetUploadFormStore();

const dateInputRef_start = ref<HTMLInputElement | null>(null);
const dateInputRef_end = ref<HTMLInputElement | null>(null);

const schema = toTypedSchema(
  yup.object({
    step_two_analysis_start_date: yup
      .string()
      .required("Please enter your Company name")
      .label("Company name"),
    step_two_analysis_end_date: yup
      .string()
      .required("Please enter your phone number")
      .label("Phone Number"),
    step_two_metrics_type_contained_in_the_file: yup
      .array()
      .of(yup.string())
      .min(1, "Select at least 1 metric contained in the file")
      .required(
        "What metric(s) is contained in the file. Please select at least one"
      )
      .label(
        "What metric(s) is contained in the file. Please select at least one"
      ),

    step_two_file_to_be_uploaded: yup
      .mixed<File>()
      .required("File is required")
      .test("fileSize", "File too large", (value) => {
        return value && (value as File).size <= 2 * 1024 * 1024; // 2MB
      })
      .test("fileType", "Unsupported file type", (value) => {
        return (
          value &&
          [
            "text/csv",
            "application/pdf",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes((value as File).type)
        );
      }),
  })
);

interface FormValues {
  step_two_analysis_start_date: string;
  step_two_analysis_end_date: string;
  step_two_metrics_type_contained_in_the_file: string[];
  step_two_file_to_be_uploaded: File | null;
}

const { errors, meta, values, defineField, setFieldValue } =
  useForm<FormValues>({
    validationSchema: schema,
    validateOnMount: true,
    initialValues: {
      step_two_analysis_start_date:
        asset_upload_form_store.get_step_two_analysis_start_date,
      step_two_analysis_end_date:
        asset_upload_form_store.get_step_two_analysis_end_date,
      step_two_metrics_type_contained_in_the_file:
        asset_upload_form_store.get_step_two_metrics_type_contained_in_the_file,
      step_two_file_to_be_uploaded:
        asset_upload_form_store.get_step_two_file_to_be_uploaded as File,
    },
  });

const [step_two_analysis_start_date, step_two_analysis_start_date_attr] =
  defineField("step_two_analysis_start_date");
const [step_two_analysis_end_date, step_two_analysis_end_date_attr] =
  defineField("step_two_analysis_end_date");
const [
  step_two_metrics_type_contained_in_the_file,
  step_two_metrics_type_contained_in_the_file_attr,
] = defineField("step_two_metrics_type_contained_in_the_file");
const [step_two_file_to_be_uploaded, step_two_file_to_be_uploaded_attr] =
  defineField("step_two_file_to_be_uploaded");

const is_step_two_analysis_start_date_valid = computed(
  () => step_two_analysis_start_date.value && meta.value.valid
);
const is_step_two_analysis_end_date_valid = computed(
  () => step_two_analysis_end_date.value && meta.value.valid
);
const is_step_two_metrics_type_contained_in_the_file_valid = computed(
  () => step_two_metrics_type_contained_in_the_file.value && meta.value.valid
);
const is_step_two_file_to_be_uploaded_valid = computed(
  () => step_two_file_to_be_uploaded.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_step_two_analysis_start_date_valid.value &&
    is_step_two_analysis_end_date_valid.value &&
    is_step_two_metrics_type_contained_in_the_file_valid.value &&
    is_step_two_file_to_be_uploaded_valid.value
);

watch(isCurrentStepCompleted, (newVal) => {
  if (newVal) emits("is_valid");
});

const syncStoreValue = <T>(
  localRef: Ref<T | undefined>,
  storeGetter: () => T,
  storeSetter: (value: T) => void
) => {
  if (typeof localRef === "undefined") return;

  watch(localRef, (newVal) => {
    if (newVal) storeSetter(newVal);
  });

  watch(storeGetter, (newVal) => {
    if (newVal !== localRef.value) localRef.value = newVal;
  });
};

const syncStoreValue_file = <T>(
  localRef: Ref<T | null>,
  storeGetter: () => T,
  storeSetter: (value: T) => void
) => {
  if (localRef === null) return;

  watch(localRef, (newVal) => {
    if (newVal) storeSetter(newVal);
  });

  watch(storeGetter, (newVal) => {
    if (newVal !== localRef.value) localRef.value = newVal;
  });
};

const track_date = () => {
  if (!dateInputRef_start.value) return;

  const observer = new MutationObserver(() => {
    const start = dateInputRef_start.value?.value ?? "";
    const end = dateInputRef_end.value?.value ?? "";

    setFieldValue("step_two_analysis_start_date", start);
    setFieldValue("step_two_analysis_end_date", end);
  });

  observer.observe(dateInputRef_start.value, {
    attributes: true,
    attributeFilter: ["value"],
    childList: false,
    subtree: false,
  });

  observer.observe(dateInputRef_end.value, {
    attributes: true,
    attributeFilter: ["value"],
    childList: false,
    subtree: false,
  });

  // Optional fallback: also listen to blur or change
  dateInputRef_start.value.addEventListener("blur", () => {
    const start = dateInputRef_start.value?.value ?? "";
    const end = dateInputRef_end.value?.value ?? "";

    setFieldValue("step_two_analysis_start_date", start);
    setFieldValue("step_two_analysis_end_date", end);
  });

  dateInputRef_end.value.addEventListener("blur", () => {
    const start = dateInputRef_start.value?.value ?? "";
    const end = dateInputRef_end.value?.value ?? "";

    setFieldValue("step_two_analysis_start_date", start);
    setFieldValue("step_two_analysis_end_date", end);
  });
};

onMounted(() => {
  initFlowbite();

  syncStoreValue(
    step_two_analysis_start_date,
    () => asset_upload_form_store.step_two_analysis_start_date.question_answer,
    asset_upload_form_store.update_step_two_analysis_start_date
  );
  syncStoreValue(
    step_two_analysis_end_date,
    () => asset_upload_form_store.step_two_analysis_end_date.question_answer,
    asset_upload_form_store.update_step_two_analysis_end_date
  );
  syncStoreValue(
    step_two_metrics_type_contained_in_the_file,
    () =>
      asset_upload_form_store.step_two_metrics_type_contained_in_the_file
        .question_answer,
    asset_upload_form_store.update_step_two_metrics_type_contained_in_the_file
  );
  syncStoreValue_file(
    step_two_file_to_be_uploaded,
    () => asset_upload_form_store.step_two_file_to_be_uploaded.question_answer,
    asset_upload_form_store.update_step_two_file_to_be_uploaded
  );

  track_date();
});

onUpdated(() => {
  track_date();
});

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    setFieldValue("step_two_file_to_be_uploaded", file);
  }
}
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Section one</span>
        <span class="text-[16px] font-[400] text-[#222221]"
          >Initial form to gather new client details. Client will upload or
          provide access to company data at later date.</span
        >
      </div>
      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center"> Section one </span>
        <span
          class="font-[400] text-[14px] text-center tracking-[0.02em] w-[80%]"
        >
          Initial form to gather new client details. Client will upload or
          provide access to company data at later date.
        </span>
      </div>
      <!-- Current Form Step Header Ends -->
      <!-- {{ values }} -->
      <!-- Current Form Step Body Begins -->
      <div class="flex w-full px-[25px] lg:px-[0px] flex-col gap-y-[50px]">
        <div class="relative z-0 w-full flex flex-col">
          <h3 class="mb-4 text-[18px] font-[600] text-black">
            {{
              asset_upload_form_store
                .step_two_metrics_type_contained_in_the_file.question_label
            }}
          </h3>
          <ul class="grid w-full gap-6 md:grid-cols-3">
            <li
              v-for="(opt, index) in asset_upload_form_store
                .step_two_metrics_type_contained_in_the_file.question_options"
              :key="opt.value"
            >
              <input
                class="hidden peer"
                v-model="step_two_metrics_type_contained_in_the_file"
                v-bind="step_two_metrics_type_contained_in_the_file_attr"
                :id="`${opt.value}-checkbox-list`"
                type="checkbox"
                :value="opt.value"
              />
              <label
                :for="`${opt.value}-checkbox-list`"
                class="inline-flex items-start justify-between w-full p-4 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-black hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 h-full"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">
                    {{ opt.value }}
                  </div>
                  <div class="w-full text-sm">
                    {{ opt.description }}
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>

        <!-- {{ values }}
        {{ errors }} -->

        <div class="relative z-0 max-w-lg w-full flex flex-col">
          <h3 class="mb-4 text-[18px] font-[600] text-black">
            Select the date range captured in the file data
          </h3>
          <div date-rangepicker class="flex items-center w-full gap-x-4">
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <IconsCalender />
              </div>
              <input
                ref="dateInputRef_start"
                type="text"
                id="step_two_analysis_start_date"
                name="step_two_analysis_start_date"
                class="ps-10 block w-full text-black/[.5] lg:py-[18px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] text-[14px] bg-white border-black"
                :placeholder="
                  asset_upload_form_store.step_two_analysis_start_date
                    .question_label
                "
              />
            </div>
            <span class="mx-4 text-gray-500">to</span>
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <IconsCalender />
              </div>
              <input
                ref="dateInputRef_end"
                type="text"
                id="step_two_analysis_end_date"
                name="step_two_analysis_end_date"
                class="ps-10 block w-full text-black/[.5] lg:py-[18px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] text-[14px] bg-white border-black"
                :placeholder="
                  asset_upload_form_store.step_two_analysis_end_date
                    .question_label
                "
              />
            </div>
          </div>
        </div>

        <div class="relative z-0 w-full max-w-lg flex flex-col">
          <h3 class="mb-4 text-[18px] font-[600] text-black">Add a file</h3>
          <div class="flex items-center justify-center w-full">
            <label
              for="file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <IconsUploadCloud />
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  <template
                    v-for="(type, index) in asset_upload_form_store
                      .step_two_file_to_be_uploaded.file_types_needed"
                  >
                    <span
                      class="uppercase"
                      v-if="
                        index ===
                        asset_upload_form_store.step_two_file_to_be_uploaded
                          .file_types_needed.length -
                          1
                      "
                    >
                      or {{ type }}</span
                    >
                    <span v-else class="uppercase">{{ type }}, </span>
                  </template>

                  (MAX. 800x400px)
                </p>

                <p
                  v-if="step_two_file_to_be_uploaded?.name ?? false"
                  class="mt-4 text-sm font-bold text-gray-500 text-left mx-4 max-w-sm break-all"
                >
                  {{ step_two_file_to_be_uploaded?.name ?? "" }}
                </p>
              </div>
              <input
                id="file"
                type="file"
                class="hidden"
                @change="onFileChange"
              />
            </label>
          </div>
          <p class="mt-2 text-red-800">
            {{ errors.step_two_file_to_be_uploaded }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
input[type="number"].as_text::-webkit-inner-spin-button,
input[type="number"].as_text::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* For Firefox */
input[type="number"].as_text {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>
