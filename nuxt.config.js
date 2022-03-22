export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  generate: {
    fallback: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Glow",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxtjs/color-mode"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-webfontloader",
  ],

  //Font config
  webfontloader: {
    google: {
      families: ["Quicksand:300,400,500,600,700"],
    },
  },
  colorMode: {
    classSuffix: "",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: " Glow",
      author: "Behon Baker",
      description: "Glow UI made with Tailwind CSS",
      theme_color: "#99252A",
      ogTitle: "Glow",
      twitterCard: "summary_large_image",
      twitterCreator: "@iAm_BayBreezy",
    },
    manifest: {
      lang: "en",
      name: " Glow",
      short_name: " Glow",
      description: "Glow UI made with Tailwind CSS",
      theme_color: "#99252A",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
