<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

interface FormValues {
  file: File | null;
}

const props = defineProps<{
  client_details: ClientDetail | null;
}>();

const emits = defineEmits(["form_submission_success"]);

// const { is_not_mobile_screen } = useScreenSize();
// const create_new_virtual_card_form_store = useCreateNewVirtualCardFormStore();
// const modal_store = useModalStore();

const error_submitting = ref<boolean>(false);
const submitting = ref<boolean>(false);

// Define validation schema using yup
const schema = toTypedSchema(
  yup.object({
    file: yup
      .mixed<File>()
      .required("File is required")
      .test("fileSize", "File too large", (value) => {
        return value && (value as File).size <= 2 * 1024 * 1024; // 2MB
      })
      .test("fileType", "Unsupported file type", (value) => {
        return (
          value && ["image/jpeg", "image/png"].includes((value as File).type)
        );
      }),
  })
);

// Initialize form
const { handleSubmit, errors, setFieldValue, defineField } =
  useForm<FormValues>({
    validationSchema: schema,
    initialValues: {
      file: null,
    },
  });

const [file, file_attr] = defineField("file");

// Handle file input change
function onFileChange(event: Event) {
  console.log("file");

  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  console.log(file);
  if (file) {
    setFieldValue("file", file);
  }
}

onMounted(() => {});
</script>

<template>
  <section class="p-[25px] lg:p-[50px]">
    <div
      class="flex flex-col items-start justify-between py-[35px] px-[30px] gap-y-[25px]"
    >
      <div
        class="flex flex-col lg:flex-row items-center justify-between w-full"
      >
        <span class="text-[24px] font-[600] captalize"
          >Benjamin Strategy Asset Upload</span
        >
        <span class="text-[18px] font-[600] uppercase text-gray-600">{{
          client_details?.client_company_name
        }}</span>
      </div>
      <hr class="h-px w-full bg-black/[0.3]" />
    </div>

    {{ file }}

    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Upload your files
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>
            {{ errors }}

            <div class="flex items-center justify-center w-full">
              <label
                for="file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="file"
                  type="file"
                  class="hidden"
                  @change="onFileChange"
                />
              </label>
            </div>
            <p v-if="errors.file">{{ errors.file }}</p>

            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
