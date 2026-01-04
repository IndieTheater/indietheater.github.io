<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { metadata, component } = data;
</script>

<svelte:head>
	<title>{metadata?.name || 'Creator'} - IndieTheater</title>
</svelte:head>

<article class="mx-auto max-w-4xl">
	<!-- Header -->
	<header class="mb-8">
		{#if metadata?.thumbnail}
			<img
				src={metadata.thumbnail}
				alt={metadata.name}
				class="mb-6 h-auto w-full rounded-xl object-cover shadow-lg"
			/>
		{/if}

		<h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
			{metadata?.name || 'Unknown Creator'}
		</h1>

		<div class="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
			{#if metadata?.location}
				<span class="flex items-center gap-2">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						></path>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						></path>
					</svg>
					{metadata.location}
				</span>
			{/if}

			{#if metadata?.founded}
				<span class="flex items-center gap-2">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path>
					</svg>
					Founded {metadata.founded}
				</span>
			{/if}
		</div>

		{#if metadata?.knownFor && metadata.knownFor.length > 0}
			<div class="mt-4">
				<h3 class="mb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
					Known For
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each metadata.knownFor as show}
						<span
							class="rounded-full bg-[#316354] px-3 py-1 text-sm font-medium text-white dark:bg-[#70AD95]"
						>
							{show}
						</span>
					{/each}
				</div>
			</div>
		{/if}

		{#if metadata?.website || metadata?.youtube}
			<div class="mt-6 flex flex-wrap gap-4">
				{#if metadata?.website}
					<a
						href={metadata.website}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-[#316354] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2a5447]"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
							></path>
						</svg>
						Website
					</a>
				{/if}
				{#if metadata?.youtube}
					<a
						href={metadata.youtube}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
					>
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
							></path>
						</svg>
						YouTube
					</a>
				{/if}
			</div>
		{/if}
	</header>

	<!-- Content -->
	<div
		class="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-[#316354] hover:prose-a:text-[#70AD95] dark:prose-a:text-[#70AD95] dark:hover:prose-a:text-[#316354]"
	>
		<svelte:component this={component} />
	</div>

	<!-- Back to Creators -->
	<div class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
		<a
			href="/creator"
			class="inline-flex items-center gap-2 text-[#316354] transition-colors hover:text-[#70AD95] dark:text-[#70AD95] dark:hover:text-[#316354]"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				></path>
			</svg>
			Back to Creators
		</a>
	</div>
</article>