<script setup lang="ts">
const emits = defineEmits(["restart_upload_process", "end_upload_process"]);
const restart_upload_process = () => {
  emits("restart_upload_process");
};
const end_upload_process = () => {
  emits("end_upload_process");
};
</script>
<template>
  <div
    aria-hidden="true"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
        >
          <h3 class="text-xl font-semibold text-green-900">
            Success: ✅ Form submitted successfully
          </h3>
        </div>
        <div class="p-4 md:p-5 space-y-4">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Your date has been submitted, and your file uploaded successfully.
            Thank you for taking the time to provide your information. Our team
            has received your submission and is currently reviewing the details.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            They will undertake the next steps
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Do you have another file that you wish to upload?
          </p>
        </div>

        <div class="w-full grid grid-cols-2">
          <button
            @click="restart_upload_process()"
            class="w-full px-[50px] py-[16px] bg-black flex items-center justify-center gap-[10px] text-white"
          >
            <span class="inline-block rotate-180">
              <IconsArrowRightLeftWithLongerLegs />
            </span>
            <span>Yes</span>
          </button>
          <button
            @click="end_upload_process()"
            class="w-full px-[50px] py-[16px] bg-gray-700 flex items-center justify-center gap-[10px] text-white"
          >
            <span>No</span>
            <span>
              <IconsArrowRightLeftWithLongerLegs />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
