<script setup lang="ts">
defineProps({
  fill_class: {
    type: String,
    default: "fill-black dark:fill-white",
  },
  width: {
    type: String,
    default: "12px",
  },
  height: {
    type: String,
    default: "25px",
  },
});
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 12 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="fill_class"
      d="M2.45199 7.08024L3.51299 6.02024L9.29199 11.7972C9.38514 11.8898 9.45907 11.9999 9.50952 12.1211C9.55997 12.2424 9.58594 12.3724 9.58594 12.5037C9.58594 12.6351 9.55997 12.7651 9.50952 12.8863C9.45907 13.0076 9.38514 13.1177 9.29199 13.2102L3.51299 18.9902L2.45299 17.9302L7.87699 12.5052L2.45199 7.08024Z"
      fill-opacity="0.5"
    />
  </svg>
</template>
