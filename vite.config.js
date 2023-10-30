import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].css",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Provide the path to your main SCSS file
        additionalData: `@import "@/src/assets/styles/index.scss";`,
      },
    },
  },
});
