<script>
  import { onMount } from 'svelte';
  import Fuse from 'fuse.js';
  let query = '';
  let results = [];
  let fuse;
  onMount(async () => {
    const res = await fetch('/search-index.json');
    const list = await res.json();
    fuse = new Fuse(list, { keys: ['title', 'tags'] });
  });
  function handleInput() {
    results  = query.length > 2 ? fuse.search(query).map(r => r.item) : [];
  }
</script>
<div class="relative">
  <input bind:value={query} on:input={handleInput} placeholder="Search..." class="border p-2 w-full" />
  {#if results.length}
    <ul class="absolute bg-white dark:bg-gray-800 border mt-1 w-full max-h-64 overflow-auto">
      {#each results as item}
        <li class="p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
          <a href={item.url}>{item.title}</a>
        </li>
      {/each}
    </ul>
  {/if}
</div>
