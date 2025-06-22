<script setup lang="ts">
import { useOnboardClientFormSectionOneStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionOneStore";
import { useOnboardClientFormSectionTwoStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionTwoStore";
import { useOnboardClientFormSectionThreeStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionThreeStore";
import { useOnboardClientFormSectionFourStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionFourStore";
import { useOnboardClientFormSectionFiveStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionFiveStore";
import { useOnboardClientFormSectionSixStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionSixStore";
import { useOnboardClientFormSectionSevenStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionSevenStore";
import { useOnboardClientFormSectionEightStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionEightStore";
import { useOnboardClientFormSectionNineStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionNineStore";
import { useOnboardClientFormSectionTenStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionTenStore";
import { useOnboardClientFormSectionElevenStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionElevenStore";
import { useOnboardClientFormSectionTwelveStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionTwelveStore";
import { useOnboardClientFormSectionOneThreeStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionOneThreeStore";

import Step_one from "./form_steps/step_one.vue";
import Step_two from "./form_steps/step_two.vue";
import Step_three from "./form_steps/step_three.vue";
import Step_four from "./form_steps/step_four.vue";
import Step_five from "./form_steps/step_five.vue";
import Step_six from "./form_steps/step_six.vue";
import Step_seven from "./form_steps/step_seven.vue";
import Step_eight from "./form_steps/step_eight.vue";
import Step_nine from "./form_steps/step_nine.vue";
import Step_ten from "./form_steps/step_ten.vue";
import Step_eleven from "./form_steps/step_eleven.vue";
import Step_twelve from "./form_steps/step_twelve.vue";
import Step_one_three from "./form_steps/step_one_three.vue";

const onboardClientFormSectionOneStore = useOnboardClientFormSectionOneStore();
const onboardClientFormSectionTwoStore = useOnboardClientFormSectionTwoStore();
const onboardClientFormSectionThreeStore =
  useOnboardClientFormSectionThreeStore();
const onboardClientFormSectionFourStore =
  useOnboardClientFormSectionFourStore();
const onboardClientFormSectionFiveStore =
  useOnboardClientFormSectionFiveStore();
const onboardClientFormSectionSixStore = useOnboardClientFormSectionSixStore();
const onboardClientFormSectionSevenStore =
  useOnboardClientFormSectionSevenStore();
const onboardClientFormSectionEightStore =
  useOnboardClientFormSectionEightStore();
const onboardClientFormSectionNineStore =
  useOnboardClientFormSectionNineStore();
const onboardClientFormSectionTenStore = useOnboardClientFormSectionTenStore();
const onboardClientFormSectionElevenStore =
  useOnboardClientFormSectionElevenStore();
const onboardClientFormSectionTwelveStore =
  useOnboardClientFormSectionTwelveStore();
const onboardClientFormSectionOneThreeStore =
  useOnboardClientFormSectionOneThreeStore();

const CEOOnboardingFormController = useCEOOnboardingFormController();

const props = defineProps<{
  client_details: ClientDetail | null;
}>();

const emits = defineEmits(["form_submission_success"]);

// const { is_not_mobile_screen } = useScreenSize();
// const create_new_virtual_card_form_store = useCreateNewVirtualCardFormStore();
// const modal_store = useModalStore();

const steps_components = computed(() => {
  return [
    Step_one,
    Step_two,
    Step_three,
    Step_four,
    Step_five,
    Step_six,
    Step_seven,
    Step_eight,
    Step_nine,
    Step_ten,
    Step_eleven,
    Step_twelve,
    Step_one_three,
  ];
});

const currentStep = ref<number>(1);
const error_submitting = ref<boolean>(false);
const submitting = ref<boolean>(false);

const currentStepComponent = computed(() => {
  return steps_components.value[currentStep.value - 1];
});

const isLastStep = computed(() => {
  return currentStep.value === steps_components.value.length;
});

const gotoPrevStep = () => {
  currentStep.value = currentStep.value === 1 ? 1 : currentStep.value - 1;
};

const gotoNextStep = async () => {
  error_submitting.value = error_submitting.value ? false : false;

  if (!validateCurrentStep.value) return;

  if (isLastStep.value && props.client_details) {
    // validate and submit form
    try {
      if (submitting.value) return;
      submitting.value = true;

      const res = await CEOOnboardingFormController.submit_form(
        props.client_details
      );
      emits("form_submission_success");
    } catch (error) {
      console.log(error);
      error_submitting.value = true;
    }

    submitting.value = false;
    return;
  }

  currentStep.value = currentStep.value + 1;
};

const validateCurrentStep = computed(() => {
  let isValid = true;

  switch (currentStep.value) {
    case 1:
      isValid = isValid && onboardClientFormSectionOneStore.get_is_step_valid;
      break;
    case 2:
      isValid = isValid && onboardClientFormSectionTwoStore.get_is_step_valid;
      break;
    case 3:
      isValid = isValid && onboardClientFormSectionThreeStore.get_is_step_valid;
      break;
    case 4:
      isValid = isValid && onboardClientFormSectionFourStore.get_is_step_valid;
      break;
    case 5:
      isValid = isValid && onboardClientFormSectionFiveStore.get_is_step_valid;
      break;
    case 6:
      isValid = isValid && onboardClientFormSectionSixStore.get_is_step_valid;
      break;
    case 7:
      isValid = isValid && onboardClientFormSectionSevenStore.get_is_step_valid;
      break;
    case 8:
      isValid = isValid && onboardClientFormSectionEightStore.get_is_step_valid;
      break;
    case 9:
      isValid = isValid && onboardClientFormSectionNineStore.get_is_step_valid;
      break;
    case 10:
      isValid = isValid && onboardClientFormSectionTenStore.get_is_step_valid;
      break;
    case 11:
      isValid =
        isValid && onboardClientFormSectionElevenStore.get_is_step_valid;
      break;
    case 12:
      isValid =
        isValid && onboardClientFormSectionTwelveStore.get_is_step_valid;
      break;
    case 13:
      isValid =
        isValid && onboardClientFormSectionOneThreeStore.get_is_step_valid;
      break;
  }

  return isValid;
});

onMounted(() => {});
</script>

<template>
  <section class="p-[25px] lg:p-[50px]">
    <div
      class="flex flex-col items-start justify-between py-[35px] px-[30px] gap-y-[25px] bg-white rounded-[20px] shadow-[0_3px_3px_18px_rgba(0,0,0,0.01)]"
    >
      <div
        class="flex flex-col lg:flex-row items-center justify-between w-full"
      >
        <span class="text-[24px] font-[600] captalize">CEO Onboarding </span>
        <span class="text-[18px] font-[600] uppercase text-gray-600">{{
          client_details?.client_company_name
        }}</span>
      </div>
      <hr class="h-px w-full bg-black/[0.3]" />
      <div class="w-full">
        <div></div>

        <div
          class="grid grid-cols-12 items-start justify-between px-[20px] divide-x gap-x-[20px] w-full min-h-[65vh]"
        >
          <div
            class="col-span-3 flex justify-start h-full max-h-[60vh] overflow-y-scroll"
          >
            <OnboardingFormMiscPartsStepProgress :current_step="currentStep" />
          </div>
          <div class="col-span-9 pl-[20px]">
            <div class="max-h-[50vh] overflow-y-scroll px-[10px]">
              <component :is="currentStepComponent"></component>
            </div>

            <div
              :class="{
                'justify-end': currentStep === 1,
                'justify-between': currentStep !== 1,
              }"
              class="w-full flex my-[40px] px-[10px]"
            >
              <button
                @click="gotoPrevStep()"
                v-if="currentStep > 1"
                class="px-[50px] py-[16px] rounded-[2px] flex items-center justify-center gap-[10px] text-black border-[1px]"
              >
                <span class="text-[18px] font-[500]">Back</span>
              </button>
              <button
                @click="gotoNextStep()"
                :class="{
                  'opacity-[.5] hover:cursor-not-allowed': !validateCurrentStep,
                }"
                :disabled="!validateCurrentStep"
                class="px-[50px] py-[16px] rounded-[2px] bg-black flex items-center justify-center gap-[10px] text-white"
              >
                <span v-if="isLastStep">Submit</span>
                <span v-else class="text-[18px] font-[500]">Continue</span>
                <span>
                  <IconsArrowRightLeftWithLongerLegs />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- For Mobile Screens --
  <div
    v-if="!is_not_mobile_screen"
    class="block flex flex-col gap-y-6 w-full h-full gap-y-[40px]"
  >
    <section class="px-[25px] lg:px-[50px]">
      <CreateCardMiscPartsStepProgress
        :current_step="currentStep"
      />
    </section>

    <component :is="currentStepComponent" :is_mobile="true"></component>

    <section
      class="px-[25px] lg:px-[50px] flex gap-[15px] pb-4 items-center overflow-x-auto mt-[80px]"
    >
      <div class="w-full flex justify-center">
        <button
          @click="gotoNextStep()"
          :class="{
            'opacity-[.5] hover:cursor-not-allowed': !validateCurrentStep,
          }"
          :disabled="!validateCurrentStep"
          class="w-full max-w-sm px-[50px] py-[16px] rounded-[2px] bg-black flex items-center justify-center gap-[10px] text-white"
        >
          <span v-if="isLastStep">Send Gift</span>
          <span v-else class="text-[18px] font-[500]">Continue</span>
          <span>
            <IconsArrowRightLeftWithLongerLegs />
          </span>
        </button>
      </div>
    </section>
  </div>
--></template>
