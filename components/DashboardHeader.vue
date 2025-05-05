<script setup lang="ts">
defineEmits(["showSidebar"]);

const current_route = useRouter().currentRoute;
</script>
<template>
  <header class="w-full">
    <div class="content w-full">
      <div class="z-[1000] fixed w-full lg:hidden">
        <div
          class="mobile_header w-full flex items-center justify-between bg-[#F4F4F6] dark:bg-[#121212] dark:text-white/[0.87]"
        >
          <IconsNavHamburger @click="$emit('showSidebar')" />
          <!-- <LogosMobileCampusAndCoSuperstoreLogo /> -->

          <div class="flex items-center justify-center relative w-12 h-12">
            <IconsNavNotificationBell />
            <div
              class="absolute top-3 right-3.5 w-2 h-2 rounded-full bg-[#FF0404]"
            ></div>
          </div>
        </div>
      </div>

      <div
        class="header z-[1000] fixed h-full hidden lg:block bg-white dark:bg-[#121212] dark:text-white/[0.87] border-b-[0.5px] border-white/[0.2]"
      >
        <div class="h-full flex flex-row items-center justify-between">
          <div class="flex flex-col items-start">
            <span class="user_greeting">{{
              current_route.meta.breadcrumb_top
            }}</span>
            <h4 class="breadcrumb">
              {{ current_route.meta.breadcrumb_bottom }}
            </h4>
          </div>

          <div class="flex items-center justify-end gap-x-2">
            <IconsSearch />
            <div class="flex items-center justify-center relative w-12 h-12">
              <IconsNavNotificationBell />
              <div
                class="absolute top-3 right-3.5 w-2 h-2 rounded-full bg-[#FF0404]"
              ></div>
            </div>
            <div
              class="nav_user_profile_box text-white flex items-center justify-center rounded-full"
            >
              J
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
