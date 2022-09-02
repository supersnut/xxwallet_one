import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // typescript: { shim: false },
    // mode: 'spa',
    modules: [
        "@nuxt/content",
    ],
    content: {
        documentDriven: true
    },
    loading: {
        color: "#5A46C8"
    },
    // https://nuxtjs.org/docs/get-started/commands
    // 'static' in v3 is still experimental
    // https://v3.nuxtjs.org/getting-started/migration
    target: "static",
});
