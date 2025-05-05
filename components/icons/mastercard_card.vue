<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: "20",
  },
  height: {
    type: String,
    default: "12",
  },
});
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1611_5968)">
      <path
        d="M7.28906 1.27563H12.6914V10.6531H7.28906V1.27563Z"
        fill="#FF5F00"
      />
      <path
        d="M7.63195 5.96445C7.63195 4.05917 8.55805 2.36921 9.98148 1.2757C8.93539 0.480453 7.61484 0 6.17422 0C2.76117 0 0 2.6674 0 5.96445C0 9.26151 2.76117 11.9289 6.17414 11.9289C7.61477 11.9289 8.93531 11.4485 9.98148 10.6531C8.55805 9.57623 7.63195 7.86974 7.63195 5.96445Z"
        fill="#EB001B"
      />
      <path
        d="M19.9815 5.96445C19.9815 9.26143 17.2203 11.9289 13.8073 11.9289C12.3667 11.9289 11.0462 11.4485 10 10.6531C11.4406 9.5597 12.3496 7.86974 12.3496 5.96445C12.3496 4.05917 11.4234 2.36921 10 1.2757C11.0461 0.480453 12.3667 0 13.8073 0C17.2203 0 19.9815 2.684 19.9815 5.96445Z"
        fill="#F79E1B"
      />
    </g>
    <defs>
      <clipPath id="clip0_1611_5968">
        <rect :width="width" :height="height" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
