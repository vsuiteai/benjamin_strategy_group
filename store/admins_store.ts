export const useAdminsStore = defineStore("adminsStore", () => {
  const admins = ref<AdminDetail[]>([]);

  const getAdmins = computed(() => {
    return admins.value;
  });

  const setAdmins = (data: AdminDetail[]) => {
    admins.value = data;
  };

  return {
    getAdmins,
    setAdmins,
  };
});
