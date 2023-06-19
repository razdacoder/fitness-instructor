import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// import { pwaConf } from "./pwa.config.js";

// const pwaPlugin = createPWA({
//   config: pwaConf,
// });

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: "autoUpdate" })],
});

// https://vitejs.dev/config/
