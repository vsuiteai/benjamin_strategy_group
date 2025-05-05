<script lang="ts" setup>
import { useModalStore } from "~/store/modal_store";

const modal_store = useModalStore();

const closeModal = () => {
  modal_store.closeActiveModal();
};
</script>
<template>
  <div
    class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/[0.5] flex items-center justify-center z-[3000]"
    @click.self="closeModal"
  >
    <div
      class="relative bg-[#F4F4F6] lg:bg-white w-full lg:w-[90%] h-full lg:h-[unset] max-h-full lg:max-h-[90%] lg:max-w-[700px] lg:rounded-[14px] py-[50px] lg:px-[25px] modal overflow-y-auto"
    >
      <div
        @click="closeModal"
        class="absolute top-2 lg:top-0 right-2 lg:right-0 w-[40px] h-[40px] flex items-center justify-center"
      >
        <button><IconsModalCloser /></button>
      </div>

      <slot name="body" />
    </div>
  </div>
</template>

<style scoped>
.modal {
  box-shadow: 0px 17px 40px 4px #7090b01c;
}
</style>
