<script setup lang="ts">
definePageMeta({
  layout: "guest",
  breadcrumb_top: "",
  breadcrumb_bottom: "",
});

import { usePublicClientStore } from "~/store/public_client_store";

const public_client_store = usePublicClientStore();
const route = useRoute();
const uid = route.params.client_uid as string;

const clientController = useClientController();

onBeforeMount(async () => {
  const res = await clientController.get_client(uid);
  // console.log(res);

  if (res.client) {
    public_client_store.setClient(res.client);
  }
});
</script>

<template>
  <ClientDashboardBase :uid="uid">
    <div class="grid grid-cols-12 items-start justify-start gap-x-8 w-full">
      <div
        class="col-span-4 min-h-[300px] bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center"
      >
        <h5
          class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
        >
          Benjamin Strategy <br />
          CEO Onboarding
        </h5>

        <div class="flex gap-8 items-center justify-center">
          <button
            class="text-gray-500 uppercase text-xs font-semibold underline hover:opacity-[.65] decoration-dashed underline-offset-4"
          >
            view entry
          </button>
          <button
            class="flex gap-2 items-center justify-center uppercase text-xs hover:opacity-[.65] font-semibold text-[#FF1493] border-dashed border-2 border-[#FF1493] px-3 py-1 rounded-lg"
          >
            <span>edit entry</span>
            <svg
              class="h-4 w-4 mr-2"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF1493"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M0 0h48v48H0z" fill="none"></path>
                <g id="Shopicon">
                  <polygon
                    points="44,30 40,30 40,38 8,38 8,10 20,10 20,6 4,6 4,42 44,42 "
                  ></polygon>
                  <polygon
                    points="26,26.828 40,12.828 40,24 44,24 44,6 26,6 26,10 37.172,10 23.172,24 "
                  ></polygon>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div
        class="col-span-4 min-h-[300px] bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center"
      >
        <h5
          class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
        >
          Benjamin Strategy <br />
          Advisors Onboarding
        </h5>

        <div class="flex gap-8 items-center justify-center">
          <button
            class="text-gray-500 uppercase text-xs font-semibold underline hover:opacity-[.65] decoration-dashed underline-offset-4"
          >
            view entry
          </button>
          <button
            class="flex gap-2 items-center justify-center uppercase text-xs hover:opacity-[.65] font-semibold text-[#FF1493] border-dashed border-2 border-[#FF1493] px-3 py-1 rounded-lg"
          >
            <span>edit entry</span>
            <svg
              class="h-4 w-4 mr-2"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF1493"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M0 0h48v48H0z" fill="none"></path>
                <g id="Shopicon">
                  <polygon
                    points="44,30 40,30 40,38 8,38 8,10 20,10 20,6 4,6 4,42 44,42 "
                  ></polygon>
                  <polygon
                    points="26,26.828 40,12.828 40,24 44,24 44,6 26,6 26,10 37.172,10 23.172,24 "
                  ></polygon>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </ClientDashboardBase>
</template>
