// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/image", "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    mysql: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    protected_backend_route: ["/api/clients"],
    emailing_user: "bonifaceiniubong413@gmail.com",
    emailing_pass: "saszhzzzroxzcfhx",
  },

  nitro: {
    // preset: "node",
    preset: "node-server",
  },
});
