<script setup lang="ts">
import { modalTypes } from "~/config/modal_types";
import { useModalStore } from "~/store/modal_store";

const sidebar = ref<HTMLElement | null>(null);

const showSideBar = () => {
  sidebar.value !== null ? sidebar.value.classList.remove("hidden") : null;
};

const removeSideBar = () => {
  sidebar.value !== null ? sidebar.value.classList.add("hidden") : null;
};

const modal_store = useModalStore();
</script>

<template>
  <ModalsClientsCreateNewClient
    v-if="modal_store.getCurrentModal === modalTypes.create_new_client"
  />

  <ModalsAdminsCreateNewAdmin
    v-if="modal_store.getCurrentModal === modalTypes.create_new_admin"
  />

  <section class="h-full">
    <DashboardHeader @show-sidebar="showSideBar" />

    <main
      class="dark:bg-[#121212] dark:text-white/[0.87] pb-[100px] lg:pb-[unset]"
    >
      <slot />
    </main>

    <!-- Note: Z-INDEX of the header is 1000 -->
    <div
      ref="sidebar"
      class="sidebar z-[2000] fixed top-0 left-0 h-full hidden lg:block bg-white dark:bg-[#121212] shadow-[1px_0px_0px_0px_rgba(255,255,255,0.1)]"
    >
      <Sidebar @hide-sidebar="removeSideBar" />
    </div>
  </section>
</template>

<style>
body {
  background-color: #f4f4f6;
}
.sidebar {
  width: 250px;
}
</style>
