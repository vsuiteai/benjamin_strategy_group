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
    <g clip-path="url(#clip0_1158_4354)">
      <path
        d="M12.4993 10H1.66602M1.66602 10L4.58268 7.5M1.66602 10L4.58268 12.5"
        :stroke="stroke"
        stroke-width="1.65"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.50195 5.83317C7.51195 4.02067 7.59279 3.039 8.23279 2.399C8.96529 1.6665 10.1436 1.6665 12.5003 1.6665H13.3336C15.6911 1.6665 16.8695 1.6665 17.602 2.399C18.3336 3.13067 18.3336 4.30984 18.3336 6.6665V13.3332C18.3336 15.6898 18.3336 16.869 17.602 17.6007C16.9611 18.2415 15.9795 18.3215 14.167 18.3315M7.50195 14.1665C7.51195 15.979 7.59279 16.9607 8.23279 17.6007C8.76695 18.1357 9.53945 18.2798 10.8336 18.319"
        :stroke="stroke"
        stroke-width="1.65"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1158_4354">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
