<script>
	import SpotlightCard from '$lib/components/SpotlightCard.svelte';
	export let data;

	let email = '';

	function validateEmail() {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!regex.test(email)) {
			alert('Please enter a valid email address.');
			return;
		}
		alert('Thank you for subscribing!');
	}

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
	<title>News - IndieTheater</title>
</svelte:head>

<div
	class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
>
	<div class="container mx-auto px-6 py-12">
		<!-- Header Section -->
		<div class="mb-12 text-center">
			<h1 class="mb-4 text-5xl font-bold text-gray-900 dark:text-white">News & Updates</h1>
			<p class="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
				Latest news about indie animation shows, creators, and episodes
			</p>
			<div
				class="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#316354] to-[#70AD95]"
			></div>
		</div>

		<!-- Posts Grid -->
		{#if data.posts && data.posts.length > 0}
			<div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each data.posts as post}
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
		{:else}
			<div class="mb-16 rounded-xl bg-white p-12 text-center shadow-lg dark:bg-gray-800">
				<h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">No Posts Yet</h3>
				<p class="text-gray-600 dark:text-gray-300">Check back soon for updates!</p>
			</div>
		{/if}

		<!-- Subscribe Section -->
		<section class="rounded-xl bg-[#D1B17D] p-8 text-center shadow-lg">
			<h2 class="mb-4 text-2xl font-bold text-[#3E474C]" id="subscribe-heading">
				Subscribe for Updates
			</h2>
			<p class="mb-6 text-gray-700">Enter your email below to receive the latest news.</p>
			<form
				on:submit|preventDefault={validateEmail}
				class="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row"
			>
				<input
					type="email"
					bind:value={email}
					placeholder="Type your email…"
					aria-label="Email address"
					required
					class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
				/>
				<button type="submit" class="fun-button whitespace-nowrap">
					Subscribe
					<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						></path>
					</svg>
				</button>
			</form>
		</section>
	</div>
</div>