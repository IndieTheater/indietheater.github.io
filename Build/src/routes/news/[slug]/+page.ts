// src/routes/news/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

interface PostMetadata {
  title: string;
  date: string;
  author?: string;
  tags?: string[];
  thumbnail?: string;
  excerpt?: string;
}

interface PostModule {
  metadata: PostMetadata;
  default: any; // Svelte component
}

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob<PostModule>('../../../content/posts/*.md');

  const slug = params.slug;
  const matchKey = Object.keys(modules).find((path) => path.endsWith(`${slug}.md`));
  if (!matchKey) throw error(404, 'Post not found');

  const postModule = await modules[matchKey]!();

  return {
    metadata: postModule.metadata,
    component: postModule.default
  };
};