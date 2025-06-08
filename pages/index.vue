<script setup>
definePageMeta({
  layout: "guest",
});
</script>

<template>
  <section
    class="min-w-[100vw] min-h-[100vh] w-[100vw] h-[100vh] bg-[url('/assets/images/home_overlay.webp')] bg-no-repeat bg-center bg-cover relative"
  >
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div
      class="w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-4 z-[20] relative"
    >
      <div class="flex h-full w-full justify-center items-center">
        <img
          src="/assets/images/benjamin_group.png"
          alt=""
          class="lg:w-[550px] w-[90%]"
        />
      </div>
      <div class="flex h-full w-full justify-center items-center">
        <div class="w-[500px] bg-white py-[35px] px-[50px]">
          <p class="w-full text-center font-[700] text-[32px] text-[#1B1E24]">
            Log in to your account
          </p>

          <div class="my-12 w-full">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    required=""
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Password</label
                  >
                </div>
                <div class="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="current-password"
                    required=""
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div class="flex items-center justify-center">
                <button
                  type="submit"
                  class="flex w-[250px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
