import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import lenis from "astro-lenis";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), lenis()],
  site: 'https://AnimationsPortfolio.github.io',
});