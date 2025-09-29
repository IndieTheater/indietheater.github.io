import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

interface ShowMetadata {
  title: string;
  creator: string;
  releaseDate: string;
  genre: string[];
  thumbnail: string;
}

interface ShowModule {
  metadata: ShowMetadata;
  default: any; // Svelte component
}

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob<ShowModule>('../../../content/shows/*.md');
  
  const slug = params.slug;
  const matchKey = Object.keys(modules).find((path) => path.endsWith(`${slug}.md`));
  if (!matchKey) throw error(404, 'Show not found');

  const showModule = await modules[matchKey]!();

  return {
    metadata: showModule.metadata,
    component: showModule.default
  };
};