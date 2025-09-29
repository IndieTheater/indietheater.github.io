<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { Home, Tv, User, Newspaper, Info } from 'lucide-svelte';

  let isDark = false;
  let mobileMenuOpen = false;

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

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  export { toggleTheme };

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/show', label: 'Shows', icon: Tv },
    { href: '/creator', label: 'Creators', icon: User },
    { href: '/news', label: 'News', icon: Newspaper },
    { href: '/about', label: 'About', icon: Info }
  ];
</script>

<nav class="enhanced-navbar">
  <div class="navbar-container">
    <!-- Logo -->
    <a href="/" class="navbar-logo-enhanced" style="display: flex; align-items: center; gap: 0.5rem;">
      <img 
        src="/assets/about-image.jpg" 
        alt="IndieTheater Logo" 
        style="height: 50px; width: 50px; border-radius: 10%;" 
      />
      <span>IndieTheater</span>
    </a>

    <!-- Desktop Navigation -->
    <div class="navbar-links-desktop">
      {#each navItems as item}
        <a 
          href={item.href} 
          class="nav-link {$page.url.pathname === item.href || ($page.url.pathname.startsWith(item.href + '/') && item.href !== '/') ? 'active' : ''}"
          aria-current={$page.url.pathname === item.href ? 'page' : undefined}
        >
          {#if item.icon}
            <svelte:component this={item.icon} class="w-5 h-5 mr-1 inline" />
          {/if}
          {item.label}
        </a>
      {/each}
    </div>

    <!-- Right Side Controls -->
    <div class="navbar-controls">
      <!-- Theme Toggle -->
      <button 
        class="theme-toggle-enhanced" 
        aria-label="Toggle theme" 
        on:click={toggleTheme}
      >
        {#if isDark}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        {:else}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        {/if}
      </button>

      <!-- Mobile Menu Button -->
      <button 
        class="mobile-menu-button md:hidden" 
        aria-label="Toggle menu"
        on:click={toggleMobileMenu}
      >
        {#if mobileMenuOpen}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="mobile-menu">
      {#each navItems as item}
        <a 
          href={item.href} 
          class="mobile-nav-link {$page.url.pathname === item.href || ($page.url.pathname.startsWith(item.href + '/') && item.href !== '/') ? 'active' : ''}"
          aria-current={$page.url.pathname === item.href ? 'page' : undefined}
          on:click={closeMobileMenu}
        >
          {#if item.icon}
            <svelte:component this={item.icon} class="w-5 h-5 mr-1 inline" />
          {/if}
          {item.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>
