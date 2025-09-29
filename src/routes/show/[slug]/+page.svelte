<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  
  const { metadata, component } = data;
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
