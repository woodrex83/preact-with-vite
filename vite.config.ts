import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import { fileURLToPath } from "url"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: fileURLToPath(new URL("./src", import.meta.url)),
            },
        ],
    },
    css: {
        postcss: {
            plugins: [tailwindcss("./tailwind.config.js"), autoprefixer],
        },
    },
})
