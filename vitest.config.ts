/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    environment: "jsdom",
    globals: true,
    setupFiles: "src/test-setup.ts",
  },
  plugins: [react(), UnoCSS()],
});
