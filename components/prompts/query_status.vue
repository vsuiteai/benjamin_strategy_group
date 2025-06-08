<script setup lang="ts">
defineProps({
  status: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <div
    v-if="status === 'processing'"
    class="inline-block px-2 py-1 text-xs font-medium leading-none text-center text-gray-800 bg-gray-200 rounded-md animate-pulse"
  >
    <span>
      <IconsHourglass
        class="inline"
        :fill="'#1F2937'"
        :width="'12px'"
        :height="'12px'"
      />
    </span>
    processing
  </div>
  <div
    v-else-if="status === 'completed'"
    class="inline-block px-2 py-1 text-xs font-medium leading-none text-center text-green-800 bg-green-200 rounded-md"
  >
    <span>
      <IconsTickMark
        class="inline"
        :fill="'#016630'"
        :width="'12px'"
        :height="'12px'"
      />
    </span>
    completed
  </div>
  <div
    v-else-if="status === 'failed'"
    class="inline-block px-2 py-1 text-xs font-medium leading-none text-center text-red-800 bg-red-200 rounded-md"
  >
    <span>
      <IconsPlus
        class="inline rotate-45"
        :fill="'#991b1b'"
        :width="'12px'"
        :height="'12px'"
      />
    </span>
    failed
  </div>
</template>
