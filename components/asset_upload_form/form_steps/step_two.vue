<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

import { useAOFSectionOneStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionOneStore";

const emits = defineEmits(["is_valid"]);

const AOFSectionOneStore = useAOFSectionOneStore();

const schema = toTypedSchema(
  yup.object({
    step_one_company_name: yup
      .string()
      .required("Please enter your Company name")
      .label("Company name"),
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
    step_one_physical_address: yup
      .string()
      .required("Please enter your physical address")
      .label("physical address"),
    step_one_contact_name: yup
      .string()
      .required("Please enter your contact Name")
      .label("contact Name"),
    step_one_founder_name: yup
      .string()
      .required("Please enter your CEO/Founder name")
      .label("CEO/Founder name"),
    step_one_company_website: yup
      .string()
      .required("Please enter your company website")
      .label("company website"),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    step_one_company_name: AOFSectionOneStore.get_step_one_company_name,
    step_one_phone: AOFSectionOneStore.get_step_one_phone,
    step_one_work_email: AOFSectionOneStore.get_step_one_work_email,
    step_one_mailing_address: AOFSectionOneStore.get_step_one_mailing_address,
    step_one_physical_address: AOFSectionOneStore.get_step_one_physical_address,
    step_one_contact_name: AOFSectionOneStore.get_step_one_contact_name,
    step_one_founder_name: AOFSectionOneStore.get_step_one_founder_name,
    step_one_company_website: AOFSectionOneStore.get_step_one_company_website,
  },
});

const [step_one_company_name, step_one_company_name_attr] = defineField(
  "step_one_company_name"
);
const [step_one_phone, step_one_phone_attr] = defineField("step_one_phone");
const [step_one_work_email, step_one_work_email_attr] = defineField(
  "step_one_work_email"
);
const [step_one_mailing_address, step_one_mailing_address_attr] = defineField(
  "step_one_mailing_address"
);
const [step_one_physical_address, step_one_physical_address_attr] = defineField(
  "step_one_physical_address"
);
const [step_one_contact_name, step_one_contact_name_attr] = defineField(
  "step_one_contact_name"
);
const [step_one_founder_name, step_one_founder_name_attr] = defineField(
  "step_one_founder_name"
);
const [step_one_company_website, step_one_company_website_attr] = defineField(
  "step_one_company_website"
);

const is_step_one_company_name_valid = computed(
  () => step_one_company_name.value && meta.value.valid
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
const is_step_one_physical_address_valid = computed(
  () => step_one_physical_address.value && meta.value.valid
);
const is_step_one_contact_name_valid = computed(
  () => step_one_contact_name.value && meta.value.valid
);
const is_step_one_founder_name_valid = computed(
  () => step_one_founder_name.value && meta.value.valid
);
const is_step_one_company_website_valid = computed(
  () => step_one_company_website.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_step_one_company_name_valid.value &&
    is_step_one_phone_valid.value &&
    is_step_one_work_email_valid.value &&
    is_step_one_mailing_address_valid.value &&
    is_step_one_physical_address_valid.value &&
    is_step_one_contact_name_valid.value &&
    is_step_one_founder_name_valid.value &&
    is_step_one_company_website_valid.value
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
    step_one_company_name,
    () => AOFSectionOneStore.step_one_company_name.question_answer,
    AOFSectionOneStore.update_step_one_company_name
  );
  syncStoreValue(
    step_one_phone,
    () => AOFSectionOneStore.step_one_phone.question_answer,
    AOFSectionOneStore.update_step_one_phone
  );
  syncStoreValue(
    step_one_work_email,
    () => AOFSectionOneStore.step_one_work_email.question_answer,
    AOFSectionOneStore.update_step_one_work_email
  );
  syncStoreValue(
    step_one_mailing_address,
    () => AOFSectionOneStore.step_one_mailing_address.question_answer,
    AOFSectionOneStore.update_step_one_mailing_address
  );

  syncStoreValue(
    step_one_physical_address,
    () => AOFSectionOneStore.step_one_physical_address.question_answer,
    AOFSectionOneStore.update_step_one_physical_address
  );
  syncStoreValue(
    step_one_contact_name,
    () => AOFSectionOneStore.step_one_contact_name.question_answer,
    AOFSectionOneStore.update_step_one_contact_name
  );
  syncStoreValue(
    step_one_founder_name,
    () => AOFSectionOneStore.step_one_founder_name.question_answer,
    AOFSectionOneStore.update_step_one_founder_name
  );
  syncStoreValue(
    step_one_company_website,
    () => AOFSectionOneStore.step_one_company_website.question_answer,
    AOFSectionOneStore.update_step_one_company_website
  );
});
</script>

<template>
  <section class="w-full h-full">
    <div class="flex flex-col gap-y-[40px] w-full">
      <!-- Current Form Step Header Begins -->
      <div class="hidden lg:flex flex-col gap-y-[10px]">
        <span class="text-[20px] font-[500]">Section one</span>
        <span class="text-[16px] font-[400] text-[#222221]"
          >Initial form to gather new client details. Client will upload or
          provide access to company data at later date.</span
        >
      </div>
      <div
        class="lg:hidden flex w-full h-full px-[25px] lg:px-[50px] flex-col gap-[10px] items-center justify-center"
      >
        <span class="font-[700] text-[20px] text-center"> Section one </span>
        <span
          class="font-[400] text-[14px] text-center tracking-[0.02em] w-[80%]"
        >
          Initial form to gather new client details. Client will upload or
          provide access to company data at later date.
        </span>
      </div>
      <!-- Current Form Step Header Ends -->
      <!-- {{ values }} -->
      <!-- Current Form Step Body Begins -->
      <div class="flex w-full px-[25px] lg:px-[0px] flex-col gap-y-[40px]">
        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_company_name"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{ AOFSectionOneStore.step_one_company_name.question_label }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_one_company_name"
            v-bind="step_one_company_name_attr"
            type="text"
            id="step_one_company_name"
            name="step_one_company_name"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter your company name"
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_phone"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{ AOFSectionOneStore.step_one_phone.question_label }}

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
            >{{ AOFSectionOneStore.step_one_work_email.question_label }}
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
            >{{ AOFSectionOneStore.step_one_mailing_address.question_label }}

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

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_physical_address"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{ AOFSectionOneStore.step_one_physical_address.question_label }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_one_physical_address"
            v-bind="step_one_physical_address_attr"
            type="text"
            id="step_one_physical_address"
            name="step_one_physical_address"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter your physical address"
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_contact_name"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{ AOFSectionOneStore.step_one_contact_name.question_label }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_one_contact_name"
            v-bind="step_one_contact_name_attr"
            type="text"
            id="step_one_contact_name"
            name="step_one_contact_name"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter your contact name"
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_founder_name"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{ AOFSectionOneStore.step_one_founder_name.question_label }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_one_founder_name"
            v-bind="step_one_founder_name_attr"
            type="text"
            id="step_one_founder_name"
            name="step_one_founder_name"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter your founders' name"
            required
          />
        </div>

        <div class="relative z-0 w-full flex flex-col">
          <label
            for="step_one_company_website"
            class="text-[18px] font-[600] text-black mb-[10px] lg:mb-[unset]"
            >{{ AOFSectionOneStore.step_one_company_website.question_label }}

            <!-- <span class="font-[400] text-black/[0.2]">(Optional)</span> -->
          </label>

          <input
            v-model="step_one_company_website"
            v-bind="step_one_company_website_attr"
            type="text"
            id="step_one_company_website"
            name="step_one_company_website"
            class="block w-full text-black/[.5] border-0 border-b-[1px] lg:px-[24px] lg:py-[24px] lg:text-[16px] font-[400] lg:bg-transparent lg:border-black/[0.2] appearance-none focus:outline-none focus:ring-0 focus:border-black py-[18px] px-[14px] text-[14px] bg-white border-black"
            placeholder="Enter your company website"
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
