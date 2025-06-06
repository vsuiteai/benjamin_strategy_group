<script setup lang="ts">
import { useAOFSectionOneStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionOneStore";
import { useAOFSectionTwoStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionTwoStore";
import { useAOFSectionThreeStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionThreeStore";
import { useAOFSectionFourStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionFourStore";
import { useAOFSectionFiveStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionFiveStore";
import { useAOFSectionSixStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionSixStore";

import Step_one from "./form_steps/step_one.vue";
import Step_two from "./form_steps/step_two.vue";
import Step_three from "./form_steps/step_three.vue";
import Step_four from "./form_steps/step_four.vue";
import Step_five from "./form_steps/step_five.vue";
import Step_six from "./form_steps/step_six.vue";

const props = defineProps<{
  client_details: ClientDetail | null;
}>();

const emits = defineEmits(["form_submission_success"]);

const advisorFormController = useAdvisiorFormController();
const AOFSectionOneStore = useAOFSectionOneStore();
const AOFSectionTwoStore = useAOFSectionTwoStore();
const AOFSectionThreeStore = useAOFSectionThreeStore();
const AOFSectionFourStore = useAOFSectionFourStore();
const AOFSectionFiveStore = useAOFSectionFiveStore();
const AOFSectionSixStore = useAOFSectionSixStore();

// const { is_not_mobile_screen } = useScreenSize();
// const create_new_virtual_card_form_store = useCreateNewVirtualCardFormStore();
// const modal_store = useModalStore();

const currentStep = ref<number>(1);
const error_submitting = ref<boolean>(false);
const submitting = ref<boolean>(false);

const steps_components = computed(() => {
  return [Step_one, Step_two, Step_three, Step_four, Step_five, Step_six];
});

const currentStepComponent = computed(() => {
  return steps_components.value[currentStep.value - 1];
});

const isLastStep = computed(() => {
  return currentStep.value === steps_components.value.length;
});

const gotoPrevStep = () => {
  currentStep.value = currentStep.value === 1 ? 1 : currentStep.value - 1;
  error_submitting.value = error_submitting.value ? false : false;
};

const gotoNextStep = async () => {
  error_submitting.value = error_submitting.value ? false : false;

  if (!validateCurrentStep.value) return;

  if (isLastStep.value && props.client_details) {
    // validate and submit form
    try {
      if (submitting.value) return;
      submitting.value = true;

      const res = await advisorFormController.submit_form(props.client_details);
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
      isValid = isValid && AOFSectionOneStore.get_is_step_valid;
      break;
    case 2:
      isValid = isValid && AOFSectionTwoStore.get_is_step_valid;
      break;
    case 3:
      isValid = isValid && AOFSectionThreeStore.get_is_step_valid;
      break;
    case 4:
      isValid = isValid && AOFSectionFourStore.get_is_step_valid;
      break;
    case 5:
      isValid = isValid && AOFSectionFiveStore.get_is_step_valid;
      break;
    case 6:
      isValid = isValid && AOFSectionSixStore.get_is_step_valid;
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
        <span class="text-[24px] font-[600] captalize"
          >Benjamin Strategy Advisors Onboarding</span
        >
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
            class="col-span-3 flex justify-start mr-[50px] h-full max-h-[60vh] overflow-y-scroll pr-2"
          >
            <AdvisiorsOnboardingFormMiscPartsStepProgress
              :current_step="currentStep"
            />
          </div>
          <div class="col-span-9">
            <div class="max-h-[50vh] overflow-y-scroll px-[10px]">
              <component :is="currentStepComponent"></component>
            </div>

            <div class="w-full my-[30px] px-[10px]">
              <div
                :class="{
                  'justify-end': currentStep === 1,
                  'justify-between': currentStep !== 1,
                }"
                class="w-full flex"
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
                    'opacity-[.5] hover:cursor-not-allowed':
                      !validateCurrentStep,
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
              <p
                v-if="error_submitting"
                class="text-red-800 w-full text-center my-4"
              >
                We encontered an error while submittin this form please try
                again. Contact support if problem persist
              </p>
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
