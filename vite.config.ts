import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false, // disable due to storybook
  },
  plugins: [react(), UnoCSS()],
});
