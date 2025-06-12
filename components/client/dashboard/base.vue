<script setup lang="ts">
defineProps({
  uid: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="min-h-[100vh] w-full p-[25px] lg:p-[50px] content">
    <div
      class="grid grid-cols-12 items-start justify-between gap-x-[20px] mb-10"
    >
      <div class="col-span-7">
        <div class="flex gap-2">
          <NuxtLink
            :to="`/client-dashboard/${uid}`"
            class="flex items-center justify-center text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center"
          >
            <svg
              fill="#ffffff"
              class="h-4 w-4 mr-2"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 511.999 511.999"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M384.053,57.883c-40.908,0-74.189,33.281-74.189,74.189s33.281,74.189,74.189,74.189s74.189-33.281,74.189-74.189 S424.961,57.883,384.053,57.883z M384.053,173.099c-22.623,0-41.028-18.405-41.028-41.028s18.405-41.028,41.028-41.028 s41.028,18.405,41.028,41.028S406.677,173.099,384.053,173.099z"
                    ></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M165.351,148.652h91.828c8.155,62.745,61.942,111.366,126.873,111.366c70.55,0,127.947-57.396,127.947-127.947 S454.602,4.125,384.052,4.125c-64.933,0-118.719,48.621-126.873,111.366h-91.828c-7.713-38.129-41.478-66.925-81.847-66.925 C37.46,48.566,0,86.026,0,132.071c0,40.369,28.796,74.134,66.925,81.846v128.605C28.796,350.235,0,383.999,0,424.369 c0,46.045,37.46,83.505,83.505,83.505c40.369,0,74.135-28.795,81.847-66.925h71.753c7.712,38.129,41.477,66.925,81.846,66.925 c46.045,0,83.505-37.46,83.505-83.505s-37.46-83.505-83.505-83.505c-40.369,0-74.134,28.796-81.846,66.925h-71.754 c-6.628-32.768-32.498-58.638-65.267-65.266V213.918C132.852,207.29,158.723,181.419,165.351,148.652z M384.053,37.285 c52.265,0,94.786,42.521,94.786,94.786s-42.521,94.786-94.786,94.786c-52.265,0-94.786-42.521-94.786-94.786 C289.267,79.805,331.788,37.285,384.053,37.285z M318.951,374.024c27.76,0,50.344,22.585,50.344,50.344 s-22.585,50.344-50.344,50.344c-27.76,0-50.344-22.585-50.344-50.344S291.192,374.024,318.951,374.024z M133.85,424.369 c0,27.76-22.586,50.344-50.345,50.344c-27.76,0-50.344-22.585-50.344-50.344c0-27.76,22.585-50.344,50.344-50.344 C111.265,374.024,133.85,396.609,133.85,424.369z M83.505,182.415c-27.76,0-50.344-22.583-50.344-50.344 c0-27.76,22.585-50.344,50.344-50.344c27.76,0,50.345,22.585,50.345,50.344S111.265,182.415,83.505,182.415z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            Insight
          </NuxtLink>
          <NuxtLink
            :to="`/client-dashboard/${uid}/questionaires`"
            class="flex items-center justify-center text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center"
          >
            <svg
              class="h-4 w-4 mr-2"
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
                  d="M12 17V16.9929M12 14.8571C12 11.6429 15 12.3571 15 9.85714C15 8.27919 13.6568 7 12 7C10.6567 7 9.51961 7.84083 9.13733 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Questionaires
          </NuxtLink>
          <NuxtLink
            :to="`/client-dashboard/${uid}/files`"
            class="flex items-center justify-center text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center"
          >
            <svg
              class="h-4 w-4 mr-2"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#ffffff"
                  d="m80 38 4.243-4.243A6 6 0 0 0 80 32v6Zm16 16-4.243 4.243A6 6 0 0 0 96 60v-6Zm58 94H38v12h116v-12ZM28 138V54H16v84h12Zm10-94h42V32H38v12Zm37.757-1.757 16 16 8.486-8.486-16-16-8.486 8.486ZM164 70v68h12V70h-12ZM96 60h58V48H96v12Zm-58 88c-5.523 0-10-4.477-10-10H16c0 12.15 9.85 22 22 22v-12Zm116 12c12.15 0 22-9.85 22-22h-12c0 5.523-4.477 10-10 10v12Zm22-90c0-12.15-9.85-22-22-22v12c5.523 0 10 4.477 10 10h12ZM28 54c0-5.523 4.477-10 10-10V32c-12.15 0-22 9.85-22 22h12Z"
                ></path>
              </g>
            </svg>
            Files
          </NuxtLink>
        </div>
      </div>

      <div class="col-span-5 flex justify-end">
        <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
          <button
            class="relative flex items-center space-x-3 hover:opacity-[.65]"
          >
            <div class="flex-shrink-0">
              <div
                class="h-8 w-8 rounded-full shadow flex items-center justify-center"
              >
                <svg
                  class="h-4 w-4"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        class="fill-[#000000]"
                        d="M256,362.549c12.439,0,29.89-54.93,34.382-70.985c13.943-46.482,25.398-109.859,25.398-162.266 C315.78,66.761,298.338,0,256,0c-42.338,0-59.78,66.761-59.78,129.298c0,52.407,11.472,115.784,25.415,162.266 C226.11,307.619,243.551,362.549,256,362.549z"
                      ></path>
                      <path
                        class="fill-[#000000]"
                        d="M256,401.424c-30.391,0-55.288,24.906-55.288,55.288C200.712,487.086,225.609,512,256,512 c30.392,0,55.297-24.914,55.297-55.288C311.297,426.33,286.391,401.424,256,401.424z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div class="min-w-0 flex-1">
              <!-- Extend touch target to entire panel -->
              <p class="text-xs font-medium text-gray-900 uppercase">
                view details
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<style>
.content {
  position: relative;
  z-index: 0;
}

.content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/assets/images/dot_pattern.svg");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.1; /* Lower for more fade */
  z-index: -1;
  pointer-events: none;
}
</style>
