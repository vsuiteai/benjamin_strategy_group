<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

const { loggedIn, user, fetch: refreshSession } = useUserSession();

definePageMeta({
  layout: "guest",
});

const adminController = useAdminController();
const submitting_form = ref(false);
const form_submitted_successfully = ref(false);

const schema = toTypedSchema(
  yup.object({
    admin_username: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email")
      .label("Admin Email"),
    admin_password: yup
      .string()
      .required("Please enter your password")
      .label("Admin Password"),
  })
);

const { errors, meta, values, defineField } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    admin_username: "",
    admin_password: "",
  },
});

const [admin_username, admin_username_attr] = defineField("admin_username");
const [admin_password, admin_password_attr] = defineField("admin_password");

const is_admin_username_valid = computed(
  () => admin_username.value && meta.value.valid
);
const is_admin_password_valid = computed(
  () => admin_password.value && meta.value.valid
);

const isCurrentStepCompleted = computed(
  () => is_admin_username_valid.value && is_admin_password_valid.value
);

watch(form_submitted_successfully, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      form_submitted_successfully.value = false;
    }, 4000);
  }
});

const login_admin = async () => {
  if (!isCurrentStepCompleted.value || submitting_form.value) return;
  try {
    submitting_form.value = true;

    await adminController.login_admin(
      admin_username.value!,
      admin_password.value!
    );

    await refreshSession();
    await navigateTo("/dashboard");

    form_submitted_successfully.value = true;
    submitting_form.value = false;
  } catch (error) {
    submitting_form.value = false;
  }
};
</script>

<template>
  <section
    class="min-w-[100vw] min-h-[100vh] w-[100vw] h-[100vh] bg-[url('/assets/images/home_overlay.webp')] bg-no-repeat bg-center bg-cover relative"
  >
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div
      class="w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-4 z-[20] relative"
    >
      <div class="flex h-full w-full justify-center items-center">
        <img
          src="/assets/images/benjamin_group.png"
          alt=""
          class="lg:w-[550px] w-[90%]"
        />
      </div>
      <div class="flex h-full w-full justify-center items-center">
        <div class="w-[500px] bg-white py-[35px] px-[50px]">
          <p class="w-full text-center font-[700] text-[32px] text-[#1B1E24]">
            Log in to your account
          </p>

          <div class="my-12 w-full">
            <form class="space-y-6" action="#" method="POST">
              <div class="mb-5">
                <label
                  for="admin_username"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Email address</label
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

              <div class="mb-5">
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

              <div class="flex items-center justify-center">
                <button
                  @click.prevent="login_admin"
                  type="submit"
                  class="flex w-[250px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
