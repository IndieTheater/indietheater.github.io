<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { error } from '@sveltejs/kit';

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

  const modules = import.meta.glob<ShowModule>('../../content/shows/*.md');

  export const load: Load = async ({ params }) => {
    const slug = params.slug;
    const matchKey = Object.keys(modules).find((path) => path.endsWith(`${slug}.md`));
    if (!matchKey) throw error(404, 'Show not found');

    const showModule = await modules[matchKey]!();

    return {
      metadata: showModule.metadata,
      component: showModule.default
    };
  };
</script>

<script lang="ts">
  export let metadata: {
    title?: string;
    creator?: string;
    releaseDate?: string;
    genre?: string[];
    thumbnail?: string;
  };

  export let component: any;
</script>

<svelte:component this={component} />

<section class="mt-6">
  <h2 class="text-xl font-semibold">{metadata?.title ?? 'Unknown Title'}</h2>
  {#if metadata?.creator}
    <p>Creator: {metadata.creator}</p>
  {/if}
  {#if metadata?.releaseDate}
    <p>Release Date: {metadata.releaseDate}</p>
  {/if}
  {#if metadata?.genre?.length}
    <p>Genre: {metadata.genre.join(', ')}</p>
  {/if}
  {#if metadata?.thumbnail}
    <img src={metadata.thumbnail} alt="{metadata.title ?? 'Show'} logo" class="mt-4 rounded shadow" />
  {/if}
</section>
