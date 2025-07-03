<script>
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import "../app.css";

  onMount(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  });

  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }
</script>

<Header {toggleTheme} />

<main class="container mx-auto p-4 min-h-[calc(100vh-8rem)]">
  <slot />
</main>

<Footer />
