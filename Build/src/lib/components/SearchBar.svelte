<script>
	import { onMount } from 'svelte';
	import Fuse from 'fuse.js';
	let query = '';
	/**
	 * @type {string | any[]}
	 */
	let results = [];
	/**
	 * @type {Fuse<any>}
	 */
	let fuse;
	onMount(async () => {
		const res = await fetch('/search-index.json');
		const list = await res.json();
		fuse = new Fuse(list, { keys: ['title', 'tags'] });
	});
	function handleInput() {
		results =
			query.length > 2 ? fuse.search(query).map((/** @type {{ item: any; }} */ r) => r.item) : [];
	}
</script>

<div class="relative">
	<input
		bind:value={query}
		on:input={handleInput}
		placeholder="Search..."
		class="w-full border p-2"
	/>
	{#if results.length}
		<ul class="absolute mt-1 max-h-64 w-full overflow-auto border bg-white dark:bg-gray-800">
			{#each results as item}
				<li class="p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
					<a href={item.url}>{item.title}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
