<script lang="ts">
  import { onMount } from 'svelte';

  let isDark = false;

  onMount(() => {
    isDark = localStorage.theme === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  });

  function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }
  export { toggleTheme };
</script>

<nav class="navbar">
  <div class="navbar-inner">
    <a href="/" class="navbar-logo">IndieTheater</a>
    <div class="navbar-links">
      <a href="/">Home</a>
      <a href="/show">Shows</a>
      <a href="/creator">Creators</a>
      <a href="/news">News</a>
      <a href="/about">About</a>
    </div>
    <button 
      class="theme-toggle-btn" 
      aria-label="Toggle theme" 
      on:click={toggleTheme}
    >
      {#if isDark}
        ☀️
      {:else}
        🌙
      {/if}
    </button>
  </div>
</nav>
