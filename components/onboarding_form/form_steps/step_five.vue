<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionFiveStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionFiveStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionFiveStore =
  useOnboardClientFormSectionFiveStore();

const schema = toTypedSchema(
  yup.object({
    step_five_how_do_you_respond_to_significant_setbacks_in_your_biz: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionFiveStore
          .step_five_how_do_you_respond_to_significant_setbacks_in_your_biz
          .question_label
      ),
    step_five_rate_your_ability_to_stay_motivated_during_business_challenges:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionFiveStore
            .step_five_rate_your_ability_to_stay_motivated_during_business_challenges
            .question_label
        ),

    step_five_how_do_you_adapt_your_strategies_after_facing_obstacles: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionFiveStore
          .step_five_how_do_you_adapt_your_strategies_after_facing_obstacles
          .question_label
      ),
    step_five_how_do_you_manage_stress_in_your_biz: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionFiveStore
          .step_five_how_do_you_manage_stress_in_your_biz.question_label
      ),
    step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionFiveStore
          .step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges
          .question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_five_how_do_you_respond_to_significant_setbacks_in_your_biz:
      onboardClientFormSectionFiveStore.get_step_five_how_do_you_respond_to_significant_setbacks_in_your_biz,
    step_five_rate_your_ability_to_stay_motivated_during_business_challenges:
      onboardClientFormSectionFiveStore.get_step_five_rate_your_ability_to_stay_motivated_during_business_challenges,
    step_five_how_do_you_adapt_your_strategies_after_facing_obstacles:
      onboardClientFormSectionFiveStore.get_step_five_how_do_you_adapt_your_strategies_after_facing_obstacles,
    step_five_how_do_you_manage_stress_in_your_biz:
      onboardClientFormSectionFiveStore.get_step_five_how_do_you_manage_stress_in_your_biz,
    step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges:
      onboardClientFormSectionFiveStore.get_step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges,
  },
});

const [
  step_five_how_do_you_respond_to_significant_setbacks_in_your_biz,
  step_five_how_do_you_respond_to_significant_setbacks_in_your_biz_attr,
] = defineField(
  "step_five_how_do_you_respond_to_significant_setbacks_in_your_biz"
);
const [
  step_five_rate_your_ability_to_stay_motivated_during_business_challenges,
  step_five_rate_your_ability_to_stay_motivated_during_business_challenges_attr,
] = defineField(
  "step_five_rate_your_ability_to_stay_motivated_during_business_challenges"
);
const [
  step_five_how_do_you_adapt_your_strategies_after_facing_obstacles,
  step_five_how_do_you_adapt_your_strategies_after_facing_obstacles_attr,
] = defineField(
  "step_five_how_do_you_adapt_your_strategies_after_facing_obstacles"
);
const [
  step_five_how_do_you_manage_stress_in_your_biz,
  step_five_how_do_you_manage_stress_in_your_biz_attr,
] = defineField("step_five_how_do_you_manage_stress_in_your_biz");
const [
  step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges,
  step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges_attr,
] = defineField(
  "step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges"
);

const is_step_five_how_do_you_respond_to_significant_setbacks_in_your_biz_valid =
  computed(
    () =>
      step_five_how_do_you_respond_to_significant_setbacks_in_your_biz.value &&
      meta.value.valid
  );
const is_step_five_rate_your_ability_to_stay_motivated_during_business_challenges_valid =
  computed(
    () =>
      step_five_rate_your_ability_to_stay_motivated_during_business_challenges.value &&
      meta.value.valid
  );
const is_step_five_how_do_you_adapt_your_strategies_after_facing_obstacles_valid =
  computed(
    () =>
      step_five_how_do_you_adapt_your_strategies_after_facing_obstacles.value &&
      meta.value.valid
  );
const is_step_five_how_do_you_manage_stress_in_your_biz_valid = computed(
  () => step_five_how_do_you_manage_stress_in_your_biz.value && meta.value.valid
);
const is_step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges_valid =
  computed(
    () =>
      step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_five_how_do_you_respond_to_significant_setbacks_in_your_biz_valid.value &&
    is_step_five_rate_your_ability_to_stay_motivated_during_business_challenges_valid.value &&
    is_step_five_how_do_you_adapt_your_strategies_after_facing_obstacles_valid.value &&
    is_step_five_how_do_you_manage_stress_in_your_biz_valid.value &&
    is_step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges_valid
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
    step_five_rate_your_ability_to_stay_motivated_during_business_challenges,
    () =>
      onboardClientFormSectionFiveStore
        .step_five_how_do_you_respond_to_significant_setbacks_in_your_biz
        .question_answer,
    onboardClientFormSectionFiveStore.update_step_five_how_do_you_respond_to_significant_setbacks_in_your_biz
  );
  syncStoreValue(
    step_five_rate_your_ability_to_stay_motivated_during_business_challenges,
    () =>
      onboardClientFormSectionFiveStore
        .step_five_rate_your_ability_to_stay_motivated_during_business_challenges
        .question_answer,
    onboardClientFormSectionFiveStore.update_step_five_rate_your_ability_to_stay_motivated_during_business_challenges
  );
  syncStoreValue(
    step_five_how_do_you_adapt_your_strategies_after_facing_obstacles,
    () =>
      onboardClientFormSectionFiveStore
        .step_five_how_do_you_adapt_your_strategies_after_facing_obstacles
        .question_answer,
    onboardClientFormSectionFiveStore.update_step_five_how_do_you_adapt_your_strategies_after_facing_obstacles
  );
  syncStoreValue(
    step_five_how_do_you_manage_stress_in_your_biz,
    () =>
      onboardClientFormSectionFiveStore
        .step_five_how_do_you_manage_stress_in_your_biz.question_answer,
    onboardClientFormSectionFiveStore.update_step_five_how_do_you_manage_stress_in_your_biz
  );

  syncStoreValue(
    step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges,
    () =>
      onboardClientFormSectionFiveStore
        .step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges
        .question_answer,
    onboardClientFormSectionFiveStore.update_step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Resilience</span>
        <span class="text-[16px] font-[400] text-[#222221]"> </span>
      </div>

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
            for="step_five_how_do_you_respond_to_significant_setbacks_in_your_biz"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFiveStore
                .step_five_how_do_you_respond_to_significant_setbacks_in_your_biz
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_five_how_do_you_respond_to_significant_setbacks_in_your_biz
              "
              v-bind="
                step_five_how_do_you_respond_to_significant_setbacks_in_your_biz_attr
              "
              id="step_five_how_do_you_respond_to_significant_setbacks_in_your_biz"
              name="step_five_how_do_you_respond_to_significant_setbacks_in_your_biz"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFiveStore
                  .step_five_how_do_you_respond_to_significant_setbacks_in_your_biz
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
            for="step_five_rate_your_ability_to_stay_motivated_during_business_challenges"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFiveStore
                .step_five_rate_your_ability_to_stay_motivated_during_business_challenges
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_five_rate_your_ability_to_stay_motivated_during_business_challenges
              "
              v-bind="
                step_five_rate_your_ability_to_stay_motivated_during_business_challenges_attr
              "
              id="step_five_rate_your_ability_to_stay_motivated_during_business_challenges"
              name="step_five_rate_your_ability_to_stay_motivated_during_business_challenges"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFiveStore
                  .step_five_rate_your_ability_to_stay_motivated_during_business_challenges
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
            for="step_five_how_do_you_adapt_your_strategies_after_facing_obstacles"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFiveStore
                .step_five_how_do_you_adapt_your_strategies_after_facing_obstacles
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_five_how_do_you_adapt_your_strategies_after_facing_obstacles
              "
              v-bind="
                step_five_how_do_you_adapt_your_strategies_after_facing_obstacles_attr
              "
              id="step_five_how_do_you_adapt_your_strategies_after_facing_obstacles"
              name="step_five_how_do_you_adapt_your_strategies_after_facing_obstacles"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFiveStore
                  .step_five_how_do_you_adapt_your_strategies_after_facing_obstacles
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
            for="step_five_how_do_you_manage_stress_in_your_biz"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFiveStore
                .step_five_how_do_you_manage_stress_in_your_biz.question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_five_how_do_you_manage_stress_in_your_biz"
              v-bind="step_five_how_do_you_manage_stress_in_your_biz_attr"
              id="step_five_how_do_you_manage_stress_in_your_biz"
              name="step_five_how_do_you_manage_stress_in_your_biz"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFiveStore
                  .step_five_how_do_you_manage_stress_in_your_biz
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
            for="step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFiveStore
                .step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges
              "
              v-bind="
                step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges_attr
              "
              id="step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges"
              name="step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges"
              class="peer/five block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFiveStore
                  .step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges
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
