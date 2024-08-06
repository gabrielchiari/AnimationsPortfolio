import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import lenis from "astro-lenis";

// import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), lenis()]
  // output: "server",
  // adapter: cloudflare()
});