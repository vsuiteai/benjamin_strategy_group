<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useOnboardClientFormSectionOneStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionOneStore";

const emits = defineEmits(["is_valid"]);

const onboardClientFormSectionOneStore = useOnboardClientFormSectionOneStore();

const schema = toTypedSchema(
  yup.object({
    step_one_fullname: yup
      .string()
      .required("Please enter your fullname")
      .label("Fullname"),
    step_one_phone: yup
      .string()
      .required("Please enter your phone number")
      .label("Phone Number"),
    step_one_work_email: yup
      .string()
      .required("Please enter your work email")
      .label("Work Email"),
    step_one_mailing_address: yup
      .string()
      .required("Please enter your mailing address")
      .label("Mailing Address"),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_one_fullname: onboardClientFormSectionOneStore.get_step_one_fullname,
    step_one_phone: onboardClientFormSectionOneStore.get_step_one_phone,
    step_one_work_email:
      onboardClientFormSectionOneStore.get_step_one_work_email,
    step_one_mailing_address:
      onboardClientFormSectionOneStore.get_step_one_mailing_address,
  },
});

const [step_one_fullname, step_one_fullname_attr] =
  defineField("step_one_fullname");
const [step_one_phone, step_one_phone_attr] = defineField("step_one_phone");
const [step_one_work_email, step_one_work_email_attr] = defineField(
  "step_one_work_email"
);
const [step_one_mailing_address, step_one_mailing_address_attr] = defineField(
  "step_one_mailing_address"
);

const is_step_one_fullname_valid = computed(
  () => step_one_fullname.value && meta.value.valid
);
const is_step_one_phone_valid = computed(
  () => step_one_phone.value && meta.value.valid
);
const is_step_one_work_email_valid = computed(
  () => step_one_work_email.value && meta.value.valid
);
const is_step_one_mailing_address_valid = computed(
  () => step_one_mailing_address.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_step_one_fullname_valid.value &&
    is_step_one_phone_valid.value &&
    is_step_one_work_email_valid.value &&
    is_step_one_mailing_address_valid.value
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
    step_one_fullname,
    () => onboardClientFormSectionOneStore.step_one_fullname.question_answer,
    onboardClientFormSectionOneStore.update_step_one_fullname
  );
  syncStoreValue(
    step_one_phone,
    () => onboardClientFormSectionOneStore.step_one_phone.question_answer,
    onboardClientFormSectionOneStore.update_step_one_phone
  );
  syncStoreValue(
    step_one_work_email,
    () => onboardClientFormSectionOneStore.step_one_work_email.question_answer,
    onboardClientFormSectionOneStore.update_step_one_work_email
  );
  syncStoreValue(
    step_one_mailing_address,
    () =>
      onboardClientFormSectionOneStore.step_one_mailing_address.question_answer,
    onboardClientFormSectionOneStore.update_step_one_mailing_address
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">General Information</span>
        <span class="text-[16px] font-[400] text-[#222221]"
          >Initial form to gather perspective and practice of new clients.
          Approximate Completion Time: 30 minutes</span
        >
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
          Initial form to gather perspective and practice of new clients.
          Approximate Completion Time: 30 minutes
        </span>
      </div>
      <!-- Current Form Step Header Ends -->

      <!-- Current Form Step Body Begins -->
      <div class="flex w-full px-[25px] lg:px-[0px] flex-col gap-y-[40px]">
        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_fullname"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >Fullname

            <!-- {{ step_one_fullname }} -->

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_one_fullname"
            v-bind="step_one_fullname_attr"
            type="text"
            id="step_one_fullname"
            name="step_one_fullname"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter your Fullname"
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_phone"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >Phone Number

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_one_phone"
            v-bind="step_one_phone_attr"
            type="text"
            id="step_one_phone"
            name="step_one_phone"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter your Phone Number"
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_work_email"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >Work Email

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_one_work_email"
            v-bind="step_one_work_email_attr"
            type="text"
            id="step_one_work_email"
            name="step_one_work_email"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter your Work Email"
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_mailing_address"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >Mailing Address

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_one_mailing_address"
            v-bind="step_one_mailing_address_attr"
            type="text"
            id="step_one_mailing_address"
            name="step_one_mailing_address"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter your Mailing Address"
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
