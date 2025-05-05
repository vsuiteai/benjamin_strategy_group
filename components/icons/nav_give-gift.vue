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
      d="M14.2863 3.57101V10.7139M14.2863 3.57101L12.1434 0.713867M14.2863 3.57101L16.4291 0.713867M0.714844 15.7139L4.20627 18.6224C4.71971 19.0499 5.36673 19.284 6.03484 19.2839H15.2377C15.8948 19.2839 16.4291 18.751 16.4291 18.0939C16.4291 16.7796 15.3634 15.7124 14.0477 15.7124H7.64913M19.2863 3.57101H9.28627V10.7139H19.2863V3.57101Z"
      :stroke="stroke"
      class="dark:stroke-white/[0.87]"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.00056 14.2853L6.07199 15.3567C6.35615 15.6409 6.74155 15.8005 7.14341 15.8005C7.54528 15.8005 7.93068 15.6409 8.21484 15.3567C8.499 15.0726 8.65864 14.6872 8.65864 14.2853C8.65864 13.8834 8.499 13.498 8.21484 13.2139L6.55199 11.5496C6.28628 11.2842 5.97086 11.0737 5.62375 10.9303C5.27665 10.7869 4.90469 10.7134 4.52913 10.7139H0.714844"
      :stroke="stroke"
      class="dark:stroke-white/[0.87]"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
