<script setup lang="ts">
import { useAdminsStore } from "~/store/admins_store";

const admins_store = useAdminsStore();

const admins = ref<AdminDetail[]>(admins_store.getAdmins);
</script>

<template>
  <div v-for="admin in admins">
    <div class="relative flex items-center space-x-3 mt-4">
      <div class="flex-shrink-0">
        <div
          class="h-8 w-8 rounded-full shadow flex items-center justify-center"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-sm font-medium text-gray-900">
          {{ admin?.admin_firstname }}
          {{ admin?.admin_lastname }}
        </p>
        <p class="truncate text-sm text-gray-500">
          {{ admin?.admin_username }}
        </p>
      </div>
    </div>
  </div>
</template>
