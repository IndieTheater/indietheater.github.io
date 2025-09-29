<script>
  import SpotlightCard from '$lib/components/SpotlightCard.svelte';
  export let data;
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
  <div class="container mx-auto px-6 py-12">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">Animation Shows</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Shows currently available on IndieTheater
      </p>
      <div class="w-24 h-1 bg-gradient-to-r from-[#316354] to-[#70AD95] mx-auto mt-6 rounded-full"></div>
    </div>

    <!-- Shows Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {#each data.shows as show}
        <SpotlightCard 
          title={show.title} 
          slug={'/show/' + show.slug} 
          thumbnail={show.thumbnail}
          meta={show.creator || 'Independent Creator'}
          description={show.genre?.length ? show.genre.join(' • ') : 'Animated Series'}
          category="Show"
        />
      {/each}
    </div>

    {#if data.shows.length === 0}
      <div class="text-center py-12">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Shows Found</h3>
        <p class="text-gray-600 dark:text-gray-300">This is probably a bug or network issue. Maybe reload?</p>
      </div>
    {/if}
  </div>
</div>
