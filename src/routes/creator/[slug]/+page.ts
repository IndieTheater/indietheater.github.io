import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

interface CreatorMetadata {
  name: string;
  location?: string;
  knownFor?: string[];
  thumbnail?: string;
}

interface CreatorModule {
  metadata: CreatorMetadata;
  default: any; // Svelte component
}

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob<CreatorModule>('../../../content/creators/*.md');
  
  const slug = params.slug;
  const matchKey = Object.keys(modules).find((path) => path.endsWith(`${slug}.md`));
  if (!matchKey) throw error(404, 'Creator not found');

  const creatorModule = await modules[matchKey]!();

  return {
    metadata: creatorModule.metadata,
    component: creatorModule.default
  };
};