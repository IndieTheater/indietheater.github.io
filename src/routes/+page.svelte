<script>
  import { Film, Users } from 'lucide-svelte';
  export let toggleTheme;
</script>

<svelte:head>
  <title>IndieTheater</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[60vh] min-w-[100vh] flex items-center justify-center">
  <!-- Background Image with Overlay -->
  <div class="absolute inset-0 z-0">
    <img 
      src="/assets/indie-animation.jpg" 
      alt="Indie Animation Background" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
  </div>
  
  <!-- Hero Content -->
  <div class="relative z-10 text-center max-w-4xl mx-auto px-6">
    <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
      <span class="block">
        IndieTheater
      </span>
    </h1>
    <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
      Discover your next favorite indie animation show and learn about the creators behind them!
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/show" class="hero-button primary">
        <Film class="w-5 h-5 mr-2" />
        Explore Shows
      </a>
      <a href="/creator" class="hero-button secondary">
        <Users class="w-5 h-5 mr-2" />
        Meet Creators
      </a>
    </div>
  </div>
</section>

<!-- Featured Shows Section -->
<section class="py-16 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Shows</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Some of the featured shows on IndieTheater.
      </p>
    </div>

    <!-- for now hardcode, later make dynamic -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <!-- Murder Drones -->
      <div class="featured-card feature-hover-group">
        <div class="aspect-video overflow-hidden rounded-t-xl">
          <img 
            src="/assets/shows/murder-drones.webp" 
            alt="Murder Drones" 
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-b-xl">
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Murder Drones</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Sci-Fi • Horror • Dark Comedy</p>
          <a href="/show/murder-drones" class="featured-link">Watch Now →</a>
        </div>
      </div>

      <!-- Hazbin Hotel -->
      <div class="featured-card feature-hover-group">
        <div class="aspect-video overflow-hidden rounded-t-xl">
          <img 
            src="/assets/shows/hazbin-hotel.png" 
            alt="Hazbin Hotel" 
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-b-xl">
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Hazbin Hotel</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Musical • Comedy • Adult Animation</p>
          <a href="/show/hazbin-hotel" class="featured-link">Watch Now →</a>
        </div>
      </div>

      <!-- Lackadaisy -->
      <div class="featured-card feature-hover-group">
        <div class="aspect-video overflow-hidden rounded-t-xl">
          <img 
            src="/assets/shows/lackadaisy.png" 
            alt="Lackadaisy" 
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-b-xl">
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Lackadaisy</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Period Drama • Comedy • Crime</p>
          <a href="/show/lackadaisy" class="featured-link">Watch Now →</a>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a href="/show" class="inline-flex items-center px-8 py-3 bg-[#316354] text-white font-semibold rounded-full hover:bg-[#2a5447] transition-colors">
        View All Shows
        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
