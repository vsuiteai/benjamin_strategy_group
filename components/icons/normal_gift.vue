<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>
<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 10C2 7.172 2 5.757 2.879 4.879C3.757 4 5.172 4 8 4H16C18.828 4 20.243 4 21.121 4.879C22 5.757 22 7.172 22 10V14C22 16.828 22 18.243 21.121 19.121C20.243 20 18.828 20 16 20H8C5.172 20 3.757 20 2.879 19.121C2 18.243 2 16.828 2 14V10Z"
      stroke="black"
      stroke-width="1.65"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 13C12 9.99 6 5.36 6 9.904C6 11.47 6.763 13 8.5 13H12ZM12 13C12 9.99 18 5.36 18 9.904C18 11.47 17.237 13 15.5 13H12ZM12 13L15 16M12 13L9 16M12 4V20M2 13H22"
      stroke="black"
      stroke-width="1.65"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
