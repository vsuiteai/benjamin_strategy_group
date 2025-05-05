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
      d="M20 6H18V18H20V6ZM17 6H16V18H17V6ZM15 6H12V18H15V6ZM11 6H10V18H11V6ZM8 6H6V18H8V6ZM5 6H4V18H5V6ZM22 4V8H24V4C24 3.46957 23.7893 2.96086 23.4142 2.58579C23.0391 2.21071 22.5304 2 22 2H18V4H22ZM2 2C1.46957 2 0.960859 2.21071 0.585787 2.58579C0.210714 2.96086 0 3.46957 0 4V8H2V4H6V2H2ZM22 16V20H18V22H22C22.5304 22 23.0391 21.7893 23.4142 21.4142C23.7893 21.0391 24 20.5304 24 20V16H22ZM2 20V16H0V20C0 20.5304 0.210714 21.0391 0.585787 21.4142C0.960859 21.7893 1.46957 22 2 22H6V20H2Z"
      fill="black"
    />
  </svg>
</template>
