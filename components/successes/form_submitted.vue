<script setup lang="ts"></script>
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
            Your form has been submitted successfully. Thank you for taking the
            time to provide your information. Our team has received your
            submission and is currently reviewing the details. You can expect to
            hear from us very soon. We appreciate your interest and look forward
            to speaking with you!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
