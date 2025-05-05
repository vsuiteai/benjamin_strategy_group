<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionEightStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionEightStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionEightStore =
  useOnboardClientFormSectionEightStore();

const schema = toTypedSchema(
  yup.object({
    step_eight_do_you_currently_have_a_documented_strategy: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionEightStore
          .step_eight_do_you_currently_have_a_documented_strategy.question_label
      ),
    step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionEightStore
          .step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts
          .question_label
      ),
    /**
 * ,
      ,
      ,
      ,
 */
    step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionEightStore
            .step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities
            .question_label
        ),
    step_eight_how_frequently_do_you_adjust_your_sales_tactics: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionEightStore
          .step_eight_how_frequently_do_you_adjust_your_sales_tactics
          .question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_eight_do_you_currently_have_a_documented_strategy:
      onboardClientFormSectionEightStore.get_step_eight_do_you_currently_have_a_documented_strategy,
    step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts:
      onboardClientFormSectionEightStore.get_step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts,
    step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities:
      onboardClientFormSectionEightStore.get_step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities,
    step_eight_how_frequently_do_you_adjust_your_sales_tactics:
      onboardClientFormSectionEightStore.get_step_eight_how_frequently_do_you_adjust_your_sales_tactics,
  },
});

const [
  step_eight_do_you_currently_have_a_documented_strategy,
  step_eight_do_you_currently_have_a_documented_strategy_attr,
] = defineField("step_eight_do_you_currently_have_a_documented_strategy");
const [
  step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts,
  step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts_attr,
] = defineField(
  "step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts"
);
const [
  step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities,
  step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities_attr,
] = defineField(
  "step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities"
);
const [
  step_eight_how_frequently_do_you_adjust_your_sales_tactics,
  step_eight_how_frequently_do_you_adjust_your_sales_tactics_attr,
] = defineField("step_eight_how_frequently_do_you_adjust_your_sales_tactics");

const is_step_eight_do_you_currently_have_a_documented_strategy_valid =
  computed(
    () =>
      step_eight_do_you_currently_have_a_documented_strategy.value &&
      meta.value.valid
  );
const is_step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts_valid =
  computed(
    () =>
      step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts.value &&
      meta.value.valid
  );
const is_step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities_valid =
  computed(
    () =>
      step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities.value &&
      meta.value.valid
  );
const is_step_eight_how_frequently_do_you_adjust_your_sales_tactics_valid =
  computed(
    () =>
      step_eight_how_frequently_do_you_adjust_your_sales_tactics.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_eight_do_you_currently_have_a_documented_strategy_valid.value &&
    is_step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts_valid.value &&
    is_step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities_valid.value &&
    is_step_eight_how_frequently_do_you_adjust_your_sales_tactics_valid.value
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
    step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts,
    () =>
      onboardClientFormSectionEightStore
        .step_eight_do_you_currently_have_a_documented_strategy.question_answer,
    onboardClientFormSectionEightStore.update_step_eight_do_you_currently_have_a_documented_strategy
  );
  syncStoreValue(
    step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts,
    () =>
      onboardClientFormSectionEightStore
        .step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts
        .question_answer,
    onboardClientFormSectionEightStore.update_step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts
  );
  syncStoreValue(
    step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities,
    () =>
      onboardClientFormSectionEightStore
        .step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities
        .question_answer,
    onboardClientFormSectionEightStore.update_step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities
  );
  syncStoreValue(
    step_eight_how_frequently_do_you_adjust_your_sales_tactics,
    () =>
      onboardClientFormSectionEightStore
        .step_eight_how_frequently_do_you_adjust_your_sales_tactics
        .question_answer,
    onboardClientFormSectionEightStore.update_step_eight_how_frequently_do_you_adjust_your_sales_tactics
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Business Scale</span>
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
            for="step_eight_do_you_currently_have_a_documented_strategy"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionEightStore
                .step_eight_do_you_currently_have_a_documented_strategy
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_eight_do_you_currently_have_a_documented_strategy"
              v-bind="
                step_eight_do_you_currently_have_a_documented_strategy_attr
              "
              id="step_eight_do_you_currently_have_a_documented_strategy"
              name="step_eight_do_you_currently_have_a_documented_strategy"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionEightStore
                  .step_eight_do_you_currently_have_a_documented_strategy
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
            for="step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionEightStore
                .step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts
              "
              v-bind="
                step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts_attr
              "
              id="step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts"
              name="step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionEightStore
                  .step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts
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
            for="step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionEightStore
                .step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities
              "
              v-bind="
                step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities_attr
              "
              id="step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities"
              name="step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionEightStore
                  .step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities
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
            for="step_eight_how_frequently_do_you_adjust_your_sales_tactics"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionEightStore
                .step_eight_how_frequently_do_you_adjust_your_sales_tactics
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_eight_how_frequently_do_you_adjust_your_sales_tactics
              "
              v-bind="
                step_eight_how_frequently_do_you_adjust_your_sales_tactics_attr
              "
              id="step_eight_how_frequently_do_you_adjust_your_sales_tactics"
              name="step_eight_how_frequently_do_you_adjust_your_sales_tactics"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionEightStore
                  .step_eight_how_frequently_do_you_adjust_your_sales_tactics
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
