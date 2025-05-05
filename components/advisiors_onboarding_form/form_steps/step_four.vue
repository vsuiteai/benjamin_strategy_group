<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

import { useAOFSectionFourStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionFourStore";

const emits = defineEmits(["is_valid"]);

const AOFSectionFourStore = useAOFSectionFourStore();

const schema = toTypedSchema(
  yup.object({
    step_four_which_makes_up_your_capital_stack: yup
      .array()
      .of(yup.string())
      .min(
        1,
        "Select at least two platforms where your company has the strongest presence"
      )
      .required(
        "Which social media does your company have the strongest presence? List the top 2"
      )
      .label(
        "Which social media does your company have the strongest presence? List the top 2"
      ),
    step_four_name_of_your_accountant_CPA_firm: yup
      .string()
      .required("Please enter ther CRM")
      .label("CRM"),

    step_four_main_competitors: yup
      .string()
      .required("Please enter your Product or service mix")
      .label("Product or service mix"),
    step_four_which_best_rep_your_financial_status: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
    step_four_is_your_firm_currently_using_ai: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
    step_four_any_legal_action_against_your_firm: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_four_which_makes_up_your_capital_stack:
      AOFSectionFourStore.get_step_four_which_makes_up_your_capital_stack,
    step_four_name_of_your_accountant_CPA_firm:
      AOFSectionFourStore.get_step_four_name_of_your_accountant_CPA_firm,
    step_four_main_competitors:
      AOFSectionFourStore.get_step_four_main_competitors,
    step_four_which_best_rep_your_financial_status:
      AOFSectionFourStore.get_step_four_which_best_rep_your_financial_status,
    step_four_is_your_firm_currently_using_ai:
      AOFSectionFourStore.get_step_four_is_your_firm_currently_using_ai,
    step_four_any_legal_action_against_your_firm:
      AOFSectionFourStore.get_step_four_any_legal_action_against_your_firm,
  },
});

const [
  step_four_which_makes_up_your_capital_stack,
  step_four_which_makes_up_your_capital_stack_attr,
] = defineField("step_four_which_makes_up_your_capital_stack");
const [
  step_four_name_of_your_accountant_CPA_firm,
  step_four_name_of_your_accountant_CPA_firm_attr,
] = defineField("step_four_name_of_your_accountant_CPA_firm");
const [step_four_main_competitors, step_four_main_competitors_attr] =
  defineField("step_four_main_competitors");
const [
  step_four_which_best_rep_your_financial_status,
  step_four_which_best_rep_your_financial_status_attr,
] = defineField("step_four_which_best_rep_your_financial_status");
const [
  step_four_is_your_firm_currently_using_ai,
  step_four_is_your_firm_currently_using_ai_attr,
] = defineField("step_four_is_your_firm_currently_using_ai");
const [
  step_four_any_legal_action_against_your_firm,
  step_four_any_legal_action_against_your_firm_attr,
] = defineField("step_four_any_legal_action_against_your_firm");

const is_step_four_which_makes_up_your_capital_stack_valid = computed(
  () => step_four_which_makes_up_your_capital_stack.value && meta.value.valid
);
const is_step_four_name_of_your_accountant_CPA_firm_valid = computed(
  () => step_four_name_of_your_accountant_CPA_firm.value && meta.value.valid
);
const is_step_four_main_competitors_valid = computed(
  () => step_four_main_competitors.value && meta.value.valid
);
const is_step_four_which_best_rep_your_financial_status_valid = computed(
  () => step_four_which_best_rep_your_financial_status.value && meta.value.valid
);
const is_step_four_is_your_firm_currently_using_ai_valid = computed(
  () => step_four_is_your_firm_currently_using_ai.value && meta.value.valid
);
const is_step_four_any_legal_action_against_your_firm_valid = computed(
  () => step_four_any_legal_action_against_your_firm.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_step_four_which_makes_up_your_capital_stack_valid.value &&
    is_step_four_name_of_your_accountant_CPA_firm_valid.value &&
    is_step_four_main_competitors_valid.value &&
    is_step_four_which_best_rep_your_financial_status_valid.value &&
    is_step_four_is_your_firm_currently_using_ai_valid.value &&
    is_step_four_any_legal_action_against_your_firm_valid.value
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
    step_four_which_makes_up_your_capital_stack,
    () =>
      AOFSectionFourStore.step_four_which_makes_up_your_capital_stack
        .question_answer,
    AOFSectionFourStore.update_step_four_which_makes_up_your_capital_stack
  );
  syncStoreValue(
    step_four_name_of_your_accountant_CPA_firm,
    () =>
      AOFSectionFourStore.step_four_name_of_your_accountant_CPA_firm
        .question_answer,
    AOFSectionFourStore.update_step_four_name_of_your_accountant_CPA_firm
  );
  syncStoreValue(
    step_four_main_competitors,
    () => AOFSectionFourStore.step_four_main_competitors.question_answer,
    AOFSectionFourStore.update_step_four_main_competitors
  );
  syncStoreValue(
    step_four_which_best_rep_your_financial_status,
    () =>
      AOFSectionFourStore.step_four_which_best_rep_your_financial_status
        .question_answer,
    AOFSectionFourStore.update_step_four_which_best_rep_your_financial_status
  );
  syncStoreValue(
    step_four_is_your_firm_currently_using_ai,
    () =>
      AOFSectionFourStore.step_four_is_your_firm_currently_using_ai
        .question_answer,
    AOFSectionFourStore.update_step_four_is_your_firm_currently_using_ai
  );
  syncStoreValue(
    step_four_any_legal_action_against_your_firm,
    () =>
      AOFSectionFourStore.step_four_any_legal_action_against_your_firm
        .question_answer,
    AOFSectionFourStore.update_step_four_any_legal_action_against_your_firm
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Section four</span>
        <span class="text-[16px] font-[400] text-[#222221]"></span>
      </div>
      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center"> Section four </span>
        <span
          class="font-[400] text-[14px] text-center tracking-[0.02em] w-[80%]"
        >
        </span>
      </div>
      <!-- Current Form Step Header Ends -->
      <!-- {{ isCurrentStepCompleted }} -->
      <!-- Current Form Step Body Begins -->
      <div class="flex w-full px-[25px] lg:px-[0px] flex-col gap-y-[40px]">
        <div class="relative z-0 w-full flex flex-col">
          <h3 class="mb-4 text-[18px] font-[600] text-black">
            {{
              AOFSectionFourStore.step_four_which_makes_up_your_capital_stack
                .question_label
            }}
          </h3>
          <ul
            class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-2"
          >
            <li
              v-for="(opt, index) in AOFSectionFourStore
                .step_four_which_makes_up_your_capital_stack.question_options"
              :key="opt"
              class="w-full border-l border-gray-200"
            >
              <div class="flex items-center ps-3">
                <input
                  v-model="step_four_which_makes_up_your_capital_stack"
                  v-bind="step_four_which_makes_up_your_capital_stack_attr"
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
            for="step_four_name_of_your_accountant_CPA_firm"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionFourStore.step_four_name_of_your_accountant_CPA_firm
                .question_label
            }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_four_name_of_your_accountant_CPA_firm"
            v-bind="step_four_name_of_your_accountant_CPA_firm_attr"
            type="text"
            id="step_four_name_of_your_accountant_CPA_firm"
            name="step_four_name_of_your_accountant_CPA_firm"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder=""
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_four_main_competitors"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{ AOFSectionFourStore.step_four_main_competitors.question_label }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_four_main_competitors"
            v-bind="step_four_main_competitors_attr"
            type="text"
            id="step_four_main_competitors"
            name="step_four_main_competitors"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder=""
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_four_which_best_rep_your_financial_status"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionFourStore.step_four_which_best_rep_your_financial_status
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_four_which_best_rep_your_financial_status"
              v-bind="step_four_which_best_rep_your_financial_status_attr"
              id="step_four_which_best_rep_your_financial_status"
              name="step_four_which_best_rep_your_financial_status"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionFourStore
                  .step_four_which_best_rep_your_financial_status
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
            for="step_four_is_your_firm_currently_using_ai"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionFourStore.step_four_is_your_firm_currently_using_ai
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_four_is_your_firm_currently_using_ai"
              v-bind="step_four_is_your_firm_currently_using_ai_attr"
              id="step_four_is_your_firm_currently_using_ai"
              name="step_four_is_your_firm_currently_using_ai"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionFourStore
                  .step_four_is_your_firm_currently_using_ai.question_options"
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
            for="step_four_any_legal_action_against_your_firm"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionFourStore.step_four_any_legal_action_against_your_firm
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_four_any_legal_action_against_your_firm"
              v-bind="step_four_any_legal_action_against_your_firm_attr"
              id="step_four_any_legal_action_against_your_firm"
              name="step_four_any_legal_action_against_your_firm"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionFourStore
                  .step_four_any_legal_action_against_your_firm
                  .question_options"
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
