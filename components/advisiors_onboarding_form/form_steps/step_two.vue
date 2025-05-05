<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

import { useAOFSectionTwoStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionTwoStore";

const emits = defineEmits(["is_valid"]);

const AOFSectionTwoStore = useAOFSectionTwoStore();

const schema = toTypedSchema(
  yup.object({
    step_two_social_media_with_thes_trongest_presence: yup
      .array()
      .of(yup.string())
      .min(
        2,
        "Select at least two platforms where your company has the strongest presence"
      )
      .required(
        "Which social media does your company have the strongest presence? List the top 2"
      )
      .label(
        "Which social media does your company have the strongest presence? List the top 2"
      ),
    // other fields...
    step_two_company_start_date: yup
      .string()
      .required("Please enter your phone number")
      .label("Phone Number"),
    step_two_legal_organization_status: yup
      .string()
      .required("Please enter your work email")
      .label("Work Email"),
    step_two_number_of_employees: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
    step_two_number_of_contractors: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
    step_two_does_your_firm_have_union_workers: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_two_social_media_with_thes_trongest_presence:
      AOFSectionTwoStore.get_step_two_social_media_with_thes_trongest_presence,
    step_two_company_start_date:
      AOFSectionTwoStore.get_step_two_company_start_date,
    step_two_legal_organization_status:
      AOFSectionTwoStore.get_step_two_legal_organization_status,
    step_two_number_of_employees:
      AOFSectionTwoStore.get_step_two_number_of_employees,
    step_two_number_of_contractors:
      AOFSectionTwoStore.get_step_two_number_of_contractors,
    step_two_does_your_firm_have_union_workers:
      AOFSectionTwoStore.get_step_two_does_your_firm_have_union_workers,
  },
});

const [
  step_two_social_media_with_thes_trongest_presence,
  step_two_social_media_with_thes_trongest_presence_attr,
] = defineField("step_two_social_media_with_thes_trongest_presence");
const [step_two_company_start_date, step_two_company_start_date_attr] =
  defineField("step_two_company_start_date");
const [
  step_two_legal_organization_status,
  step_two_legal_organization_status_attr,
] = defineField("step_two_legal_organization_status");
const [step_two_number_of_employees, step_two_number_of_employees_attr] =
  defineField("step_two_number_of_employees");
const [step_two_number_of_contractors, step_two_number_of_contractors_attr] =
  defineField("step_two_number_of_contractors");
const [
  step_two_does_your_firm_have_union_workers,
  step_two_does_your_firm_have_union_workers_attr,
] = defineField("step_two_does_your_firm_have_union_workers");

const is_step_two_social_media_with_thes_trongest_presence_valid = computed(
  () =>
    step_two_social_media_with_thes_trongest_presence.value && meta.value.valid
);
const is_step_two_company_start_date_valid = computed(
  () => step_two_company_start_date.value && meta.value.valid
);
const is_step_two_legal_organization_status_valid = computed(
  () => step_two_legal_organization_status.value && meta.value.valid
);
const is_step_two_number_of_employees_valid = computed(
  () => step_two_number_of_employees.value && meta.value.valid
);
const is_step_two_number_of_contractors_valid = computed(
  () => step_two_number_of_contractors.value && meta.value.valid
);
const is_step_two_does_your_firm_have_union_workers_valid = computed(
  () => step_two_does_your_firm_have_union_workers.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_step_two_social_media_with_thes_trongest_presence_valid.value &&
    is_step_two_company_start_date_valid.value &&
    is_step_two_legal_organization_status_valid.value &&
    is_step_two_number_of_employees_valid.value &&
    is_step_two_number_of_contractors_valid.value &&
    is_step_two_does_your_firm_have_union_workers_valid.value
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

onMounted(() => {
  // Sync fields with store

  syncStoreValue<string[]>(
    step_two_social_media_with_thes_trongest_presence,
    () =>
      AOFSectionTwoStore.step_two_social_media_with_thes_trongest_presence
        .question_answer,
    AOFSectionTwoStore.update_step_two_social_media_with_thes_trongest_presence
  );
  syncStoreValue(
    step_two_company_start_date,
    () => AOFSectionTwoStore.step_two_company_start_date.question_answer,
    AOFSectionTwoStore.update_step_two_company_start_date
  );
  syncStoreValue(
    step_two_legal_organization_status,
    () => AOFSectionTwoStore.step_two_legal_organization_status.question_answer,
    AOFSectionTwoStore.update_step_two_legal_organization_status
  );
  syncStoreValue(
    step_two_number_of_employees,
    () => AOFSectionTwoStore.step_two_number_of_employees.question_answer,
    AOFSectionTwoStore.update_step_two_number_of_employees
  );
  syncStoreValue(
    step_two_number_of_contractors,
    () => AOFSectionTwoStore.step_two_number_of_contractors.question_answer,
    AOFSectionTwoStore.update_step_two_number_of_contractors
  );
  syncStoreValue(
    step_two_does_your_firm_have_union_workers,
    () =>
      AOFSectionTwoStore.step_two_does_your_firm_have_union_workers
        .question_answer,
    AOFSectionTwoStore.update_step_two_does_your_firm_have_union_workers
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Section two</span>
        <span class="text-[16px] font-[400] text-[#222221]"
          >Initial form to gather new client details. Client will upload or
          provide access to company data at later date.</span
        >
      </div>
      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center"> Section two </span>
        <span
          class="font-[400] text-[14px] text-center tracking-[0.02em] w-[80%]"
        >
          Initial form to gather new client details. Client will upload or
          provide access to company data at later date.
        </span>
      </div>
      <!-- Current Form Step Header Ends -->
      <!-- {{ isCurrentStepCompleted }} -->
      <!-- Current Form Step Body Begins -->
      <div class="flex w-full px-[25px] lg:px-[0px] flex-col gap-y-[40px]">
        <div class="relative z-0 w-full flex flex-col">
          <h3 class="mb-4 text-[18px] font-[600] text-black">
            {{
              AOFSectionTwoStore
                .step_two_social_media_with_thes_trongest_presence
                .question_label
            }}
          </h3>
          <ul
            class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <li
              v-for="(opt, index) in AOFSectionTwoStore
                .step_two_social_media_with_thes_trongest_presence
                .question_options"
              :key="opt"
              :class="{
                'w-full border-b border-gray-200 sm:border-b-0 sm:border-r':
                  index !==
                  AOFSectionTwoStore
                    .step_two_social_media_with_thes_trongest_presence
                    .question_options.length -
                    1,
                'w-full dark:border-gray-600':
                  index ===
                  AOFSectionTwoStore
                    .step_two_social_media_with_thes_trongest_presence
                    .question_options.length -
                    1,
              }"
            >
              <div class="flex items-center ps-3">
                <input
                  v-model="step_two_social_media_with_thes_trongest_presence"
                  v-bind="
                    step_two_social_media_with_thes_trongest_presence_attr
                  "
                  :id="`${opt}-checkbox-list`"
                  type="checkbox"
                  :value="opt"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  :for="`${opt}-checkbox-list`"
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >{{ opt }}</label
                >
              </div>
            </li>
          </ul>
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_two_company_start_date"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{ AOFSectionTwoStore.step_two_company_start_date.question_label }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_two_company_start_date"
            v-bind="step_two_company_start_date_attr"
            type="date"
            id="step_two_company_start_date"
            name="step_two_company_start_date"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter a date"
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_two_legal_organization_status"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionTwoStore.step_two_legal_organization_status
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_two_legal_organization_status"
              v-bind="step_two_legal_organization_status_attr"
              id="step_two_legal_organization_status"
              name="step_two_legal_organization_status"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionTwoStore
                  .step_two_legal_organization_status.question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/one:rotate-180"
            >
              <IconsDropdownClosedArrow />
            </span>
          </div>
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_two_number_of_employees"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionTwoStore.step_two_number_of_employees.question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_two_number_of_employees"
              v-bind="step_two_number_of_employees_attr"
              id="step_two_number_of_employees"
              name="step_two_number_of_employees"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionTwoStore.step_two_number_of_employees
                  .question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/two:rotate-180"
            >
              <IconsDropdownClosedArrow />
            </span>
          </div>
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_two_number_of_contractors"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionTwoStore.step_two_number_of_contractors.question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_two_number_of_contractors"
              v-bind="step_two_number_of_contractors_attr"
              id="step_two_number_of_contractors"
              name="step_two_number_of_contractors"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionTwoStore
                  .step_two_number_of_contractors.question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/three:rotate-180"
            >
              <IconsDropdownClosedArrow />
            </span>
          </div>
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_two_does_your_firm_have_union_workers"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionTwoStore.step_two_does_your_firm_have_union_workers
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_two_does_your_firm_have_union_workers"
              v-bind="step_two_does_your_firm_have_union_workers_attr"
              id="step_two_does_your_firm_have_union_workers"
              name="step_two_does_your_firm_have_union_workers"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionTwoStore
                  .step_two_does_your_firm_have_union_workers.question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/four:rotate-180"
            >
              <IconsDropdownClosedArrow />
            </span>
          </div>
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
