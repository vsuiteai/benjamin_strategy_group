<script setup lang="ts">
import { NuxtLink } from "#components";
defineProps({
  to: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex flex-row items-center sidebar_nav_navlink_wrapper dark:text-white/[0.87] font-[600] hover:opacity-[.6]"
    active-class=" dark:opacity-[50%] bg-gray-200"
  >
    <span class="sidebar_nav_icon"><slot name="sidebar_nav_icon" /></span>
    <span class="sidebar_nav_text"><slot name="sidebar_nav_text" /></span>
  </NuxtLink>
</template>

<style lang="css" scoped>
.sidebar_nav_navlink_wrapper {
  column-gap: 16px;
  padding: 20px 45px;
  width: 100%;
}

.sidebar_nav_text {
  font-size: 16px;
  line-height: 20px;
}
</style>
