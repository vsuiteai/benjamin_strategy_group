<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: "white",
  },
  width: {
    type: String,
    default: "30px",
  },
  height: {
    type: String,
    default: "30px",
  },
});
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.4013 -5.17809e-08C16.0556 -2.31831e-08 16.5859 0.393987 16.5859 0.879994L16.5859 29.9198C16.5859 30.4058 16.0556 30.7998 15.4013 30.7998C14.7471 30.7998 14.2167 30.4058 14.2167 29.9198L14.2167 0.879994C14.2167 0.393987 14.7471 -8.03786e-08 15.4013 -5.17809e-08Z"
      :fill="fill"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 15.3995C0 14.7452 0.393987 14.2148 0.879994 14.2148L29.9198 14.2148C30.4058 14.2148 30.7998 14.7452 30.7998 15.3995C30.7998 16.0537 30.4058 16.5841 29.9198 16.5841L0.879994 16.5841C0.393987 16.5841 0 16.0537 0 15.3995Z"
      :fill="fill"
    />
  </svg>
</template>
