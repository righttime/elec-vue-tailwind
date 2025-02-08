import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import path from "path";

export default defineConfig({
  root: "src/renderer",
  base: "./",
  plugins: [
    vue(),
    tailwindcss(),
    electron({
      entry: {
        main: resolve(__dirname, "src/main/main.ts"),
        preload: resolve(__dirname, "src/preload/preload.ts"),
      },
      vite: {
        build: {
          outDir: resolve(__dirname, "dist"),
          rollupOptions: {
            output: {
              entryFileNames: (chunkInfo) => {
                if (chunkInfo.name === "main") {
                  return path.posix.join("main", "[name].js");
                } else if (chunkInfo.name === "preload") {
                  return path.posix.join("preload", "[name].js");
                }
                return "[name].js";
              },
            },
          },
        },
      },
    }),
    renderer(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist/renderer",
  },
});
