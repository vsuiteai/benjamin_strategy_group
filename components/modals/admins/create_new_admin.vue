<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

const adminController = useAdminController();
const submitting_form = ref(false);
const form_submitted_successfully = ref(false);

const schema = toTypedSchema(
  yup.object({
    admin_username: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter the admin email")
      .label("Admin Email"),
    admin_firstname: yup
      .string()
      .required("Please enter the admin's first name")
      .label("Admin First Name"),
    admin_lastname: yup
      .string()
      .required("Please enter the admin's last name")
      .label("Admin Last Name"),
    admin_password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Please enter the admin password")
      .label("Admin Password"),
    admin_confirm_password: yup
      .string()
      .oneOf([yup.ref("admin_password"), ""], "Passwords must match")
      .required("Please confirm the admin password")
      .label("Confirm Admin Password"),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    admin_username: "",
    admin_firstname: "",
    admin_lastname: "",
    admin_password: "",
    admin_confirm_password: "",
  },
});

const [admin_username, admin_username_attr] = defineField("admin_username");
const [admin_firstname, admin_firstname_attr] = defineField("admin_firstname");
const [admin_lastname, admin_lastname_attr] = defineField("admin_lastname");
const [admin_password, admin_password_attr] = defineField("admin_password");
const [admin_confirm_password, admin_confirm_password_attr] = defineField(
  "admin_confirm_password"
);

const is_admin_username_valid = computed(
  () => admin_username.value && meta.value.valid
);
const is_admin_firstname_valid = computed(
  () => admin_firstname.value && meta.value.valid
);
const is_admin_lastname_valid = computed(
  () => admin_lastname.value && meta.value.valid
);
const is_admin_password_valid = computed(
  () => admin_password.value && meta.value.valid
);
const is_admin_confirm_password_valid = computed(
  () =>
    admin_confirm_password.value &&
    admin_password.value &&
    admin_confirm_password.value === admin_password.value &&
    meta.value.valid
);

const isCurrentStepCompleted = computed(
  () =>
    is_admin_username_valid.value &&
    is_admin_firstname_valid.value &&
    is_admin_lastname_valid.value &&
    is_admin_password_valid.value &&
    is_admin_confirm_password_valid.value
);

watch(form_submitted_successfully, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      form_submitted_successfully.value = false;
    }, 4000);
  }
});

const create_new_admin = async () => {
  if (!isCurrentStepCompleted.value || submitting_form.value) return;
  try {
    submitting_form.value = true;

    const admin_details = {
      admin_username: admin_username.value!,
      admin_firstname: admin_firstname.value!,
      admin_lastname: admin_lastname.value!,
      admin_password: admin_password.value!,
    };

    await adminController.create_admin(admin_details);
    form_submitted_successfully.value = true;
    submitting_form.value = false;
  } catch (error) {
    submitting_form.value = false;
  }
};
</script>

<template>
  <ModalsModalStructure>
    <template #title>Create New Admin</template>
    <template #body>
      <div class="w-full px-4">
        <form class="min-w-sm max-w-md mx-auto">
          <div class="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                for="admin_firstname"
                class="block mb-2 text-sm font-medium text-gray-900"
                >First Name</label
              >
              <input
                :disabled="submitting_form"
                v-model="admin_firstname"
                v-bind="admin_firstname_attr"
                id="admin_firstname"
                name="admin_firstname"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="Please enter the company name"
                required
              />
              <span
                v-if="meta.touched && errors.admin_firstname"
                class="text-red-600 text-xs mt-1 w-full"
                >{{ errors.admin_firstname }}</span
              >
            </div>
            <div>
              <label
                for="admin_lastname"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Last Name</label
              >
              <input
                :disabled="submitting_form"
                v-model="admin_lastname"
                v-bind="admin_lastname_attr"
                id="admin_lastname"
                name="admin_lastname"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="Please enter the company name"
                required
              />
              <span
                v-if="meta.touched && errors.admin_lastname"
                class="text-red-600 text-xs mt-1 w-full"
                >{{ errors.admin_lastname }}</span
              >
            </div>
          </div>

          <div class="mb-5">
            <label
              for="admin_username"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Email</label
            >
            <input
              :disabled="submitting_form"
              v-model="admin_username"
              v-bind="admin_username_attr"
              id="admin_username"
              name="admin_username"
              type="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              placeholder="Please enter a contact work email"
              required
            />
            <span
              v-if="meta.touched && errors.admin_username"
              class="text-red-600 text-xs mt-1 w-full"
              >{{ errors.admin_username }}</span
            >
          </div>

          <div class="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                for="admin_password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                :disabled="submitting_form"
                v-model="admin_password"
                v-bind="admin_password_attr"
                id="admin_password"
                name="admin_password"
                type="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              />
              <span
                v-if="meta.touched && errors.admin_password"
                class="text-red-600 text-xs mt-1 w-full"
                >{{ errors.admin_password }}</span
              >
            </div>

            <div>
              <label
                for="admin_confirm_password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Confirm Password</label
              >
              <input
                :disabled="submitting_form"
                v-model="admin_confirm_password"
                v-bind="admin_confirm_password_attr"
                id="admin_confirm_password"
                name="admin_confirm_password"
                type="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              />
              <span
                v-if="meta.touched && errors.admin_confirm_password"
                class="text-red-600 text-xs mt-1 w-full"
                >{{ errors.admin_confirm_password }}</span
              >
            </div>
          </div>

          <button
            @click.prevent="create_new_admin"
            :class="{
              'opacity-[.5] cursor-not-allowed': !isCurrentStepCompleted,
            }"
            type="submit"
            class="text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
          >
            Create Admin
          </button>
          <p
            v-if="form_submitted_successfully"
            class="text-green-700 font-semibold"
          >
            Admin created
          </p>
        </form>
      </div>
    </template>
  </ModalsModalStructure>
</template>
