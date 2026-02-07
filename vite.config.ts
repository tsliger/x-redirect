import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    minify: false,
    plugins: [react()],
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/popup.tsx"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  outDir: "dist",
  emptyOutDir: true,
  publicDir: "public",
});
