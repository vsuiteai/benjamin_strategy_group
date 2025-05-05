<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionTwelveStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionTwelveStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionTwelveStore =
  useOnboardClientFormSectionTwelveStore();

const schema = toTypedSchema(
  yup.object({
    step_twelve_how_often_do_you_implement_innovative_ideas: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionTwelveStore
          .step_twelve_how_often_do_you_implement_innovative_ideas
          .question_label
      ),
    step_twelve_how_confident_are_you_in_generating_creative_soln: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionTwelveStore
          .step_twelve_how_confident_are_you_in_generating_creative_soln
          .question_label
      ),

    step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionTwelveStore
          .step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm
          .question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_twelve_how_often_do_you_implement_innovative_ideas:
      onboardClientFormSectionTwelveStore.get_step_twelve_how_often_do_you_implement_innovative_ideas,
    step_twelve_how_confident_are_you_in_generating_creative_soln:
      onboardClientFormSectionTwelveStore.get_step_twelve_how_confident_are_you_in_generating_creative_soln,
    step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm:
      onboardClientFormSectionTwelveStore.get_step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm,
  },
});

const [
  step_twelve_how_often_do_you_implement_innovative_ideas,
  step_twelve_how_often_do_you_implement_innovative_ideas_attr,
] = defineField("step_twelve_how_often_do_you_implement_innovative_ideas");
const [
  step_twelve_how_confident_are_you_in_generating_creative_soln,
  step_twelve_how_confident_are_you_in_generating_creative_soln_attr,
] = defineField(
  "step_twelve_how_confident_are_you_in_generating_creative_soln"
);
const [
  step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm,
  step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm_attr,
] = defineField(
  "step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm"
);

const is_step_twelve_how_often_do_you_implement_innovative_ideas_valid =
  computed(
    () =>
      step_twelve_how_often_do_you_implement_innovative_ideas.value &&
      meta.value.valid
  );
const is_step_twelve_how_confident_are_you_in_generating_creative_soln_valid =
  computed(
    () =>
      step_twelve_how_confident_are_you_in_generating_creative_soln.value &&
      meta.value.valid
  );
const is_step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm_valid =
  computed(
    () =>
      step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_twelve_how_often_do_you_implement_innovative_ideas_valid.value &&
    is_step_twelve_how_confident_are_you_in_generating_creative_soln_valid.value &&
    is_step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm_valid.value
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
    step_twelve_how_confident_are_you_in_generating_creative_soln,
    () =>
      onboardClientFormSectionTwelveStore
        .step_twelve_how_often_do_you_implement_innovative_ideas
        .question_answer,
    onboardClientFormSectionTwelveStore.update_step_twelve_how_often_do_you_implement_innovative_ideas
  );
  syncStoreValue(
    step_twelve_how_confident_are_you_in_generating_creative_soln,
    () =>
      onboardClientFormSectionTwelveStore
        .step_twelve_how_confident_are_you_in_generating_creative_soln
        .question_answer,
    onboardClientFormSectionTwelveStore.update_step_twelve_how_confident_are_you_in_generating_creative_soln
  );
  syncStoreValue(
    step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm,
    () =>
      onboardClientFormSectionTwelveStore
        .step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm
        .question_answer,
    onboardClientFormSectionTwelveStore.update_step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm
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
            for="step_twelve_how_often_do_you_implement_innovative_ideas"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionTwelveStore
                .step_twelve_how_often_do_you_implement_innovative_ideas
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_twelve_how_often_do_you_implement_innovative_ideas"
              v-bind="
                step_twelve_how_often_do_you_implement_innovative_ideas_attr
              "
              id="step_twelve_how_often_do_you_implement_innovative_ideas"
              name="step_twelve_how_often_do_you_implement_innovative_ideas"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTwelveStore
                  .step_twelve_how_often_do_you_implement_innovative_ideas
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
            for="step_twelve_how_confident_are_you_in_generating_creative_soln"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionTwelveStore
                .step_twelve_how_confident_are_you_in_generating_creative_soln
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_twelve_how_confident_are_you_in_generating_creative_soln
              "
              v-bind="
                step_twelve_how_confident_are_you_in_generating_creative_soln_attr
              "
              id="step_twelve_how_confident_are_you_in_generating_creative_soln"
              name="step_twelve_how_confident_are_you_in_generating_creative_soln"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTwelveStore
                  .step_twelve_how_confident_are_you_in_generating_creative_soln
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
            for="step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionTwelveStore
                .step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm
              "
              v-bind="
                step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm_attr
              "
              id="step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm"
              name="step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTwelveStore
                  .step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm
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
