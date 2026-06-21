import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        privacyPolicy: resolve(__dirname, "privacy-policy/index.html"),
        deleteAccount: resolve(__dirname, "delete-account/index.html"),
      },
    },
  },
});
