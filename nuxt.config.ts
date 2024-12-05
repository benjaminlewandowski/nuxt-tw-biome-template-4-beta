import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    components: {
        dirs: [
            {
                path: "@/components/ui",
                prefix: "Ui",
                extensions: ["ts", "vue"],
            },
            "@/components",
        ],
        global: true,
    },
    future: {
        compatibilityVersion: 4,
    },
    vite: {
        plugins: [tailwindcss()],
    },
});