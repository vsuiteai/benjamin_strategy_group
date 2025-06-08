<script setup lang="ts">
import { company_roles } from "~/config/config";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

const clientController = useClientController();
const submitting_form = ref(false);
const form_submitted_successfully = ref(false);

const schema = toTypedSchema(
  yup.object({
    company_name: yup
      .string()
      .required("Please enter the company name")
      .label("Client Company Name"),
    contact_name: yup
      .string()
      .required("Please enter the contact name")
      .label("Company Contact Name"),
    client_contact_work_email: yup
      .string()
      .email()
      .required("Please enter the contact work email")
      .label("Contact Work Email"),
    phone: yup
      .string()
      .required("Please enter the contact phone")
      .label("Contact Phone"),
    contact_role: yup
      .string()
      .required("Please select the contact role")
      .label("Contact Role"),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    company_name: "",
    contact_name: "",
    client_contact_work_email: "",
    phone: "",
    contact_role: "",
  },
});

const [company_name, company_name_attr] = defineField("company_name");
const [contact_name, contact_name_attr] = defineField("contact_name");
const [client_contact_work_email, client_contact_work_email_attr] = defineField(
  "client_contact_work_email"
);
const [phone, phone_attr] = defineField("phone");
const [contact_role, contact_role_attr] = defineField("contact_role");

const is_company_name_valid = computed(
  () => company_name.value && meta.value.valid
);
const is_contact_name_valid = computed(
  () => contact_name.value && meta.value.valid
);
const is_client_contact_work_email_valid = computed(
  () => client_contact_work_email.value && meta.value.valid
);
const is_phone_valid = computed(() => phone.value && meta.value.valid);
const is_contact_role_valid = computed(
  () => contact_role.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_company_name_valid.value &&
    is_contact_name_valid.value &&
    is_client_contact_work_email_valid.value &&
    is_phone_valid.value &&
    is_contact_role_valid.value
);

watch(form_submitted_successfully, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      form_submitted_successfully.value = false;
    }, 4000);
  }
});

const create_new_client = async () => {
  if (!(isCurrentStepCompleted.value ?? false) || submitting_form.value) return;
  submitting_form.value = true;

  const clientDetail = {
    client_company_name: company_name.value!,
    client_contact_fullname: contact_name.value!,
    client_contact_phone: phone.value!,
    client_contact_work_email: client_contact_work_email.value!,
    client_contact_role: contact_role.value!,
  };

  await clientController.create_client(clientDetail);
};
</script>

<template>
  <ModalsModalStructure>
    <template #title>Create Client</template>
    <template #body>
      <div class="w-full px-4">
        <form class="min-w-sm max-w-md mx-auto">
          <div class="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                for="company_name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Client Company Name</label
              >
              <input
                :disabled="submitting_form"
                v-model="company_name"
                v-bind="company_name_attr"
                id="company_name"
                name="company_name"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="Please enter the company name"
                required
              />
              <span
                v-if="meta.touched && errors.company_name"
                class="text-red-600 text-xs mt-1 w-full"
                >{{ errors.company_name }}</span
              >
            </div>
            <div>
              <label
                for="contact_name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Company Contact Name</label
              >
              <input
                :disabled="submitting_form"
                v-model="contact_name"
                v-bind="contact_name_attr"
                id="contact_name"
                name="contact_name"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="Please enter a contact name"
                required
              />
              <span
                v-if="meta.touched && errors.contact_name"
                class="text-red-600 text-xs mt-1 w-full"
                >{{ errors.contact_name }}</span
              >
            </div>
          </div>

          <div class="mb-5">
            <label
              for="client_contact_work_email"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Contact Work Email</label
            >
            <input
              :disabled="submitting_form"
              v-model="client_contact_work_email"
              v-bind="client_contact_work_email_attr"
              id="client_contact_work_email"
              name="client_contact_work_email"
              type="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              placeholder="Please enter a contact work email"
              required
            />
            <span
              v-if="meta.touched && errors.client_contact_work_email"
              class="text-red-600 text-xs mt-1 w-full"
              >{{ errors.client_contact_work_email }}</span
            >
          </div>

          <div class="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Contact Phone</label
              >
              <input
                :disabled="submitting_form"
                v-model="phone"
                v-bind="phone_attr"
                id="phone"
                name="phone"
                type="tel"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="Please enter the contact phone"
                required
              />
              <span
                v-if="meta.touched && errors.phone"
                class="text-red-600 text-xs mt-1 w-full"
                >{{ errors.phone }}</span
              >
            </div>
            <div>
              <label
                for="contact_role"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Contact Role</label
              >
              <select
                :disabled="submitting_form"
                v-model="contact_role"
                v-bind="contact_role_attr"
                id="contact_role"
                name="contact_role"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <template v-for="role in company_roles" :key="role">
                  <option :value="role">{{ role }}</option>
                </template>
              </select>
              <span
                v-if="meta.touched && errors.contact_role"
                class="text-red-600 text-xs mt-1 w-full"
                >{{ errors.contact_role }}</span
              >
            </div>
          </div>

          <button
            @click.prevent="create_new_client"
            :class="{
              'opacity-[.5] cursor-not-allowed': !isCurrentStepCompleted,
            }"
            type="submit"
            class="text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
          >
            Create Client
          </button>
          <p
            v-if="form_submitted_successfully"
            class="text-green-700 font-semibold"
          >
            Client created
          </p>
        </form>
      </div>
    </template>
  </ModalsModalStructure>
</template>
