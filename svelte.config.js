import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  extensions: ['.svelte', '.md', '.svx'], // include .md explicitly
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.svx'],
    })
  ],
  kit: {
    adapter: adapter({
      fallback: 'index.html', // SPA fallback for dynamic routes
    }),
  }
};

export default config;
