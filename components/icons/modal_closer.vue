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
  fill: {
    type: String,
    default: "#000000",
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.9994 5.99989C18.2543 6.25479 18.3074 6.61493 18.1181 6.80428L6.80379 18.1186C6.61444 18.3079 6.2543 18.2548 5.9994 17.9999C5.7445 17.745 5.69136 17.3848 5.88072 17.1955L17.195 5.88121C17.3844 5.69185 17.7445 5.74499 17.9994 5.99989Z"
      :fill="fill"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.9994 6.00011C6.2543 5.74521 6.61444 5.69208 6.80379 5.88143L18.1181 17.1957C18.3074 17.3851 18.2543 17.7452 17.9994 18.0001C17.7445 18.255 17.3844 18.3081 17.195 18.1188L5.88072 6.80451C5.69136 6.61515 5.7445 6.25501 5.9994 6.00011Z"
      :fill="fill"
    />
  </svg>
</template>
