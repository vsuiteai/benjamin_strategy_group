<script lang="ts" setup>
import { useModalStore } from "~/store/modal_store";

const modal_store = useModalStore();

const closeModal = () => {
  modal_store.closeActiveModal();
};
</script>
<template>
  <!-- Main modal -->
  <div
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[20000] flex justify-center items-center min-w-[100vw] min-h-[100vh] md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/[0.6]"
  >
    <div class="relative p-4 w-full max-w-sm lg:max-w-[500px] max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <slot name="title" />
          </h3>
          <button
            @click="closeModal"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->

        <div class="p-4 md:p-5">
          <slot name="body" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  box-shadow: 0px 17px 40px 4px #7090b01c;
}
</style>
