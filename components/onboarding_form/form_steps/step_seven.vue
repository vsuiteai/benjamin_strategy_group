<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionSevenStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionSevenStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionSevenStore =
  useOnboardClientFormSectionSevenStore();

const schema = toTypedSchema(
  yup.object({
    step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionSevenStore
            .step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems
            .question_label
        ),
    step_seven_how_confident_are_you_in_handling_unexpected_operational_issues:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionSevenStore
            .step_seven_how_confident_are_you_in_handling_unexpected_operational_issues
            .question_label
        ),

    step_seven_how_often_do_you_seek_input_when_solving_complex_problems: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionSevenStore
          .step_seven_how_often_do_you_seek_input_when_solving_complex_problems
          .question_label
      ),
    step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionSevenStore
            .step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges
            .question_label
        ),

    step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionSevenStore
            .step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn
            .question_label
        ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems:
      onboardClientFormSectionSevenStore.get_step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems,
    step_seven_how_confident_are_you_in_handling_unexpected_operational_issues:
      onboardClientFormSectionSevenStore.get_step_seven_how_confident_are_you_in_handling_unexpected_operational_issues,
    step_seven_how_often_do_you_seek_input_when_solving_complex_problems:
      onboardClientFormSectionSevenStore.get_step_seven_how_often_do_you_seek_input_when_solving_complex_problems,
    step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges:
      onboardClientFormSectionSevenStore.get_step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges,
    step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn:
      onboardClientFormSectionSevenStore.get_step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn,
  },
});

const [
  step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems,
  step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems_attr,
] = defineField(
  "step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems"
);
const [
  step_seven_how_confident_are_you_in_handling_unexpected_operational_issues,
  step_seven_how_confident_are_you_in_handling_unexpected_operational_issues_attr,
] = defineField(
  "step_seven_how_confident_are_you_in_handling_unexpected_operational_issues"
);
const [
  step_seven_how_often_do_you_seek_input_when_solving_complex_problems,
  step_seven_how_often_do_you_seek_input_when_solving_complex_problems_attr,
] = defineField(
  "step_seven_how_often_do_you_seek_input_when_solving_complex_problems"
);
const [
  step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges,
  step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges_attr,
] = defineField(
  "step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges"
);
const [
  step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn,
  step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn_attr,
] = defineField(
  "step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn"
);

const is_step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems_valid =
  computed(
    () =>
      step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems.value &&
      meta.value.valid
  );
const is_step_seven_how_confident_are_you_in_handling_unexpected_operational_issues_valid =
  computed(
    () =>
      step_seven_how_confident_are_you_in_handling_unexpected_operational_issues.value &&
      meta.value.valid
  );
const is_step_seven_how_often_do_you_seek_input_when_solving_complex_problems_valid =
  computed(
    () =>
      step_seven_how_often_do_you_seek_input_when_solving_complex_problems.value &&
      meta.value.valid
  );
const is_step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges_valid =
  computed(
    () =>
      step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges.value &&
      meta.value.valid
  );
const is_step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn_valid =
  computed(
    () =>
      step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems_valid.value &&
    is_step_seven_how_confident_are_you_in_handling_unexpected_operational_issues_valid.value &&
    is_step_seven_how_often_do_you_seek_input_when_solving_complex_problems_valid.value &&
    is_step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges_valid.value &&
    is_step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn_valid
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
    step_seven_how_confident_are_you_in_handling_unexpected_operational_issues,
    () =>
      onboardClientFormSectionSevenStore
        .step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems
        .question_answer,
    onboardClientFormSectionSevenStore.update_step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems
  );
  syncStoreValue(
    step_seven_how_confident_are_you_in_handling_unexpected_operational_issues,
    () =>
      onboardClientFormSectionSevenStore
        .step_seven_how_confident_are_you_in_handling_unexpected_operational_issues
        .question_answer,
    onboardClientFormSectionSevenStore.update_step_seven_how_confident_are_you_in_handling_unexpected_operational_issues
  );
  syncStoreValue(
    step_seven_how_often_do_you_seek_input_when_solving_complex_problems,
    () =>
      onboardClientFormSectionSevenStore
        .step_seven_how_often_do_you_seek_input_when_solving_complex_problems
        .question_answer,
    onboardClientFormSectionSevenStore.update_step_seven_how_often_do_you_seek_input_when_solving_complex_problems
  );
  syncStoreValue(
    step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges,
    () =>
      onboardClientFormSectionSevenStore
        .step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges
        .question_answer,
    onboardClientFormSectionSevenStore.update_step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges
  );

  syncStoreValue(
    step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn,
    () =>
      onboardClientFormSectionSevenStore
        .step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn
        .question_answer,
    onboardClientFormSectionSevenStore.update_step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Problem Solving</span>
        <span class="text-[16px] font-[400] text-[#222221]"> </span>
      </div>

      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center">
          Problem Solving
        </span>
        <span
          class="font-[400] text-[14px] text-center tracking-[0.02em] w-[80%]"
        >
        </span>
      </div>
      <!-- Current Form Step Header Ends -->

      <!-- Current Form Step Body Begins -->
      <div class="flex w-full px-[25px] lg:px-[0px] flex-col gap-y-[40px]">
        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSevenStore
                .step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems
              "
              v-bind="
                step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems_attr
              "
              id="step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems"
              name="step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSevenStore
                  .step_seven_how_frequently_do_you_identify_the_root_cause_of_biz_problems
                  .question_options"
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
            for="step_seven_how_confident_are_you_in_handling_unexpected_operational_issues"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSevenStore
                .step_seven_how_confident_are_you_in_handling_unexpected_operational_issues
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_seven_how_confident_are_you_in_handling_unexpected_operational_issues
              "
              v-bind="
                step_seven_how_confident_are_you_in_handling_unexpected_operational_issues_attr
              "
              id="step_seven_how_confident_are_you_in_handling_unexpected_operational_issues"
              name="step_seven_how_confident_are_you_in_handling_unexpected_operational_issues"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSevenStore
                  .step_seven_how_confident_are_you_in_handling_unexpected_operational_issues
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
            for="step_seven_how_often_do_you_seek_input_when_solving_complex_problems"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSevenStore
                .step_seven_how_often_do_you_seek_input_when_solving_complex_problems
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_seven_how_often_do_you_seek_input_when_solving_complex_problems
              "
              v-bind="
                step_seven_how_often_do_you_seek_input_when_solving_complex_problems_attr
              "
              id="step_seven_how_often_do_you_seek_input_when_solving_complex_problems"
              name="step_seven_how_often_do_you_seek_input_when_solving_complex_problems"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSevenStore
                  .step_seven_how_often_do_you_seek_input_when_solving_complex_problems
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
            for="step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSevenStore
                .step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges
              "
              v-bind="
                step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges_attr
              "
              id="step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges"
              name="step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSevenStore
                  .step_seven_how_quickly_do_you_make_decisions_when_faced_with_business_challenges
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

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSevenStore
                .step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn
              "
              v-bind="
                step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn_attr
              "
              id="step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn"
              name="step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn"
              class="peer/five block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSevenStore
                  .step_seven_how_often_do_you_evaluate_the_success_of_your_solutn_after_implementn
                  .question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/five:rotate-180"
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
