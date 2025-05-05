<script setup lang="ts">
defineProps({
  stroke: {
    type: String,
    default: "black",
  },
  width: {
    type: String,
    default: "20",
  },
  height: {
    type: String,
    default: "20",
  },
});
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3327 9.99967C18.3327 6.85717 18.3327 5.28551 17.356 4.30967C16.3793 3.33384 14.8085 3.33301 11.666 3.33301H8.33268C5.19018 3.33301 3.61852 3.33301 2.64268 4.30967C1.66685 5.28634 1.66602 6.85717 1.66602 9.99967C1.66602 13.1422 1.66602 14.7138 2.64268 15.6897C3.61935 16.6655 5.19018 16.6663 8.33268 16.6663H11.666C14.8085 16.6663 16.3802 16.6663 17.356 15.6897C17.901 15.1455 18.1419 14.4163 18.2477 13.333M8.33268 13.333H4.99935M11.666 13.333H10.416M1.66602 8.33301H5.83268M18.3327 8.33301H9.16602"
      :stroke="stroke"
      class="dark:stroke-white/[0.87]"
      stroke-width="1.65"
      stroke-linecap="round"
    />
  </svg>
</template>
