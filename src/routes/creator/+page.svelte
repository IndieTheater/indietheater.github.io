<script>
  import SpotlightCard from '$lib/components/SpotlightCard.svelte';
  export let data;
</script>

<h1 class="text-2xl font-bold mb-4">All Creators</h1>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {#each data.creators as creator}
    <SpotlightCard title={creator.name} slug={'/creator/' + creator.slug} thumbnail={creator.thumbnail} />
  {/each}
</div>
