import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Jenesei Weather",
        short_name: "JenWeather",
        start_url: "/",
        display: "fullscreen",
        description: "JenWeather is Nice",
        lang: "eng",
        theme_color: "#008296",
        background_color: "#008296",
        orientation: "portrait",
        icons: [
          {
            src: "/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/apple-icon-180.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
        prefer_related_applications: false,
      },
      includeAssets: ["assets/*"],
      registerType: "autoUpdate",
      // strategies: 'injectManifest',
      // srcDir: 'src',
      // filename: "service-worker.js",
      workbox: {
        sourcemap: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
      },
      devOptions: {
        enabled: true,
      },
      injectManifest: {
        maximumFileSizeToCacheInBytes: 8000000,
      },
    }),
  ],
});
