<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

import { useAOFSectionFiveStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionFiveStore";

const emits = defineEmits(["is_valid"]);

const AOFSectionFiveStore = useAOFSectionFiveStore();

const schema = toTypedSchema(
  yup.object({
    step_five_NAICSCode: yup
      .string()
      .required("Please enter ther NAICS Code")
      .label("NAICS Code"),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_five_NAICSCode: AOFSectionFiveStore.get_step_five_NAICSCode,
  },
});

const [step_five_NAICSCode, step_five_NAICSCode_attr] = defineField(
  "step_five_NAICSCode"
);

const is_step_five_NAICSCode_valid = computed(
  () => step_five_NAICSCode.value && meta.value.valid
);

const isCurrentStepCompleted = computed(() => {
  if (is_step_five_NAICSCode_valid.value) return true;
  return false;
});

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
    step_five_NAICSCode,
    () => AOFSectionFiveStore.step_five_NAICSCode.question_answer,
    AOFSectionFiveStore.update_step_five_NAICSCode
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]"> NAICS Code Lookup</span>
        <span class="text-[16px] font-[400] text-[#222221]">
          Click here to search your NAICS code. Look at the left of the screen
          and add your industry: https://www.census.gov/naics/
        </span>
      </div>
      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center">
          NAICS Code Lookup
        </span>
        <span
          class="font-[400] text-[14px] text-center tracking-[0.02em] w-[80%]"
        >
          Click here to search your NAICS code. Look at the left of the screen
          and add your industry: https://www.census.gov/naics/
        </span>
      </div>
      <!-- Current Form Step Header Ends -->
      <!-- Current Form Step Body Begins -->
      <div class="flex w-full px-[25px] lg:px-[0px] flex-col gap-y-[40px]">
        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_five_NAICSCode"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{ AOFSectionFiveStore.step_five_NAICSCode.question_label }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_five_NAICSCode"
            v-bind="step_five_NAICSCode_attr"
            type="text"
            id="step_five_NAICSCode"
            name="step_five_NAICSCode"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Please enter your NAICS Code "
            required
          />
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
