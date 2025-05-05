<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionOneThreeStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionOneThreeStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionOneThreeStore =
  useOnboardClientFormSectionOneThreeStore();

const schema = toTypedSchema(
  yup.object({
    step_one_three_how_well_do_you_leverage_industry_trends: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionOneThreeStore
          .step_one_three_how_well_do_you_leverage_industry_trends
          .question_label
      ),
    step_one_three_how_often_do_you_experiment_in_your_biz: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionOneThreeStore
          .step_one_three_how_often_do_you_experiment_in_your_biz.question_label
      ),

    step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionOneThreeStore
            .step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market
            .question_label
        ),

    step_one_three_how_often_do_you_analyze_your_competitors_strategies: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionOneThreeStore
          .step_one_three_how_often_do_you_analyze_your_competitors_strategies
          .question_label
      ),
    step_one_three_how_effectively_do_you_stay_updated_on_industry_trends: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionOneThreeStore
          .step_one_three_how_effectively_do_you_stay_updated_on_industry_trends
          .question_label
      ),
    step_one_three_how_frequently_do_you_use_customer_feedback: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionOneThreeStore
          .step_one_three_how_frequently_do_you_use_customer_feedback
          .question_label
      ),
    step_one_three_how_well_do_you_identify_new_opportunities: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionOneThreeStore
          .step_one_three_how_well_do_you_identify_new_opportunities
          .question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_one_three_how_well_do_you_leverage_industry_trends:
      onboardClientFormSectionOneThreeStore.get_step_one_three_how_well_do_you_leverage_industry_trends,
    step_one_three_how_often_do_you_experiment_in_your_biz:
      onboardClientFormSectionOneThreeStore.get_step_one_three_how_often_do_you_experiment_in_your_biz,
    step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market:
      onboardClientFormSectionOneThreeStore.get_step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market,
    step_one_three_how_often_do_you_analyze_your_competitors_strategies:
      onboardClientFormSectionOneThreeStore.get_step_one_three_how_often_do_you_analyze_your_competitors_strategies,
    step_one_three_how_effectively_do_you_stay_updated_on_industry_trends:
      onboardClientFormSectionOneThreeStore.get_step_one_three_how_effectively_do_you_stay_updated_on_industry_trends,
    step_one_three_how_frequently_do_you_use_customer_feedback:
      onboardClientFormSectionOneThreeStore.get_step_one_three_how_frequently_do_you_use_customer_feedback,
    step_one_three_how_well_do_you_identify_new_opportunities:
      onboardClientFormSectionOneThreeStore.get_step_one_three_how_well_do_you_identify_new_opportunities,
  },
});

const [
  step_one_three_how_well_do_you_leverage_industry_trends,
  step_one_three_how_well_do_you_leverage_industry_trends_attr,
] = defineField("step_one_three_how_well_do_you_leverage_industry_trends");
const [
  step_one_three_how_often_do_you_experiment_in_your_biz,
  step_one_three_how_often_do_you_experiment_in_your_biz_attr,
] = defineField("step_one_three_how_often_do_you_experiment_in_your_biz");
const [
  step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market,
  step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market_attr,
] = defineField(
  "step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market"
);
const [
  step_one_three_how_often_do_you_analyze_your_competitors_strategies,
  step_one_three_how_often_do_you_analyze_your_competitors_strategies_attr,
] = defineField(
  "step_one_three_how_often_do_you_analyze_your_competitors_strategies"
);
const [
  step_one_three_how_effectively_do_you_stay_updated_on_industry_trends,
  step_one_three_how_effectively_do_you_stay_updated_on_industry_trends_attr,
] = defineField(
  "step_one_three_how_effectively_do_you_stay_updated_on_industry_trends"
);
const [
  step_one_three_how_frequently_do_you_use_customer_feedback,
  step_one_three_how_frequently_do_you_use_customer_feedback_attr,
] = defineField("step_one_three_how_frequently_do_you_use_customer_feedback");

const [
  step_one_three_how_well_do_you_identify_new_opportunities,
  step_one_three_how_well_do_you_identify_new_opportunities_attr,
] = defineField("step_one_three_how_well_do_you_identify_new_opportunities");

const is_step_one_three_how_well_do_you_leverage_industry_trends_valid =
  computed(
    () =>
      step_one_three_how_well_do_you_leverage_industry_trends.value &&
      meta.value.valid
  );
const is_step_one_three_how_often_do_you_experiment_in_your_biz_valid =
  computed(
    () =>
      step_one_three_how_often_do_you_experiment_in_your_biz.value &&
      meta.value.valid
  );
const is_step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market_valid =
  computed(
    () =>
      step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market.value &&
      meta.value.valid
  );
const is_step_one_three_how_often_do_you_analyze_your_competitors_strategies_valid =
  computed(
    () =>
      step_one_three_how_often_do_you_analyze_your_competitors_strategies.value &&
      meta.value.valid
  );
const is_step_one_three_how_effectively_do_you_stay_updated_on_industry_trends_valid =
  computed(
    () =>
      step_one_three_how_effectively_do_you_stay_updated_on_industry_trends.value &&
      meta.value.valid
  );
const is_step_one_three_how_frequently_do_you_use_customer_feedback_valid =
  computed(
    () =>
      step_one_three_how_frequently_do_you_use_customer_feedback.value &&
      meta.value.valid
  );
const is_step_one_three_how_well_do_you_identify_new_opportunities_valid =
  computed(
    () =>
      step_one_three_how_well_do_you_identify_new_opportunities.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_one_three_how_well_do_you_leverage_industry_trends_valid.value &&
    is_step_one_three_how_often_do_you_experiment_in_your_biz_valid.value &&
    is_step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market_valid.value &&
    is_step_one_three_how_often_do_you_analyze_your_competitors_strategies_valid.value &&
    is_step_one_three_how_effectively_do_you_stay_updated_on_industry_trends_valid &&
    is_step_one_three_how_frequently_do_you_use_customer_feedback_valid &&
    is_step_one_three_how_well_do_you_identify_new_opportunities_valid
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
    step_one_three_how_often_do_you_experiment_in_your_biz,
    () =>
      onboardClientFormSectionOneThreeStore
        .step_one_three_how_well_do_you_leverage_industry_trends
        .question_answer,
    onboardClientFormSectionOneThreeStore.update_step_one_three_how_well_do_you_leverage_industry_trends
  );
  syncStoreValue(
    step_one_three_how_often_do_you_experiment_in_your_biz,
    () =>
      onboardClientFormSectionOneThreeStore
        .step_one_three_how_often_do_you_experiment_in_your_biz.question_answer,
    onboardClientFormSectionOneThreeStore.update_step_one_three_how_often_do_you_experiment_in_your_biz
  );
  syncStoreValue(
    step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market,
    () =>
      onboardClientFormSectionOneThreeStore
        .step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market
        .question_answer,
    onboardClientFormSectionOneThreeStore.update_step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market
  );
  syncStoreValue(
    step_one_three_how_often_do_you_analyze_your_competitors_strategies,
    () =>
      onboardClientFormSectionOneThreeStore
        .step_one_three_how_often_do_you_analyze_your_competitors_strategies
        .question_answer,
    onboardClientFormSectionOneThreeStore.update_step_one_three_how_often_do_you_analyze_your_competitors_strategies
  );

  syncStoreValue(
    step_one_three_how_effectively_do_you_stay_updated_on_industry_trends,
    () =>
      onboardClientFormSectionOneThreeStore
        .step_one_three_how_effectively_do_you_stay_updated_on_industry_trends
        .question_answer,
    onboardClientFormSectionOneThreeStore.update_step_one_three_how_effectively_do_you_stay_updated_on_industry_trends
  );

  syncStoreValue(
    step_one_three_how_frequently_do_you_use_customer_feedback,
    () =>
      onboardClientFormSectionOneThreeStore
        .step_one_three_how_frequently_do_you_use_customer_feedback
        .question_answer,
    onboardClientFormSectionOneThreeStore.update_step_one_three_how_frequently_do_you_use_customer_feedback
  );

  syncStoreValue(
    step_one_three_how_well_do_you_identify_new_opportunities,
    () =>
      onboardClientFormSectionOneThreeStore
        .step_one_three_how_well_do_you_identify_new_opportunities
        .question_answer,
    onboardClientFormSectionOneThreeStore.update_step_one_three_how_well_do_you_identify_new_opportunities
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Market Awareness</span>
        <span class="text-[16px] font-[400] text-[#222221]"> </span>
      </div>

      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center">
          Market Awareness
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
            for="step_one_three_how_well_do_you_leverage_industry_trends"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionOneThreeStore
                .step_one_three_how_well_do_you_leverage_industry_trends
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_one_three_how_well_do_you_leverage_industry_trends"
              v-bind="
                step_one_three_how_well_do_you_leverage_industry_trends_attr
              "
              id="step_one_three_how_well_do_you_leverage_industry_trends"
              name="step_one_three_how_well_do_you_leverage_industry_trends"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionOneThreeStore
                  .step_one_three_how_well_do_you_leverage_industry_trends
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
            for="step_one_three_how_often_do_you_experiment_in_your_biz"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionOneThreeStore
                .step_one_three_how_often_do_you_experiment_in_your_biz
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_one_three_how_often_do_you_experiment_in_your_biz"
              v-bind="
                step_one_three_how_often_do_you_experiment_in_your_biz_attr
              "
              id="step_one_three_how_often_do_you_experiment_in_your_biz"
              name="step_one_three_how_often_do_you_experiment_in_your_biz"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionOneThreeStore
                  .step_one_three_how_often_do_you_experiment_in_your_biz
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
            for="step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionOneThreeStore
                .step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market
              "
              v-bind="
                step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market_attr
              "
              id="step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market"
              name="step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionOneThreeStore
                  .step_one_three_how_confident_are_you_in_your_understanding_of_your_target_market
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
            for="step_one_three_how_often_do_you_analyze_your_competitors_strategies"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionOneThreeStore
                .step_one_three_how_often_do_you_analyze_your_competitors_strategies
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_one_three_how_often_do_you_analyze_your_competitors_strategies
              "
              v-bind="
                step_one_three_how_often_do_you_analyze_your_competitors_strategies_attr
              "
              id="step_one_three_how_often_do_you_analyze_your_competitors_strategies"
              name="step_one_three_how_often_do_you_analyze_your_competitors_strategies"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionOneThreeStore
                  .step_one_three_how_often_do_you_analyze_your_competitors_strategies
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
            for="step_one_three_how_effectively_do_you_stay_updated_on_industry_trends"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionOneThreeStore
                .step_one_three_how_effectively_do_you_stay_updated_on_industry_trends
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_one_three_how_effectively_do_you_stay_updated_on_industry_trends
              "
              v-bind="
                step_one_three_how_effectively_do_you_stay_updated_on_industry_trends_attr
              "
              id="step_one_three_how_effectively_do_you_stay_updated_on_industry_trends"
              name="step_one_three_how_effectively_do_you_stay_updated_on_industry_trends"
              class="peer/five block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionOneThreeStore
                  .step_one_three_how_effectively_do_you_stay_updated_on_industry_trends
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

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_three_how_frequently_do_you_use_customer_feedback"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionOneThreeStore
                .step_one_three_how_frequently_do_you_use_customer_feedback
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_one_three_how_frequently_do_you_use_customer_feedback
              "
              v-bind="
                step_one_three_how_frequently_do_you_use_customer_feedback_attr
              "
              id="step_one_three_how_frequently_do_you_use_customer_feedback"
              name="step_one_three_how_frequently_do_you_use_customer_feedback"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionOneThreeStore
                  .step_one_three_how_frequently_do_you_use_customer_feedback
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
            for="step_one_three_how_well_do_you_identify_new_opportunities"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionOneThreeStore
                .step_one_three_how_well_do_you_identify_new_opportunities
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_one_three_how_well_do_you_identify_new_opportunities
              "
              v-bind="
                step_one_three_how_well_do_you_identify_new_opportunities_attr
              "
              id="step_one_three_how_well_do_you_identify_new_opportunities"
              name="step_one_three_how_well_do_you_identify_new_opportunities"
              class="peer/five block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionOneThreeStore
                  .step_one_three_how_well_do_you_identify_new_opportunities
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
