<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

import { useAOFSectionSixStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionSixStore";

const emits = defineEmits(["is_valid"]);

const AOFSectionSixStore = useAOFSectionSixStore();

const schema = toTypedSchema(
  yup.object({
    step_four_any_legal_action_pending: yup
      .string()
      .required("Please select an answer")
      .label("Any legal action pending against your firm?"),
    step_six_are_there_any_confidentiality_security_agreements: yup
      .string()
      .required("Please select an answer")
      .label(
        "Are there any confidentiality or security agreements we need to be aware of?"
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_four_any_legal_action_pending:
      AOFSectionSixStore.get_step_four_any_legal_action_pending,
    step_six_are_there_any_confidentiality_security_agreements:
      AOFSectionSixStore.get_step_six_are_there_any_confidentiality_security_agreements,
  },
});

const [
  step_four_any_legal_action_pending,
  step_four_any_legal_action_pending_attr,
] = defineField("step_four_any_legal_action_pending");
const [
  step_six_are_there_any_confidentiality_security_agreements,
  step_six_are_there_any_confidentiality_security_agreements_attr,
] = defineField("step_six_are_there_any_confidentiality_security_agreements");

const is_step_four_any_legal_action_pending_valid = computed(
  () => step_four_any_legal_action_pending.value && meta.value.valid
);
const is_step_six_are_there_any_confidentiality_security_agreements_valid =
  computed(
    () =>
      step_six_are_there_any_confidentiality_security_agreements.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_four_any_legal_action_pending_valid.value &&
    is_step_six_are_there_any_confidentiality_security_agreements_valid.value
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

  syncStoreValue(
    step_four_any_legal_action_pending,
    () => AOFSectionSixStore.step_four_any_legal_action_pending.question_answer,
    AOFSectionSixStore.update_step_four_any_legal_action_pending
  );
  syncStoreValue(
    step_six_are_there_any_confidentiality_security_agreements,
    () =>
      AOFSectionSixStore
        .step_six_are_there_any_confidentiality_security_agreements
        .question_answer,
    AOFSectionSixStore.update_step_six_are_there_any_confidentiality_security_agreements
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Section six</span>
        <span class="text-[16px] font-[400] text-[#222221]"></span>
      </div>
      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center"> Section six </span>
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
          <label
            for="step_four_any_legal_action_pending"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionSixStore.step_four_any_legal_action_pending
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_four_any_legal_action_pending"
              v-bind="step_four_any_legal_action_pending_attr"
              id="step_four_any_legal_action_pending"
              name="step_four_any_legal_action_pending"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionSixStore
                  .step_four_any_legal_action_pending.question_options"
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
            for="step_six_are_there_any_confidentiality_security_agreements"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              AOFSectionSixStore
                .step_six_are_there_any_confidentiality_security_agreements
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_six_are_there_any_confidentiality_security_agreements
              "
              v-bind="
                step_six_are_there_any_confidentiality_security_agreements_attr
              "
              id="step_six_are_there_any_confidentiality_security_agreements"
              name="step_six_are_there_any_confidentiality_security_agreements"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in AOFSectionSixStore
                  .step_six_are_there_any_confidentiality_security_agreements
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
