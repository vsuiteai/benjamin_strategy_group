<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: "black",
  },
});
</script>

<template>
  <svg
    width="20"
    height="10"
    viewBox="0 0 20 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5168 2.04332L15.4001 2.92749L10.586 7.74332C10.5088 7.82095 10.4171 7.88256 10.3161 7.9246C10.215 7.96664 10.1067 7.98828 9.99721 7.98828C9.88777 7.98828 9.77942 7.96664 9.67838 7.9246C9.57733 7.88256 9.4856 7.82095 9.40846 7.74332L4.5918 2.92749L5.47513 2.04415L9.99596 6.56416L14.5168 2.04332Z"
      :fill="fill"
      fill-opacity="0.5"
      class="dark:fill-white/[0.87]"
    />
  </svg>
</template>
