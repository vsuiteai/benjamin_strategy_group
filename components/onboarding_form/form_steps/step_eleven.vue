<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionElevenStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionElevenStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionElevenStore =
  useOnboardClientFormSectionElevenStore();

const schema = toTypedSchema(
  yup.object({
    step_eleven_have_you_used_outside_capital: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionElevenStore
          .step_eleven_have_you_used_outside_capital.question_label
      ),
    step_eleven_how_confident_are_you_in_understanding_outside_funding: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionElevenStore
          .step_eleven_how_confident_are_you_in_understanding_outside_funding
          .question_label
      ),

    step_eleven_how_effectively_do_you_use_outside_capital: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionElevenStore
          .step_eleven_how_effectively_do_you_use_outside_capital.question_label
      ),
    step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionElevenStore
          .step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital
          .question_label
      ),
    step_eleven_how_prepared_are_you_to_present_your_business: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionElevenStore
          .step_eleven_how_prepared_are_you_to_present_your_business
          .question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_eleven_have_you_used_outside_capital:
      onboardClientFormSectionElevenStore.get_step_eleven_have_you_used_outside_capital,
    step_eleven_how_confident_are_you_in_understanding_outside_funding:
      onboardClientFormSectionElevenStore.get_step_eleven_how_confident_are_you_in_understanding_outside_funding,
    step_eleven_how_effectively_do_you_use_outside_capital:
      onboardClientFormSectionElevenStore.get_step_eleven_how_effectively_do_you_use_outside_capital,
    step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital:
      onboardClientFormSectionElevenStore.get_step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital,
    step_eleven_how_prepared_are_you_to_present_your_business:
      onboardClientFormSectionElevenStore.get_step_eleven_how_prepared_are_you_to_present_your_business,
  },
});

const [
  step_eleven_have_you_used_outside_capital,
  step_eleven_have_you_used_outside_capital_attr,
] = defineField("step_eleven_have_you_used_outside_capital");
const [
  step_eleven_how_confident_are_you_in_understanding_outside_funding,
  step_eleven_how_confident_are_you_in_understanding_outside_funding_attr,
] = defineField(
  "step_eleven_how_confident_are_you_in_understanding_outside_funding"
);
const [
  step_eleven_how_effectively_do_you_use_outside_capital,
  step_eleven_how_effectively_do_you_use_outside_capital_attr,
] = defineField("step_eleven_how_effectively_do_you_use_outside_capital");
const [
  step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital,
  step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital_attr,
] = defineField(
  "step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital"
);
const [
  step_eleven_how_prepared_are_you_to_present_your_business,
  step_eleven_how_prepared_are_you_to_present_your_business_attr,
] = defineField("step_eleven_how_prepared_are_you_to_present_your_business");

const is_step_eleven_have_you_used_outside_capital_valid = computed(
  () => step_eleven_have_you_used_outside_capital.value && meta.value.valid
);
const is_step_eleven_how_confident_are_you_in_understanding_outside_funding_valid =
  computed(
    () =>
      step_eleven_how_confident_are_you_in_understanding_outside_funding.value &&
      meta.value.valid
  );
const is_step_eleven_how_effectively_do_you_use_outside_capital_valid =
  computed(
    () =>
      step_eleven_how_effectively_do_you_use_outside_capital.value &&
      meta.value.valid
  );
const is_step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital_valid =
  computed(
    () =>
      step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital.value &&
      meta.value.valid
  );
const is_step_eleven_how_prepared_are_you_to_present_your_business_valid =
  computed(
    () =>
      step_eleven_how_prepared_are_you_to_present_your_business.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_eleven_have_you_used_outside_capital_valid.value &&
    is_step_eleven_how_confident_are_you_in_understanding_outside_funding_valid.value &&
    is_step_eleven_how_effectively_do_you_use_outside_capital_valid.value &&
    is_step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital_valid.value &&
    is_step_eleven_how_prepared_are_you_to_present_your_business_valid
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
    step_eleven_how_confident_are_you_in_understanding_outside_funding,
    () =>
      onboardClientFormSectionElevenStore
        .step_eleven_have_you_used_outside_capital.question_answer,
    onboardClientFormSectionElevenStore.update_step_eleven_have_you_used_outside_capital
  );
  syncStoreValue(
    step_eleven_how_confident_are_you_in_understanding_outside_funding,
    () =>
      onboardClientFormSectionElevenStore
        .step_eleven_how_confident_are_you_in_understanding_outside_funding
        .question_answer,
    onboardClientFormSectionElevenStore.update_step_eleven_how_confident_are_you_in_understanding_outside_funding
  );
  syncStoreValue(
    step_eleven_how_effectively_do_you_use_outside_capital,
    () =>
      onboardClientFormSectionElevenStore
        .step_eleven_how_effectively_do_you_use_outside_capital.question_answer,
    onboardClientFormSectionElevenStore.update_step_eleven_how_effectively_do_you_use_outside_capital
  );
  syncStoreValue(
    step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital,
    () =>
      onboardClientFormSectionElevenStore
        .step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital
        .question_answer,
    onboardClientFormSectionElevenStore.update_step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital
  );

  syncStoreValue(
    step_eleven_how_prepared_are_you_to_present_your_business,
    () =>
      onboardClientFormSectionElevenStore
        .step_eleven_how_prepared_are_you_to_present_your_business
        .question_answer,
    onboardClientFormSectionElevenStore.update_step_eleven_how_prepared_are_you_to_present_your_business
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Outside Capital</span>
        <span class="text-[16px] font-[400] text-[#222221]"> </span>
      </div>

      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center">
          Outside Capital
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
            for="step_eleven_have_you_used_outside_capital"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionElevenStore
                .step_eleven_have_you_used_outside_capital.question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_eleven_have_you_used_outside_capital"
              v-bind="step_eleven_have_you_used_outside_capital_attr"
              id="step_eleven_have_you_used_outside_capital"
              name="step_eleven_have_you_used_outside_capital"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionElevenStore
                  .step_eleven_have_you_used_outside_capital.question_options"
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
            for="step_eleven_how_confident_are_you_in_understanding_outside_funding"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionElevenStore
                .step_eleven_how_confident_are_you_in_understanding_outside_funding
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_eleven_how_confident_are_you_in_understanding_outside_funding
              "
              v-bind="
                step_eleven_how_confident_are_you_in_understanding_outside_funding_attr
              "
              id="step_eleven_how_confident_are_you_in_understanding_outside_funding"
              name="step_eleven_how_confident_are_you_in_understanding_outside_funding"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionElevenStore
                  .step_eleven_how_confident_are_you_in_understanding_outside_funding
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
            for="step_eleven_how_effectively_do_you_use_outside_capital"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionElevenStore
                .step_eleven_how_effectively_do_you_use_outside_capital
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_eleven_how_effectively_do_you_use_outside_capital"
              v-bind="
                step_eleven_how_effectively_do_you_use_outside_capital_attr
              "
              id="step_eleven_how_effectively_do_you_use_outside_capital"
              name="step_eleven_how_effectively_do_you_use_outside_capital"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionElevenStore
                  .step_eleven_how_effectively_do_you_use_outside_capital
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
            for="step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionElevenStore
                .step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital
              "
              v-bind="
                step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital_attr
              "
              id="step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital"
              name="step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionElevenStore
                  .step_eleven_how_frequently_do_you_evaluate_the_ROI_of_outside_capital
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
            for="step_eleven_how_prepared_are_you_to_present_your_business"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionElevenStore
                .step_eleven_how_prepared_are_you_to_present_your_business
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_eleven_how_prepared_are_you_to_present_your_business
              "
              v-bind="
                step_eleven_how_prepared_are_you_to_present_your_business_attr
              "
              id="step_eleven_how_prepared_are_you_to_present_your_business"
              name="step_eleven_how_prepared_are_you_to_present_your_business"
              class="peer/five block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionElevenStore
                  .step_eleven_how_prepared_are_you_to_present_your_business
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
