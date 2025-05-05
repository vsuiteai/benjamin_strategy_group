<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

import { useAOFSectionThreeStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionThreeStore";

const emits = defineEmits(["is_valid"]);

const AOFSectionThreeStore = useAOFSectionThreeStore();

const schema = toTypedSchema(
  yup.object({
    step_three_which_staff_titles_are_represented_in_your_firm: yup
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
    // other fields...
    step_three_which_cms_does_your_firm_use: yup
      .string()
      .required("Please enter ther CRM")
      .label("CRM"),
    step_three_what_is_your_product_service_mix: yup
      .string()
      .required("Please enter your Product or service mix")
      .label("Product or service mix"),
    step_three_does_you_family_members_in_leadership: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
    step_three_are_there_any_pending_mergers_or_acquisitions: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
    step_three_how_many_states_do_have_ops: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_three_which_staff_titles_are_represented_in_your_firm:
      AOFSectionThreeStore.get_step_three_which_staff_titles_are_represented_in_your_firm,
    step_three_which_cms_does_your_firm_use:
      AOFSectionThreeStore.get_step_three_which_cms_does_your_firm_use,
    step_three_what_is_your_product_service_mix:
      AOFSectionThreeStore.get_step_three_what_is_your_product_service_mix,
    step_three_does_you_family_members_in_leadership:
      AOFSectionThreeStore.get_step_three_does_you_family_members_in_leadership,
    step_three_are_there_any_pending_mergers_or_acquisitions:
      AOFSectionThreeStore.get_step_three_are_there_any_pending_mergers_or_acquisitions,
    step_three_how_many_states_do_have_ops:
      AOFSectionThreeStore.get_step_three_how_many_states_do_have_ops,
  },
});

const [
  step_three_which_staff_titles_are_represented_in_your_firm,
  step_three_which_staff_titles_are_represented_in_your_firm_attr,
] = defineField("step_three_which_staff_titles_are_represented_in_your_firm");
const [
  step_three_which_cms_does_your_firm_use,
  step_three_which_cms_does_your_firm_use_attr,
] = defineField("step_three_which_cms_does_your_firm_use");
const [
  step_three_what_is_your_product_service_mix,
  step_three_what_is_your_product_service_mix_attr,
] = defineField("step_three_what_is_your_product_service_mix");
const [
  step_three_does_you_family_members_in_leadership,
  step_three_does_you_family_members_in_leadership_attr,
] = defineField("step_three_does_you_family_members_in_leadership");
const [
  step_three_are_there_any_pending_mergers_or_acquisitions,
  step_three_are_there_any_pending_mergers_or_acquisitions_attr,
] = defineField("step_three_are_there_any_pending_mergers_or_acquisitions");
const [
  step_three_how_many_states_do_have_ops,
  step_three_how_many_states_do_have_ops_attr,
] = defineField("step_three_how_many_states_do_have_ops");

const is_step_three_which_staff_titles_are_represented_in_your_firm_valid =
  computed(
    () =>
      step_three_which_staff_titles_are_represented_in_your_firm.value &&
      meta.value.valid
  );
const is_step_three_which_cms_does_your_firm_use_valid = computed(
  () => step_three_which_cms_does_your_firm_use.value && meta.value.valid
);
const is_step_three_what_is_your_product_service_mix_valid = computed(
  () => step_three_what_is_your_product_service_mix.value && meta.value.valid
);
const is_step_three_does_you_family_members_in_leadership_valid = computed(
  () =>
    step_three_does_you_family_members_in_leadership.value && meta.value.valid
);
const is_step_three_are_there_any_pending_mergers_or_acquisitions_valid =
  computed(
    () =>
      step_three_are_there_any_pending_mergers_or_acquisitions.value &&
      meta.value.valid
  );
const is_step_three_how_many_states_do_have_ops_valid = computed(
  () => step_three_how_many_states_do_have_ops.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_step_three_which_staff_titles_are_represented_in_your_firm_valid.value &&
    is_step_three_which_cms_does_your_firm_use_valid.value &&
    is_step_three_what_is_your_product_service_mix_valid.value &&
    is_step_three_does_you_family_members_in_leadership_valid.value &&
    is_step_three_are_there_any_pending_mergers_or_acquisitions_valid.value &&
    is_step_three_how_many_states_do_have_ops_valid.value
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
    step_three_which_staff_titles_are_represented_in_your_firm,
    () =>
      AOFSectionThreeStore
        .step_three_which_staff_titles_are_represented_in_your_firm
        .question_answer,
    AOFSectionThreeStore.update_step_three_which_staff_titles_are_represented_in_your_firm
  );
  syncStoreValue(
    step_three_which_cms_does_your_firm_use,
    () =>
      AOFSectionThreeStore.step_three_which_cms_does_your_firm_use
        .question_answer,
    AOFSectionThreeStore.update_step_three_which_cms_does_your_firm_use
  );
  syncStoreValue(
    step_three_what_is_your_product_service_mix,
    () =>
      AOFSectionThreeStore.step_three_what_is_your_product_service_mix
        .question_answer,
    AOFSectionThreeStore.update_step_three_what_is_your_product_service_mix
  );
  syncStoreValue(
    step_three_does_you_family_members_in_leadership,
    () =>
      AOFSectionThreeStore.step_three_does_you_family_members_in_leadership
        .question_answer,
    AOFSectionThreeStore.update_step_three_does_you_family_members_in_leadership
  );
  syncStoreValue(
    step_three_are_there_any_pending_mergers_or_acquisitions,
    () =>
      AOFSectionThreeStore
        .step_three_are_there_any_pending_mergers_or_acquisitions
        .question_answer,
    AOFSectionThreeStore.update_step_three_are_there_any_pending_mergers_or_acquisitions
  );
  syncStoreValue(
    step_three_how_many_states_do_have_ops,
    () =>
      AOFSectionThreeStore.step_three_how_many_states_do_have_ops
        .question_answer,
    AOFSectionThreeStore.update_step_three_how_many_states_do_have_ops
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Section three</span>
        <span class="text-[16px] font-[400] text-[#222221]"
          >Initial form to gather new client details. Client will upload or
          provide access to company data at later date.</span
        >
      </div>
      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center"> Section three </span>
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
              AOFSectionThreeStore
                .step_three_which_staff_titles_are_represented_in_your_firm
                .question_label
            }}
          </h3>
          <ul
            class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-2"
          >
            <li
              v-for="(opt, index) in AOFSectionThreeStore
                .step_three_which_staff_titles_are_represented_in_your_firm
                .question_options"
              :key="opt"
              class="w-full border-l border-gray-200"
            >
              <div class="flex items-center ps-3">
                <input
                  v-model="
                    step_three_which_staff_titles_are_represented_in_your_firm
                  "
                  v-bind="
                    step_three_which_staff_titles_are_represented_in_your_firm_attr
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
            for="step_three_which_cms_does_your_firm_use"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionThreeStore.step_three_which_cms_does_your_firm_use
                .question_label
            }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_three_which_cms_does_your_firm_use"
            v-bind="step_three_which_cms_does_your_firm_use_attr"
            type="text"
            id="step_three_which_cms_does_your_firm_use"
            name="step_three_which_cms_does_your_firm_use"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="CRM(s) used in you firm"
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_three_what_is_your_product_service_mix"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionThreeStore.step_three_what_is_your_product_service_mix
                .question_label
            }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_three_what_is_your_product_service_mix"
            v-bind="step_three_what_is_your_product_service_mix_attr"
            type="text"
            id="step_three_what_is_your_product_service_mix"
            name="step_three_what_is_your_product_service_mix"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder=""
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_three_does_you_family_members_in_leadership"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionThreeStore
                .step_three_does_you_family_members_in_leadership.question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_three_does_you_family_members_in_leadership"
              v-bind="step_three_does_you_family_members_in_leadership_attr"
              id="step_three_does_you_family_members_in_leadership"
              name="step_three_does_you_family_members_in_leadership"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionThreeStore
                  .step_three_does_you_family_members_in_leadership
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
            for="step_three_are_there_any_pending_mergers_or_acquisitions"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionThreeStore
                .step_three_are_there_any_pending_mergers_or_acquisitions
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_three_are_there_any_pending_mergers_or_acquisitions"
              v-bind="
                step_three_are_there_any_pending_mergers_or_acquisitions_attr
              "
              id="step_three_are_there_any_pending_mergers_or_acquisitions"
              name="step_three_are_there_any_pending_mergers_or_acquisitions"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionThreeStore
                  .step_three_are_there_any_pending_mergers_or_acquisitions
                  .question_options"
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
            for="step_three_how_many_states_do_have_ops"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionThreeStore.step_three_how_many_states_do_have_ops
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_three_how_many_states_do_have_ops"
              v-bind="step_three_how_many_states_do_have_ops_attr"
              id="step_three_how_many_states_do_have_ops"
              name="step_three_how_many_states_do_have_ops"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionThreeStore
                  .step_three_how_many_states_do_have_ops.question_options"
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
