<script>
  import SpotlightCard from '$lib/components/SpotlightCard.svelte';
  export let data;
</script>

<h1 class="text-2xl font-bold mb-4">All Shows</h1>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {#each data.shows as show}
    <SpotlightCard title={show.title} slug={'/show/' + show.slug} thumbnail={show.thumbnail} />
  {/each}
</div>
