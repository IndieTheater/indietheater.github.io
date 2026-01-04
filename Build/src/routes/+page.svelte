<script>
	import { Film, Users, Newspaper, TrendingUp } from 'lucide-svelte';
	import SpotlightCard from '$lib/components/SpotlightCard.svelte';

	export let data;

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>IndieTheater - Discover Indie Animation</title>
	<meta
		name="description"
		content="Discover your next favorite indie animation show and learn about the creators behind them"
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative flex min-h-[60vh] min-w-[100vh] items-center justify-center">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		<img
			src="/assets/indie-animation.jpg"
			alt="Indie Animation Background"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
	</div>

	<!-- Hero Content -->
	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
		<h1 class="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
			<span class="block"> IndieTheater </span>
		</h1>
		<p class="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
			Discover your next favorite indie animation show and learn about the creators behind them!
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a href="/show" class="hero-button primary">
				<Film class="mr-2 h-5 w-5" />
				Explore Shows
			</a>
			<a href="/creator" class="hero-button secondary">
				<Users class="mr-2 h-5 w-5" />
				Meet Creators
			</a>
		</div>
	</div>
</section>

<!-- Featured Shows Section -->
<section class="bg-white py-16 dark:bg-gray-900">
	<div class="container mx-auto px-6">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Featured Shows</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
				Some of the featured shows on IndieTheater
			</p>
		</div>

		<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Murder Drones -->
			<div class="featured-card feature-hover-group">
				<div class="aspect-video overflow-hidden rounded-t-xl">
					<img
						src="/assets/shows/murder-drones.webp"
						alt="Murder Drones"
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
					/>
				</div>
				<div
					class="rounded-b-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 dark:from-gray-800 dark:to-gray-900"
				>
					<h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Murder Drones</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-300">Sci-Fi • Horror • Dark Comedy</p>
					<a href="/show/murder-drones" class="featured-link">Watch Now →</a>
				</div>
			</div>

			<!-- Hazbin Hotel -->
			<div class="featured-card feature-hover-group">
				<div class="aspect-video overflow-hidden rounded-t-xl">
					<img
						src="/assets/shows/hazbin-hotel.png"
						alt="Hazbin Hotel"
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
					/>
				</div>
				<div
					class="rounded-b-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 dark:from-gray-800 dark:to-gray-900"
				>
					<h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Hazbin Hotel</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-300">Musical • Comedy • Adult Animation</p>
					<a href="/show/hazbin-hotel" class="featured-link">Watch Now →</a>
				</div>
			</div>

			<!-- Lackadaisy -->
			<div class="featured-card feature-hover-group">
				<div class="aspect-video overflow-hidden rounded-t-xl">
					<img
						src="/assets/shows/lackadaisy.png"
						alt="Lackadaisy"
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
					/>
				</div>
				<div
					class="rounded-b-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 dark:from-gray-800 dark:to-gray-900"
				>
					<h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Lackadaisy</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-300">Period Drama • Comedy • Crime</p>
					<a href="/show/lackadaisy" class="featured-link">Watch Now →</a>
				</div>
			</div>
		</div>

		<div class="text-center">
			<a
				href="/show"
				class="inline-flex items-center rounded-full bg-[#316354] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#2a5447]"
			>
				View All Shows
				<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 7l5 5m0 0l-5 5m5-5H6"
					></path>
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Latest News Section -->
{#if data.latestPosts && data.latestPosts.length > 0}
	<section class="bg-gray-50 py-16 dark:bg-gray-800">
		<div class="container mx-auto px-6">
			<div class="mb-12 flex items-center justify-between">
				<div>
					<h2 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Latest News</h2>
					<p class="text-lg text-gray-600 dark:text-gray-300">
						Stay updated with indie animation news
					</p>
				</div>
				<a
					href="/news"
					class="hidden items-center gap-2 text-[#316354] transition-colors hover:text-[#70AD95] md:flex"
				>
					View All
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						></path>
					</svg>
				</a>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each data.latestPosts as post}
					<SpotlightCard
						title={post.title}
						slug={'/news/' + post.slug}
						thumbnail={post.thumbnail || '/assets/posts/default.jpg'}
						meta={formatDate(post.date)}
						description={post.excerpt || ''}
						category="News"
					/>
				{/each}
			</div>

			<div class="mt-8 text-center md:hidden">
				<a
					href="/news"
					class="inline-flex items-center gap-2 text-[#316354] transition-colors hover:text-[#70AD95]"
				>
					View All News
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						></path>
					</svg>
				</a>
			</div>
		</div>
	</section>
{/if}