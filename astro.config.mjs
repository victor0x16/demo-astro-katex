import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import katex from './src/index.mjs';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  /// development | production
  integrations: [preact(), katex(), react()],
 // site: 'https://victor0x16.github.io/',
 // base: 'demo-astro-katex'
});