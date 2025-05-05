<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionNineStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionNineStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionNineStore =
  useOnboardClientFormSectionNineStore();

const schema = toTypedSchema(
  yup.object({
    step_nine_do_you_currently_have_a_documented_marketing_plan: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionNineStore
          .step_nine_do_you_currently_have_a_documented_marketing_plan
          .question_label
      ),
    step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionNineStore
            .step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts
            .question_label
        ),

    step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionNineStore
            .step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need
            .question_label
        ),
    step_nine_how_effectively_do_you_measure_the_ROI: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionNineStore
          .step_nine_how_effectively_do_you_measure_the_ROI.question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_nine_do_you_currently_have_a_documented_marketing_plan:
      onboardClientFormSectionNineStore.get_step_nine_do_you_currently_have_a_documented_marketing_plan,
    step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts:
      onboardClientFormSectionNineStore.get_step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts,
    step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need:
      onboardClientFormSectionNineStore.get_step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need,
    step_nine_how_effectively_do_you_measure_the_ROI:
      onboardClientFormSectionNineStore.get_step_nine_how_effectively_do_you_measure_the_ROI,
  },
});

const [
  step_nine_do_you_currently_have_a_documented_marketing_plan,
  step_nine_do_you_currently_have_a_documented_marketing_plan_attr,
] = defineField("step_nine_do_you_currently_have_a_documented_marketing_plan");
const [
  step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts,
  step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts_attr,
] = defineField(
  "step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts"
);
const [
  step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need,
  step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need_attr,
] = defineField(
  "step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need"
);
const [
  step_nine_how_effectively_do_you_measure_the_ROI,
  step_nine_how_effectively_do_you_measure_the_ROI_attr,
] = defineField("step_nine_how_effectively_do_you_measure_the_ROI");

const is_step_nine_do_you_currently_have_a_documented_marketing_plan_valid =
  computed(
    () =>
      step_nine_do_you_currently_have_a_documented_marketing_plan.value &&
      meta.value.valid
  );
const is_step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts_valid =
  computed(
    () =>
      step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts.value &&
      meta.value.valid
  );
const is_step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need_valid =
  computed(
    () =>
      step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need.value &&
      meta.value.valid
  );
const is_step_nine_how_effectively_do_you_measure_the_ROI_valid = computed(
  () =>
    step_nine_how_effectively_do_you_measure_the_ROI.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_step_nine_do_you_currently_have_a_documented_marketing_plan_valid.value &&
    is_step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts_valid.value &&
    is_step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need_valid.value &&
    is_step_nine_how_effectively_do_you_measure_the_ROI_valid.value
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
    step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts,
    () =>
      onboardClientFormSectionNineStore
        .step_nine_do_you_currently_have_a_documented_marketing_plan
        .question_answer,
    onboardClientFormSectionNineStore.update_step_nine_do_you_currently_have_a_documented_marketing_plan
  );
  syncStoreValue(
    step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts,
    () =>
      onboardClientFormSectionNineStore
        .step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts
        .question_answer,
    onboardClientFormSectionNineStore.update_step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts
  );
  syncStoreValue(
    step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need,
    () =>
      onboardClientFormSectionNineStore
        .step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need
        .question_answer,
    onboardClientFormSectionNineStore.update_step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need
  );
  syncStoreValue(
    step_nine_how_effectively_do_you_measure_the_ROI,
    () =>
      onboardClientFormSectionNineStore
        .step_nine_how_effectively_do_you_measure_the_ROI.question_answer,
    onboardClientFormSectionNineStore.update_step_nine_how_effectively_do_you_measure_the_ROI
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Marketing Intelligence</span>
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
            for="step_nine_do_you_currently_have_a_documented_marketing_plan"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionNineStore
                .step_nine_do_you_currently_have_a_documented_marketing_plan
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_nine_do_you_currently_have_a_documented_marketing_plan
              "
              v-bind="
                step_nine_do_you_currently_have_a_documented_marketing_plan_attr
              "
              id="step_nine_do_you_currently_have_a_documented_marketing_plan"
              name="step_nine_do_you_currently_have_a_documented_marketing_plan"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionNineStore
                  .step_nine_do_you_currently_have_a_documented_marketing_plan
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
            for="step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionNineStore
                .step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts
              "
              v-bind="
                step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts_attr
              "
              id="step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts"
              name="step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionNineStore
                  .step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts
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
            for="step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionNineStore
                .step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need
              "
              v-bind="
                step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need_attr
              "
              id="step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need"
              name="step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionNineStore
                  .step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need
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
            for="step_nine_how_effectively_do_you_measure_the_ROI"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionNineStore
                .step_nine_how_effectively_do_you_measure_the_ROI.question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_nine_how_effectively_do_you_measure_the_ROI"
              v-bind="step_nine_how_effectively_do_you_measure_the_ROI_attr"
              id="step_nine_how_effectively_do_you_measure_the_ROI"
              name="step_nine_how_effectively_do_you_measure_the_ROI"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionNineStore
                  .step_nine_how_effectively_do_you_measure_the_ROI
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
