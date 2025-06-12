export default defineNuxtRouteMiddleware(() => {
  const { loggedIn, user } = useUserSession();

  //   console.log(loggedIn.value);
  //   console.log(user.value);

  // redirect the user to the login screen if they're not authenticated
  if (!loggedIn.value || !user.value) {
    return navigateTo("/");
  }
});
