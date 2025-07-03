<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { error } from '@sveltejs/kit';

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

  const modules = import.meta.glob<CreatorModule>('../../content/creators/*.md');

  export const load: Load = async ({ params }) => {
    const slug = params.slug;
    const matchKey = Object.keys(modules).find((path) => path.endsWith(`${slug}.md`));
    if (!matchKey) throw error(404, 'Creator not found');

    const creatorModule = await modules[matchKey]!();

    return {
      metadata: creatorModule.metadata,
      component: creatorModule.default
    };
  };
</script>

<script lang="ts">
  export let metadata: {
    name: string;
    location?: string;
    knownFor?: string[];
    thumbnail?: string;
  };

  export let component: any;
</script>

<svelte:component this={component} />

<section class="mt-6">
  <h2 class="text-xl font-semibold">{metadata?.name ?? 'Unknown Creator'}</h2>
  {#if metadata?.location}
    <p>Location: {metadata.location}</p>
  {/if}
  {#if metadata?.knownFor?.length}
    <p>Known for: {metadata.knownFor.join(', ')}</p>
  {/if}
  {#if metadata?.thumbnail}
    <img src={metadata.thumbnail} alt="{metadata.name} logo" class="mt-4 rounded shadow" />
  {/if}
</section>
