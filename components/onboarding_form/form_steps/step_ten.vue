<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionTenStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionTenStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionTenStore = useOnboardClientFormSectionTenStore();

const schema = toTypedSchema(
  yup.object({
    step_ten_how_confident_are_you_in_setting_a_clear_direction: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionTenStore
          .step_ten_how_confident_are_you_in_setting_a_clear_direction
          .question_label
      ),
    step_ten_how_often_do_you_provide_constructive_feedback_to_your_team: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionTenStore
          .step_ten_how_often_do_you_provide_constructive_feedback_to_your_team
          .question_label
      ),

    step_ten_how_effectively_do_you_delegate_tasks: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionTenStore
          .step_ten_how_effectively_do_you_delegate_tasks.question_label
      ),
    step_ten_how_frequently_do_you_invest_time_in_developing: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionTenStore
          .step_ten_how_frequently_do_you_invest_time_in_developing
          .question_label
      ),
    step_ten_how_do_you_handle_decision_making: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionTenStore
          .step_ten_how_do_you_handle_decision_making.question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_ten_how_confident_are_you_in_setting_a_clear_direction:
      onboardClientFormSectionTenStore.get_step_ten_how_confident_are_you_in_setting_a_clear_direction,
    step_ten_how_often_do_you_provide_constructive_feedback_to_your_team:
      onboardClientFormSectionTenStore.get_step_ten_how_often_do_you_provide_constructive_feedback_to_your_team,
    step_ten_how_effectively_do_you_delegate_tasks:
      onboardClientFormSectionTenStore.get_step_ten_how_effectively_do_you_delegate_tasks,
    step_ten_how_frequently_do_you_invest_time_in_developing:
      onboardClientFormSectionTenStore.get_step_ten_how_frequently_do_you_invest_time_in_developing,
    step_ten_how_do_you_handle_decision_making:
      onboardClientFormSectionTenStore.get_step_ten_how_do_you_handle_decision_making,
  },
});

const [
  step_ten_how_confident_are_you_in_setting_a_clear_direction,
  step_ten_how_confident_are_you_in_setting_a_clear_direction_attr,
] = defineField("step_ten_how_confident_are_you_in_setting_a_clear_direction");
const [
  step_ten_how_often_do_you_provide_constructive_feedback_to_your_team,
  step_ten_how_often_do_you_provide_constructive_feedback_to_your_team_attr,
] = defineField(
  "step_ten_how_often_do_you_provide_constructive_feedback_to_your_team"
);
const [
  step_ten_how_effectively_do_you_delegate_tasks,
  step_ten_how_effectively_do_you_delegate_tasks_attr,
] = defineField("step_ten_how_effectively_do_you_delegate_tasks");
const [
  step_ten_how_frequently_do_you_invest_time_in_developing,
  step_ten_how_frequently_do_you_invest_time_in_developing_attr,
] = defineField("step_ten_how_frequently_do_you_invest_time_in_developing");
const [
  step_ten_how_do_you_handle_decision_making,
  step_ten_how_do_you_handle_decision_making_attr,
] = defineField("step_ten_how_do_you_handle_decision_making");

const is_step_ten_how_confident_are_you_in_setting_a_clear_direction_valid =
  computed(
    () =>
      step_ten_how_confident_are_you_in_setting_a_clear_direction.value &&
      meta.value.valid
  );
const is_step_ten_how_often_do_you_provide_constructive_feedback_to_your_team_valid =
  computed(
    () =>
      step_ten_how_often_do_you_provide_constructive_feedback_to_your_team.value &&
      meta.value.valid
  );
const is_step_ten_how_effectively_do_you_delegate_tasks_valid = computed(
  () => step_ten_how_effectively_do_you_delegate_tasks.value && meta.value.valid
);
const is_step_ten_how_frequently_do_you_invest_time_in_developing_valid =
  computed(
    () =>
      step_ten_how_frequently_do_you_invest_time_in_developing.value &&
      meta.value.valid
  );
const is_step_ten_how_do_you_handle_decision_making_valid = computed(
  () => step_ten_how_do_you_handle_decision_making.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_step_ten_how_confident_are_you_in_setting_a_clear_direction_valid.value &&
    is_step_ten_how_often_do_you_provide_constructive_feedback_to_your_team_valid.value &&
    is_step_ten_how_effectively_do_you_delegate_tasks_valid.value &&
    is_step_ten_how_frequently_do_you_invest_time_in_developing_valid.value &&
    is_step_ten_how_do_you_handle_decision_making_valid
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
    step_ten_how_often_do_you_provide_constructive_feedback_to_your_team,
    () =>
      onboardClientFormSectionTenStore
        .step_ten_how_confident_are_you_in_setting_a_clear_direction
        .question_answer,
    onboardClientFormSectionTenStore.update_step_ten_how_confident_are_you_in_setting_a_clear_direction
  );
  syncStoreValue(
    step_ten_how_often_do_you_provide_constructive_feedback_to_your_team,
    () =>
      onboardClientFormSectionTenStore
        .step_ten_how_often_do_you_provide_constructive_feedback_to_your_team
        .question_answer,
    onboardClientFormSectionTenStore.update_step_ten_how_often_do_you_provide_constructive_feedback_to_your_team
  );
  syncStoreValue(
    step_ten_how_effectively_do_you_delegate_tasks,
    () =>
      onboardClientFormSectionTenStore
        .step_ten_how_effectively_do_you_delegate_tasks.question_answer,
    onboardClientFormSectionTenStore.update_step_ten_how_effectively_do_you_delegate_tasks
  );
  syncStoreValue(
    step_ten_how_frequently_do_you_invest_time_in_developing,
    () =>
      onboardClientFormSectionTenStore
        .step_ten_how_frequently_do_you_invest_time_in_developing
        .question_answer,
    onboardClientFormSectionTenStore.update_step_ten_how_frequently_do_you_invest_time_in_developing
  );

  syncStoreValue(
    step_ten_how_do_you_handle_decision_making,
    () =>
      onboardClientFormSectionTenStore
        .step_ten_how_do_you_handle_decision_making.question_answer,
    onboardClientFormSectionTenStore.update_step_ten_how_do_you_handle_decision_making
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Leadership</span>
        <span class="text-[16px] font-[400] text-[#222221]"> </span>
      </div>

      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center"> Leadership </span>
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
            for="step_ten_how_confident_are_you_in_setting_a_clear_direction"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionTenStore
                .step_ten_how_confident_are_you_in_setting_a_clear_direction
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_ten_how_confident_are_you_in_setting_a_clear_direction
              "
              v-bind="
                step_ten_how_confident_are_you_in_setting_a_clear_direction_attr
              "
              id="step_ten_how_confident_are_you_in_setting_a_clear_direction"
              name="step_ten_how_confident_are_you_in_setting_a_clear_direction"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTenStore
                  .step_ten_how_confident_are_you_in_setting_a_clear_direction
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
            for="step_ten_how_often_do_you_provide_constructive_feedback_to_your_team"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionTenStore
                .step_ten_how_often_do_you_provide_constructive_feedback_to_your_team
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_ten_how_often_do_you_provide_constructive_feedback_to_your_team
              "
              v-bind="
                step_ten_how_often_do_you_provide_constructive_feedback_to_your_team_attr
              "
              id="step_ten_how_often_do_you_provide_constructive_feedback_to_your_team"
              name="step_ten_how_often_do_you_provide_constructive_feedback_to_your_team"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTenStore
                  .step_ten_how_often_do_you_provide_constructive_feedback_to_your_team
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
            for="step_ten_how_effectively_do_you_delegate_tasks"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionTenStore
                .step_ten_how_effectively_do_you_delegate_tasks.question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_ten_how_effectively_do_you_delegate_tasks"
              v-bind="step_ten_how_effectively_do_you_delegate_tasks_attr"
              id="step_ten_how_effectively_do_you_delegate_tasks"
              name="step_ten_how_effectively_do_you_delegate_tasks"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTenStore
                  .step_ten_how_effectively_do_you_delegate_tasks
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
            for="step_ten_how_frequently_do_you_invest_time_in_developing"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionTenStore
                .step_ten_how_frequently_do_you_invest_time_in_developing
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_ten_how_frequently_do_you_invest_time_in_developing"
              v-bind="
                step_ten_how_frequently_do_you_invest_time_in_developing_attr
              "
              id="step_ten_how_frequently_do_you_invest_time_in_developing"
              name="step_ten_how_frequently_do_you_invest_time_in_developing"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTenStore
                  .step_ten_how_frequently_do_you_invest_time_in_developing
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
            for="step_ten_how_do_you_handle_decision_making"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionTenStore
                .step_ten_how_do_you_handle_decision_making.question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="step_ten_how_do_you_handle_decision_making"
              v-bind="step_ten_how_do_you_handle_decision_making_attr"
              id="step_ten_how_do_you_handle_decision_making"
              name="step_ten_how_do_you_handle_decision_making"
              class="peer/five block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionTenStore
                  .step_ten_how_do_you_handle_decision_making.question_options"
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
