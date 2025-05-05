<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-row items-center sidebar_nav_navlink_wrapper dark:text-white/[0.87] hover:cursor-pointer"
  >
    <span class="sidebar_nav_icon"><slot name="sidebar_nav_icon" /></span>
    <span class="sidebar_nav_text"><slot name="sidebar_nav_text" /></span>
  </div>
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
