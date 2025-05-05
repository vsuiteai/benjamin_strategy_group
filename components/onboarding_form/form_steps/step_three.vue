<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionThreeStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionThreeStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionThreeStore =
  useOnboardClientFormSectionThreeStore();

const schema = toTypedSchema(
  yup.object({
    step_three_how_often_do_you_review_financial_stmt: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionThreeStore
          .step_three_how_often_do_you_review_financial_stmt.question_label
      ),
    step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionThreeStore
          .step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt
          .question_label
      ),
    step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionThreeStore
            .step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz
            .question_label
        ),
    step_three_how_confident_are_you_in_creating_nd_managing_budgets: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionThreeStore
          .step_three_how_confident_are_you_in_creating_nd_managing_budgets
          .question_label
      ),
    step_three_how_do_you_assess_the_profitability_before_launch: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionThreeStore
          .step_three_how_do_you_assess_the_profitability_before_launch
          .question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_three_how_often_do_you_review_financial_stmt:
      onboardClientFormSectionThreeStore.get_step_three_how_often_do_you_review_financial_stmt,
    step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt:
      onboardClientFormSectionThreeStore.get_step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt,
    step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz:
      onboardClientFormSectionThreeStore.get_step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz,
    step_three_how_confident_are_you_in_creating_nd_managing_budgets:
      onboardClientFormSectionThreeStore.get_step_three_how_confident_are_you_in_creating_nd_managing_budgets,
    step_three_how_do_you_assess_the_profitability_before_launch:
      onboardClientFormSectionThreeStore.get_step_three_how_do_you_assess_the_profitability_before_launch,
  },
});

const [
  step_three_how_often_do_you_review_financial_stmt,
  step_three_how_often_do_you_review_financial_stmt_attr,
] = defineField("step_three_how_often_do_you_review_financial_stmt");
const [
  step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt,
  step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt_attr,
] = defineField(
  "step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt"
);
const [
  step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz,
  step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz_attr,
] = defineField(
  "step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz"
);
const [
  step_three_how_confident_are_you_in_creating_nd_managing_budgets,
  step_three_how_confident_are_you_in_creating_nd_managing_budgets_attr,
] = defineField(
  "step_three_how_confident_are_you_in_creating_nd_managing_budgets"
);
const [
  step_three_how_do_you_assess_the_profitability_before_launch,
  step_three_how_do_you_assess_the_profitability_before_launch_attr,
] = defineField("step_three_how_do_you_assess_the_profitability_before_launch");

const is_step_three_how_often_do_you_review_financial_stmt_valid = computed(
  () =>
    step_three_how_often_do_you_review_financial_stmt.value && meta.value.valid
);
const is_step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt_valid =
  computed(
    () =>
      step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt.value &&
      meta.value.valid
  );
const is_step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz_valid =
  computed(
    () =>
      step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz.value &&
      meta.value.valid
  );
const is_step_three_how_confident_are_you_in_creating_nd_managing_budgets_valid =
  computed(
    () =>
      step_three_how_confident_are_you_in_creating_nd_managing_budgets.value &&
      meta.value.valid
  );
const is_step_three_how_do_you_assess_the_profitability_before_launch_valid =
  computed(
    () =>
      step_three_how_do_you_assess_the_profitability_before_launch.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_three_how_often_do_you_review_financial_stmt_valid.value &&
    is_step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt_valid.value &&
    is_step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz_valid.value &&
    is_step_three_how_confident_are_you_in_creating_nd_managing_budgets_valid.value &&
    is_step_three_how_do_you_assess_the_profitability_before_launch_valid
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
    step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt,
    () =>
      onboardClientFormSectionThreeStore
        .step_three_how_often_do_you_review_financial_stmt.question_answer,
    onboardClientFormSectionThreeStore.update_step_three_how_often_do_you_review_financial_stmt
  );
  syncStoreValue(
    step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt,
    () =>
      onboardClientFormSectionThreeStore
        .step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt
        .question_answer,
    onboardClientFormSectionThreeStore.update_step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt
  );
  syncStoreValue(
    step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz,
    () =>
      onboardClientFormSectionThreeStore
        .step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz
        .question_answer,
    onboardClientFormSectionThreeStore.update_step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz
  );
  syncStoreValue(
    step_three_how_confident_are_you_in_creating_nd_managing_budgets,
    () =>
      onboardClientFormSectionThreeStore
        .step_three_how_confident_are_you_in_creating_nd_managing_budgets
        .question_answer,
    onboardClientFormSectionThreeStore.update_step_three_how_confident_are_you_in_creating_nd_managing_budgets
  );

  syncStoreValue(
    step_three_how_do_you_assess_the_profitability_before_launch,
    () =>
      onboardClientFormSectionThreeStore
        .step_three_how_do_you_assess_the_profitability_before_launch
        .question_answer,
    onboardClientFormSectionThreeStore.update_step_three_how_do_you_assess_the_profitability_before_launch
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Financial Intelligence</span>
        <span class="text-[16px] font-[400] text-[#222221]"> </span>
      </div>

      <!-- 
9. How frequently do you feel comfortable discussing difficult topics, such as underperformance or unmet expectations, with your team or clients? *
    Never, Rarely, Sometimes, Often, Always. -->
      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center">
          General Information
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
            for="step_three_how_often_do_you_review_financial_stmt"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionThreeStore
                .step_three_how_often_do_you_review_financial_stmt
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_three_how_often_do_you_review_financial_stmt"
              v-bind="step_three_how_often_do_you_review_financial_stmt_attr"
              id="step_three_how_often_do_you_review_financial_stmt"
              name="step_three_how_often_do_you_review_financial_stmt"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionThreeStore
                  .step_three_how_often_do_you_review_financial_stmt
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
            for="step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionThreeStore
                .step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt
              "
              v-bind="
                step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt_attr
              "
              id="step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt"
              name="step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionThreeStore
                  .step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt
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
            for="step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionThreeStore
                .step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz
              "
              v-bind="
                step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz_attr
              "
              id="step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz"
              name="step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionThreeStore
                  .step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz
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
            for="step_three_how_confident_are_you_in_creating_nd_managing_budgets"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionThreeStore
                .step_three_how_confident_are_you_in_creating_nd_managing_budgets
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_three_how_confident_are_you_in_creating_nd_managing_budgets
              "
              v-bind="
                step_three_how_confident_are_you_in_creating_nd_managing_budgets_attr
              "
              id="step_three_how_confident_are_you_in_creating_nd_managing_budgets"
              name="step_three_how_confident_are_you_in_creating_nd_managing_budgets"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionThreeStore
                  .step_three_how_confident_are_you_in_creating_nd_managing_budgets
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
            for="step_three_how_do_you_assess_the_profitability_before_launch"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionThreeStore
                .step_three_how_do_you_assess_the_profitability_before_launch
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_three_how_do_you_assess_the_profitability_before_launch
              "
              v-bind="
                step_three_how_do_you_assess_the_profitability_before_launch_attr
              "
              id="step_three_how_do_you_assess_the_profitability_before_launch"
              name="step_three_how_do_you_assess_the_profitability_before_launch"
              class="peer/five block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionThreeStore
                  .step_three_how_do_you_assess_the_profitability_before_launch
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
