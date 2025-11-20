import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), cssInjectedByJsPlugin()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: undefined,
                entryFileNames: "widget.js",
            },
        },
        lib: {
            entry: "src/widget.jsx",
            name: "PicoWidget",
            fileName: (format) => `widget.js`,
            formats: ["es"],
        },
        outDir: "docs",
    },
    define: {
        "process.env": {},
    },
    server: {
        open: "/test.html",
    },
});
