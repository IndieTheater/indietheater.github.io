<script>
	import SpotlightCard from '$lib/components/SpotlightCard.svelte';
	export let data;
</script>

<div
	class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
>
	<div class="container mx-auto px-6 py-12">
		<!-- Header Section -->
		<div class="mb-12 text-center">
			<h1 class="mb-4 text-5xl font-bold text-gray-900 dark:text-white">Creators</h1>
			<p class="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
				Learn about the artists and/or studios behind your favorite indie animations
			</p>
			<div
				class="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#316354] to-[#70AD95]"
			></div>
		</div>

		<!-- Creators Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each data.creators as creator}
				<SpotlightCard
					title={creator.name}
					slug={'/creator/' + creator.slug}
					thumbnail={creator.thumbnail}
					meta={creator.location || 'Independent Creator'}
					description={creator.knownFor?.length
						? `Known for: ${creator.knownFor.slice(0, 2).join(', ')}`
						: 'Animation Creator'}
					category="Creator"
				/>
			{/each}
		</div>

		{#if data.creators.length === 0}
			<div class="py-12 text-center">
				<h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">No Creators Found</h3>
				<p class="text-gray-600 dark:text-gray-300">
					This is probably a bug or network issue. Maybe reload?
				</p>
			</div>
		{/if}
	</div>
</div>
