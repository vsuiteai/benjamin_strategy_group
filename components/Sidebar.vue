<script setup lang="ts">
import { IconsNavLogout, IconsNavSettings } from "#components";
import { ref } from "vue";

const { user, clear: clearSession } = useUserSession();

defineEmits(["hideSidebar"]);

const current_router = useRouter();

const logout_user = async () => {
  await clearSession();
  await navigateTo("/");
};
</script>

<template>
  <div class="relative h-full w-full flex flex-col">
    <div class="logo_and_user_profile_container bg-black">
      <img
        src="/assets/images/benjamin_group.png"
        class="h-[80px] mx-auto"
        alt=""
      />

      <div
        class="flex flex-row lg:hidden block items-center justify-between text-white/[0.87] mt-4"
      >
        <div class="nav_user_profile flex flex-row">
          <div
            class="nav_user_profile_box text-white flex items-center justify-center rounded-full"
          >
            J
          </div>
          <span>John Smith</span>
        </div>
        <div @click="$emit('hideSidebar')">
          <IconsNavCloseWhite />
        </div>
      </div>
    </div>
    <div
      class="sidebar_nav_wrapper flex flex-col justify-between h-full overflow-x-auto gap-y-16"
    >
      <div>
        <SidebarNavItemLink to="/dashboard">
          <template #sidebar_nav_icon>
            <IconsDashboardIcon />
          </template>
          <template #sidebar_nav_text>Dashboard</template>
        </SidebarNavItemLink>
        <SidebarNavItemLink to="/clients">
          <template #sidebar_nav_icon>
            <IconsClientsIcon />
          </template>
          <template #sidebar_nav_text>Clients</template>
        </SidebarNavItemLink>
        <SidebarNavItemLink to="/settings">
          <template #sidebar_nav_icon>
            <IconsNavSettings />
          </template>
          <template #sidebar_nav_text>Settings</template>
        </SidebarNavItemLink>
        <SidebarNavItemLink
          @click="logout_user"
          class="bg-red-900 text-red-100"
        >
          <template #sidebar_nav_icon>
            <IconsNavLogout stroke="#FEE2E2" />
          </template>
          <template #sidebar_nav_text>Logout</template>
        </SidebarNavItemLink>
      </div>

      <!-- 

      <div>
        <SidebarNavItemLink :is_a_link="true">
          <template #sidebar_nav_icon><IconsNavLogout /></template>
          <template #sidebar_nav_text>Logout</template>
        </SidebarNavItemLink>
      </div> -->
    </div>
  </div>
</template>

<style lang="css" scoped>
.logo_and_user_profile_container {
  padding: 20px;
}

.sidebar_nav_wrapper {
  padding-bottom: 45px;
  /* padding-top: 10px; */
}
</style>
