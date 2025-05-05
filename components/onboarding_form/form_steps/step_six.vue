<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionSixStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionSixStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionSixStore = useOnboardClientFormSectionSixStore();

const schema = toTypedSchema(
  yup.object({
    step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionSixStore
            .step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn
            .question_label
        ),
    step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionSixStore
          .step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs
          .question_label
      ),

    step_six_how_frequently_do_you_use_storytelling: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionSixStore
          .step_six_how_frequently_do_you_use_storytelling.question_label
      ),
    step_six_how_confident_are_you_when_negotiating_favorable_terms: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionSixStore
          .step_six_how_confident_are_you_when_negotiating_favorable_terms
          .question_label
      ),

    step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionSixStore
          .step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument
          .question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn:
      onboardClientFormSectionSixStore.get_step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn,
    step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs:
      onboardClientFormSectionSixStore.get_step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs,
    step_six_how_frequently_do_you_use_storytelling:
      onboardClientFormSectionSixStore.get_step_six_how_frequently_do_you_use_storytelling,
    step_six_how_confident_are_you_when_negotiating_favorable_terms:
      onboardClientFormSectionSixStore.get_step_six_how_confident_are_you_when_negotiating_favorable_terms,
    step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument:
      onboardClientFormSectionSixStore.get_step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument,
  },
});

const [
  step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn,
  step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn_attr,
] = defineField(
  "step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn"
);
const [
  step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs,
  step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs_attr,
] = defineField(
  "step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs"
);
const [
  step_six_how_frequently_do_you_use_storytelling,
  step_six_how_frequently_do_you_use_storytelling_attr,
] = defineField("step_six_how_frequently_do_you_use_storytelling");
const [
  step_six_how_confident_are_you_when_negotiating_favorable_terms,
  step_six_how_confident_are_you_when_negotiating_favorable_terms_attr,
] = defineField(
  "step_six_how_confident_are_you_when_negotiating_favorable_terms"
);
const [
  step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument,
  step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument_attr,
] = defineField(
  "step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument"
);

const is_step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn_valid =
  computed(
    () =>
      step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn.value &&
      meta.value.valid
  );
const is_step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs_valid =
  computed(
    () =>
      step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs.value &&
      meta.value.valid
  );
const is_step_six_how_frequently_do_you_use_storytelling_valid = computed(
  () =>
    step_six_how_frequently_do_you_use_storytelling.value && meta.value.valid
);
const is_step_six_how_confident_are_you_when_negotiating_favorable_terms_valid =
  computed(
    () =>
      step_six_how_confident_are_you_when_negotiating_favorable_terms.value &&
      meta.value.valid
  );
const is_step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument_valid =
  computed(
    () =>
      step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn_valid.value &&
    is_step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs_valid.value &&
    is_step_six_how_frequently_do_you_use_storytelling_valid.value &&
    is_step_six_how_confident_are_you_when_negotiating_favorable_terms_valid.value &&
    is_step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument_valid
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
    step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs,
    () =>
      onboardClientFormSectionSixStore
        .step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn
        .question_answer,
    onboardClientFormSectionSixStore.update_step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn
  );
  syncStoreValue(
    step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs,
    () =>
      onboardClientFormSectionSixStore
        .step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs
        .question_answer,
    onboardClientFormSectionSixStore.update_step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs
  );
  syncStoreValue(
    step_six_how_frequently_do_you_use_storytelling,
    () =>
      onboardClientFormSectionSixStore
        .step_six_how_frequently_do_you_use_storytelling.question_answer,
    onboardClientFormSectionSixStore.update_step_six_how_frequently_do_you_use_storytelling
  );
  syncStoreValue(
    step_six_how_confident_are_you_when_negotiating_favorable_terms,
    () =>
      onboardClientFormSectionSixStore
        .step_six_how_confident_are_you_when_negotiating_favorable_terms
        .question_answer,
    onboardClientFormSectionSixStore.update_step_six_how_confident_are_you_when_negotiating_favorable_terms
  );

  syncStoreValue(
    step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument,
    () =>
      onboardClientFormSectionSixStore
        .step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument
        .question_answer,
    onboardClientFormSectionSixStore.update_step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Persuasion</span>
        <span class="text-[16px] font-[400] text-[#222221]"> </span>
      </div>

      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center"> Persuasion </span>
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
            for="step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSixStore
                .step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn
              "
              v-bind="
                step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn_attr
              "
              id="step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn"
              name="step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSixStore
                  .step_six_how_often_do_you_succeed_convincing_clients_to_adopt_your_ideas_or_solutn
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
            for="step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSixStore
                .step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs
              "
              v-bind="
                step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs_attr
              "
              id="step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs"
              name="step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSixStore
                  .step_six_rate_your_ability_to_tailor_your_pitch_to_meet_specific_needs
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
            for="step_six_how_frequently_do_you_use_storytelling"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSixStore
                .step_six_how_frequently_do_you_use_storytelling.question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_six_how_frequently_do_you_use_storytelling"
              v-bind="step_six_how_frequently_do_you_use_storytelling_attr"
              id="step_six_how_frequently_do_you_use_storytelling"
              name="step_six_how_frequently_do_you_use_storytelling"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSixStore
                  .step_six_how_frequently_do_you_use_storytelling
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
            for="step_six_how_confident_are_you_when_negotiating_favorable_terms"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSixStore
                .step_six_how_confident_are_you_when_negotiating_favorable_terms
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_six_how_confident_are_you_when_negotiating_favorable_terms
              "
              v-bind="
                step_six_how_confident_are_you_when_negotiating_favorable_terms_attr
              "
              id="step_six_how_confident_are_you_when_negotiating_favorable_terms"
              name="step_six_how_confident_are_you_when_negotiating_favorable_terms"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSixStore
                  .step_six_how_confident_are_you_when_negotiating_favorable_terms
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
            for="step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionSixStore
                .step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument
              "
              v-bind="
                step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument_attr
              "
              id="step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument"
              name="step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument"
              class="peer/five block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionSixStore
                  .step_six_how_often_do_you_prepare_thoroughly_before_making_an_argument
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
