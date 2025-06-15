import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import path from 'path';

const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [mdsvex()],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/indietheater' : ''
    }
  }
};

export default config;
