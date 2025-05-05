<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionFourStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionFourStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionFourStore =
  useOnboardClientFormSectionFourStore();

const schema = toTypedSchema(
  yup.object({
    step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn:
      yup
        .string()
        .required("Please enter your answer")
        .label(
          onboardClientFormSectionFourStore
            .step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn
            .question_label
        ),
    step_four_how_well_do_you_maintain_long_term_relationships_with_clients: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionFourStore
          .step_four_how_well_do_you_maintain_long_term_relationships_with_clients
          .question_label
      ),

    step_four_how_often_do_you_engage_with_potential_recruits: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionFourStore
          .step_four_how_often_do_you_engage_with_potential_recruits
          .question_label
      ),
    step_four_how_comfortable_are_you_in_initiating_conversatn: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionFourStore
          .step_four_how_comfortable_are_you_in_initiating_conversatn
          .question_label
      ),
    step_four_how_frequent_do_you_folloup_after_initial_interactn: yup
      .string()
      .required("Please enter your answer")
      .label(
        onboardClientFormSectionFourStore
          .step_four_how_frequent_do_you_folloup_after_initial_interactn
          .question_label
      ),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn:
      onboardClientFormSectionFourStore.get_step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn,
    step_four_how_well_do_you_maintain_long_term_relationships_with_clients:
      onboardClientFormSectionFourStore.get_step_four_how_well_do_you_maintain_long_term_relationships_with_clients,
    step_four_how_often_do_you_engage_with_potential_recruits:
      onboardClientFormSectionFourStore.get_step_four_how_often_do_you_engage_with_potential_recruits,
    step_four_how_comfortable_are_you_in_initiating_conversatn:
      onboardClientFormSectionFourStore.get_step_four_how_comfortable_are_you_in_initiating_conversatn,
    step_four_how_frequent_do_you_folloup_after_initial_interactn:
      onboardClientFormSectionFourStore.get_step_four_how_frequent_do_you_folloup_after_initial_interactn,
  },
});

const [
  step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn,
  step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn_attr,
] = defineField(
  "step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn"
);
const [
  step_four_how_well_do_you_maintain_long_term_relationships_with_clients,
  step_four_how_well_do_you_maintain_long_term_relationships_with_clients_attr,
] = defineField(
  "step_four_how_well_do_you_maintain_long_term_relationships_with_clients"
);
const [
  step_four_how_often_do_you_engage_with_potential_recruits,
  step_four_how_often_do_you_engage_with_potential_recruits_attr,
] = defineField("step_four_how_often_do_you_engage_with_potential_recruits");
const [
  step_four_how_comfortable_are_you_in_initiating_conversatn,
  step_four_how_comfortable_are_you_in_initiating_conversatn_attr,
] = defineField("step_four_how_comfortable_are_you_in_initiating_conversatn");
const [
  step_four_how_frequent_do_you_folloup_after_initial_interactn,
  step_four_how_frequent_do_you_folloup_after_initial_interactn_attr,
] = defineField(
  "step_four_how_frequent_do_you_folloup_after_initial_interactn"
);

const is_step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn_valid =
  computed(
    () =>
      step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn.value &&
      meta.value.valid
  );
const is_step_four_how_well_do_you_maintain_long_term_relationships_with_clients_valid =
  computed(
    () =>
      step_four_how_well_do_you_maintain_long_term_relationships_with_clients.value &&
      meta.value.valid
  );
const is_step_four_how_often_do_you_engage_with_potential_recruits_valid =
  computed(
    () =>
      step_four_how_often_do_you_engage_with_potential_recruits.value &&
      meta.value.valid
  );
const is_step_four_how_comfortable_are_you_in_initiating_conversatn_valid =
  computed(
    () =>
      step_four_how_comfortable_are_you_in_initiating_conversatn.value &&
      meta.value.valid
  );
const is_step_four_how_frequent_do_you_folloup_after_initial_interactn_valid =
  computed(
    () =>
      step_four_how_frequent_do_you_folloup_after_initial_interactn.value &&
      meta.value.valid
  );

const isCurrentStepCompleted = computed(
  () =>
    is_step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn_valid.value &&
    is_step_four_how_well_do_you_maintain_long_term_relationships_with_clients_valid.value &&
    is_step_four_how_often_do_you_engage_with_potential_recruits_valid.value &&
    is_step_four_how_comfortable_are_you_in_initiating_conversatn_valid.value &&
    is_step_four_how_frequent_do_you_folloup_after_initial_interactn_valid
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
    step_four_how_well_do_you_maintain_long_term_relationships_with_clients,
    () =>
      onboardClientFormSectionFourStore
        .step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn
        .question_answer,
    onboardClientFormSectionFourStore.update_step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn
  );
  syncStoreValue(
    step_four_how_well_do_you_maintain_long_term_relationships_with_clients,
    () =>
      onboardClientFormSectionFourStore
        .step_four_how_well_do_you_maintain_long_term_relationships_with_clients
        .question_answer,
    onboardClientFormSectionFourStore.update_step_four_how_well_do_you_maintain_long_term_relationships_with_clients
  );
  syncStoreValue(
    step_four_how_often_do_you_engage_with_potential_recruits,
    () =>
      onboardClientFormSectionFourStore
        .step_four_how_often_do_you_engage_with_potential_recruits
        .question_answer,
    onboardClientFormSectionFourStore.update_step_four_how_often_do_you_engage_with_potential_recruits
  );
  syncStoreValue(
    step_four_how_comfortable_are_you_in_initiating_conversatn,
    () =>
      onboardClientFormSectionFourStore
        .step_four_how_comfortable_are_you_in_initiating_conversatn
        .question_answer,
    onboardClientFormSectionFourStore.update_step_four_how_comfortable_are_you_in_initiating_conversatn
  );

  syncStoreValue(
    step_four_how_frequent_do_you_folloup_after_initial_interactn,
    () =>
      onboardClientFormSectionFourStore
        .step_four_how_frequent_do_you_folloup_after_initial_interactn
        .question_answer,
    onboardClientFormSectionFourStore.update_step_four_how_frequent_do_you_folloup_after_initial_interactn
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Relational Intelligence</span>
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
            for="step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFourStore
                .step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn
              "
              v-bind="
                step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn_attr
              "
              id="step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn"
              name="step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn"
              class="peer/one block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFourStore
                  .step_four_how_often_do_you_build_relatn_with_clients_beyond_transactnal_interactn
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
            for="step_four_how_well_do_you_maintain_long_term_relationships_with_clients"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFourStore
                .step_four_how_well_do_you_maintain_long_term_relationships_with_clients
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_four_how_well_do_you_maintain_long_term_relationships_with_clients
              "
              v-bind="
                step_four_how_well_do_you_maintain_long_term_relationships_with_clients_attr
              "
              id="step_four_how_well_do_you_maintain_long_term_relationships_with_clients"
              name="step_four_how_well_do_you_maintain_long_term_relationships_with_clients"
              class="peer/two block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFourStore
                  .step_four_how_well_do_you_maintain_long_term_relationships_with_clients
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
            for="step_four_how_often_do_you_engage_with_potential_recruits"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFourStore
                .step_four_how_often_do_you_engage_with_potential_recruits
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_four_how_often_do_you_engage_with_potential_recruits
              "
              v-bind="
                step_four_how_often_do_you_engage_with_potential_recruits_attr
              "
              id="step_four_how_often_do_you_engage_with_potential_recruits"
              name="step_four_how_often_do_you_engage_with_potential_recruits"
              class="peer/three block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFourStore
                  .step_four_how_often_do_you_engage_with_potential_recruits
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
            for="step_four_how_comfortable_are_you_in_initiating_conversatn"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFourStore
                .step_four_how_comfortable_are_you_in_initiating_conversatn
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_four_how_comfortable_are_you_in_initiating_conversatn
              "
              v-bind="
                step_four_how_comfortable_are_you_in_initiating_conversatn_attr
              "
              id="step_four_how_comfortable_are_you_in_initiating_conversatn"
              name="step_four_how_comfortable_are_you_in_initiating_conversatn"
              class="peer/four block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFourStore
                  .step_four_how_comfortable_are_you_in_initiating_conversatn
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
            for="step_four_how_frequent_do_you_folloup_after_initial_interactn"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{
              onboardClientFormSectionFourStore
                .step_four_how_frequent_do_you_folloup_after_initial_interactn
                .question_label
            }}</label
          >

          <div class="relative">
            <select
              v-model="
                step_four_how_frequent_do_you_folloup_after_initial_interactn
              "
              v-bind="
                step_four_how_frequent_do_you_folloup_after_initial_interactn_attr
              "
              id="step_four_how_frequent_do_you_folloup_after_initial_interactn"
              name="step_four_how_frequent_do_you_folloup_after_initial_interactn"
              class="peer/five block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            >
              <template
                v-for="option in onboardClientFormSectionFourStore
                  .step_four_how_frequent_do_you_folloup_after_initial_interactn
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
