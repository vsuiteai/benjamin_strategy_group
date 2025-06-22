<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionTwoStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionTwoStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionTwoStore = useOnboardClientFormSectionTwoStore();

const schema = toTypedSchema(
  yup.object({
    step_two_how_often_do_you_recognize_your_emotions: yup
      .string()
      .required("Please enter your answer")
      .label(
        "How often do you recognize your emotions and their impact on your decision-making in business situations?"
      ),
    step_two_how_well_do_you_handle_negative_feedback: yup
      .string()
      .required("Please enter your answer")
      .label(
        "How well do you handle negative feedback from clients, employees, or business partners?"
      ),
    step_two_how_often_do_you_adjust_your_communication_style_to_better_connect:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          "How often do you adjust your communication style to better connect with clients, employees, or stakeholders?"
        ),
    step_two_how_do_you_typically_respond_when_facing_conflict: yup
      .string()
      .required("Please enter your answer")
      .label(
        "How do you typically respond when facing conflict between employees or with clients?"
      ),
    step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          "How frequently do you feel comfortable discussing difficult topics, such as underperformance or unmet expectations, with your team or clients?"
        ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_two_how_often_do_you_recognize_your_emotions:
      onboardClientFormSectionTwoStore.get_step_two_how_often_do_you_recognize_your_emotions,
    step_two_how_well_do_you_handle_negative_feedback:
      onboardClientFormSectionTwoStore.get_step_two_how_well_do_you_handle_negative_feedback,
    step_two_how_often_do_you_adjust_your_communication_style_to_better_connect:
      onboardClientFormSectionTwoStore.get_step_two_how_often_do_you_adjust_your_communication_style_to_better_connect,
    step_two_how_do_you_typically_respond_when_facing_conflict:
      onboardClientFormSectionTwoStore.get_step_two_how_do_you_typically_respond_when_facing_conflict,
    step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics:
      onboardClientFormSectionTwoStore.get_step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics,
  },
});

const [
  step_two_how_often_do_you_recognize_your_emotions,
  step_two_how_often_do_you_recognize_your_emotions_attr,
] = defineField("step_two_how_often_do_you_recognize_your_emotions");
const [
  step_two_how_well_do_you_handle_negative_feedback,
  step_two_how_well_do_you_handle_negative_feedback_attr,
] = defineField("step_two_how_well_do_you_handle_negative_feedback");
const [
  step_two_how_often_do_you_adjust_your_communication_style_to_better_connect,
  step_two_how_often_do_you_adjust_your_communication_style_to_better_connect_attr,
] = defineField(
  "step_two_how_often_do_you_adjust_your_communication_style_to_better_connect"
);
const [
  step_two_how_do_you_typically_respond_when_facing_conflict,
  step_two_how_do_you_typically_respond_when_facing_conflict_attr,
] = defineField("step_two_how_do_you_typically_respond_when_facing_conflict");
const [
  step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics,
  step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics_attr,
] = defineField(
  "step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics"
);

const is_step_two_how_often_do_you_recognize_your_emotions_valid = computed(
  () =>
    step_two_how_often_do_you_recognize_your_emotions.value && meta.value.valid
);
const is_step_two_how_well_do_you_handle_negative_feedback_valid = computed(
  () =>
    step_two_how_well_do_you_handle_negative_feedback.value && meta.value.valid
);
const is_step_two_how_often_do_you_adjust_your_communication_style_to_better_connect_valid =
  computed(
    () =>
      step_two_how_often_do_you_adjust_your_communication_style_to_better_connect.value &&
      meta.value.valid
  );
const is_step_two_how_do_you_typically_respond_when_facing_conflict_valid =
  computed(
    () =>
      step_two_how_do_you_typically_respond_when_facing_conflict.value &&
      meta.value.valid
  );
const is_step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics_valid =
  computed(
    () =>
      step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_two_how_often_do_you_recognize_your_emotions_valid.value &&
    is_step_two_how_well_do_you_handle_negative_feedback_valid.value &&
    is_step_two_how_often_do_you_adjust_your_communication_style_to_better_connect_valid.value &&
    is_step_two_how_do_you_typically_respond_when_facing_conflict_valid.value &&
    is_step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics_valid
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
    step_two_how_well_do_you_handle_negative_feedback,
    () =>
      onboardClientFormSectionTwoStore
        .step_two_how_often_do_you_recognize_your_emotions.question_answer,
    onboardClientFormSectionTwoStore.update_step_two_how_often_do_you_recognize_your_emotions
  );
  syncStoreValue(
    step_two_how_well_do_you_handle_negative_feedback,
    () =>
      onboardClientFormSectionTwoStore
        .step_two_how_well_do_you_handle_negative_feedback.question_answer,
    onboardClientFormSectionTwoStore.update_step_two_how_well_do_you_handle_negative_feedback
  );
  syncStoreValue(
    step_two_how_often_do_you_adjust_your_communication_style_to_better_connect,
    () =>
      onboardClientFormSectionTwoStore
        .step_two_how_often_do_you_adjust_your_communication_style_to_better_connect
        .question_answer,
    onboardClientFormSectionTwoStore.update_step_two_how_often_do_you_adjust_your_communication_style_to_better_connect
  );
  syncStoreValue(
    step_two_how_do_you_typically_respond_when_facing_conflict,
    () =>
      onboardClientFormSectionTwoStore
        .step_two_how_do_you_typically_respond_when_facing_conflict
        .question_answer,
    onboardClientFormSectionTwoStore.update_step_two_how_do_you_typically_respond_when_facing_conflict
  );

  syncStoreValue(
    step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics,
    () =>
      onboardClientFormSectionTwoStore
        .step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics
        .question_answer,
    onboardClientFormSectionTwoStore.update_step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Executive Intelligence</span>
        <span class="text-[16px] font-[400] text-[#222221]"
          >Initial form to gather perspective and practice of new clients.
          Approximate Completion Time: 30 minutes</span
        >
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
          Initial form to gather perspective and practice of new clients.
          Approximate Completion Time: 30 minutes
        </span>
      </div>
      <!-- Current Form Step Header Ends -->

      <!-- Current Form Step Body Begins -->
      <div class="flex w-full px-[25px] lg:px-[0px] flex-col gap-y-[40px]">
        <div class="relative z-0 w-full flex flex-col">
          <label
            for="top_fund_now__status"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >How often do you recognize your emotions and their impact on your
            decision-making in business situations?</label
          >

          <div class="relative">
            <select
              v-model="step_two_how_often_do_you_recognize_your_emotions"
              v-bind="step_two_how_often_do_you_recognize_your_emotions_attr"
              id="step_two_how_often_do_you_recognize_your_emotions"
              name="step_two_how_often_do_you_recognize_your_emotions"
              class="peer/how_often_do_you_recognize_your_emotions block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTwoStore
                  .step_two_how_often_do_you_recognize_your_emotions
                  .question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/how_often_do_you_recognize_your_emotions:rotate-180"
            >
              <IconsDropdownClosedArrow />
            </span>
          </div>
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="top_fund_now__status"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >How well do you handle negative feedback from clients, employees,
            or business partners?</label
          >

          <div class="relative">
            <select
              v-model="step_two_how_well_do_you_handle_negative_feedback"
              v-bind="step_two_how_well_do_you_handle_negative_feedback_attr"
              id="step_two_how_well_do_you_handle_negative_feedback"
              name="step_two_how_well_do_you_handle_negative_feedback"
              class="peer/how_well_do_you_handle_negative_feedback block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTwoStore
                  .step_two_how_well_do_you_handle_negative_feedback
                  .question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/how_well_do_you_handle_negative_feedback:rotate-180"
            >
              <IconsDropdownClosedArrow />
            </span>
          </div>
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="top_fund_now__status"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >How often do you adjust your communication style to better connect
            with clients, employees, or stakeholders?</label
          >

          <div class="relative">
            <select
              v-model="
                step_two_how_often_do_you_adjust_your_communication_style_to_better_connect
              "
              v-bind="
                step_two_how_often_do_you_adjust_your_communication_style_to_better_connect_attr
              "
              id="step_two_how_often_do_you_adjust_your_communication_style_to_better_connect"
              name="step_two_how_often_do_you_adjust_your_communication_style_to_better_connect"
              class="peer/how_often_do_you_adjust_your_comm_style block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTwoStore
                  .step_two_how_often_do_you_adjust_your_communication_style_to_better_connect
                  .question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/how_often_do_you_adjust_your_comm_style:rotate-180"
            >
              <IconsDropdownClosedArrow />
            </span>
          </div>
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="top_fund_now__status"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >How do you typically respond when facing conflict between employees
            or with clients?</label
          >

          <div class="relative">
            <select
              v-model="
                step_two_how_do_you_typically_respond_when_facing_conflict
              "
              v-bind="
                step_two_how_do_you_typically_respond_when_facing_conflict_attr
              "
              id="step_two_how_do_you_typically_respond_when_facing_conflict"
              name="step_two_how_do_you_typically_respond_when_facing_conflict"
              class="peer/respond_when_facing_conflict block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTwoStore
                  .step_two_how_do_you_typically_respond_when_facing_conflict
                  .question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/respond_when_facing_conflict:rotate-180"
            >
              <IconsDropdownClosedArrow />
            </span>
          </div>
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="top_fund_now__status"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >How frequently do you feel comfortable discussing difficult topics,
            such as underperformance or unmet expectations, with your team or
            clients?</label
          >

          <div class="relative">
            <select
              v-model="
                step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics
              "
              v-bind="
                step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics_attr
              "
              id="step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics"
              name="step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics"
              class="peer/discussing_difficult_topics block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTwoStore
                  .step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics
                  .question_options"
              >
                <option :value="option">
                  {{ option }}
                </option>
              </template>
            </select>

            <span
              class="block absolute translate-y-[-50%] top-[50%] right-[5%] rotate-0 peer-focus/discussing_difficult_topics:rotate-180"
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
