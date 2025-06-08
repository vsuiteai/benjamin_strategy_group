<script setup lang="ts">
defineProps({
  prompt_types: {
    required: true,
    type: Object,
  },
  larger: {
    required: false,
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    v-for="(value, key) in prompt_types"
    :class="{
      'bg-green-300 text-green-800': value,
      'bg-red-300 text-red-800': !value,
      'text-xs': !larger,
      'text-sm': larger,
    }"
    class="inline-block items-center justify-end mb-1 font-medium me-2 px-2.5 py-0.5 rounded-md"
  >
    {{ key }}
  </div>
</template>
