<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: "30",
  },
  height: {
    type: String,
    default: "30",
  },
});
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.47982 1.97656V12.4766M4.47982 1.97656L6.81315 4.3099M4.47982 1.97656L2.14648 4.3099M11.4798 12.4766V1.97656M11.4798 12.4766L13.8132 10.1432M11.4798 12.4766L9.14648 10.1432"
      stroke="black"
      stroke-opacity="0.7"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
