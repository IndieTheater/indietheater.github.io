<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { metadata, component } = data;

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
	<title>{metadata?.title || 'Post'} - IndieTheater</title>
</svelte:head>

<article class="mx-auto max-w-4xl">
	<!-- Header -->
	<header class="mb-8">
		{#if metadata?.thumbnail}
			<img
				src={metadata.thumbnail}
				alt={metadata.title}
				class="mb-6 h-auto w-full rounded-xl object-cover shadow-lg"
			/>
		{/if}

		<h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
			{metadata?.title || 'Untitled'}
		</h1>

		<div class="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
			{#if metadata?.date}
				<time datetime={metadata.date} class="flex items-center gap-2">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path>
					</svg>
					{formatDate(metadata.date)}
				</time>
			{/if}

			{#if metadata?.author}
				<span class="flex items-center gap-2">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						></path>
					</svg>
					{metadata.author}
				</span>
			{/if}
		</div>

		{#if metadata?.tags && metadata.tags.length > 0}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each metadata.tags as tag}
					<span
						class="rounded-full bg-[#316354] px-3 py-1 text-sm font-medium text-white dark:bg-[#70AD95]"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</header>

	<!-- Content -->
	<div
		class="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-[#316354] hover:prose-a:text-[#70AD95] dark:prose-a:text-[#70AD95] dark:hover:prose-a:text-[#316354]"
	>
		<svelte:component this={component} />
	</div>

	<!-- Back to News -->
	<div class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
		<a
			href="/news"
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
			Back to News
		</a>
	</div>
</article>