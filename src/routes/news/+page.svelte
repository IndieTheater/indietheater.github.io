<script>
  let email = "";

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Thank you for subscribing!");
  }
</script>

<!-- Header and Nav are assumed to be in a layout already -->

<main class="flex-1 max-w-7xl mx-auto px-4 py-12">
  <section class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <article class="bg-[#D1B17D] rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1">
      <img src="/assets/ep8.jpg" alt="Murder Drones Episode 8 Thumbnail" class="rounded-lg mb-4" />
      <h3 class="text-xl font-semibold text-[#3E474C] mb-2">
        <a href="/2024/08/22/one-day-until-murder-drones-episode-8.html" class="hover:text-[#70AD95] transition">
          One Day until Murder Drones Episode 8!!
        </a>
      </h3>
      <time datetime="2024-08-22T15:45:32-06:00" class="text-sm text-gray-700">August 22, 2024</time>
    </article>
    <!-- More blog-posts go here -->
    <!-- make dynamic soon -->
  </section>

  <section class="text-center mt-16 bg-[#D1B17D] rounded-xl p-8 shadow-lg">
    <h2 class="text-2xl font-bold text-[#3E474C] mb-4" id="subscribe-heading">Subscribe</h2>
    <p class="mb-6">Enter your email below to receive updates.</p>
    <form on:submit|preventDefault={validateEmail} class="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
      <input
        type="email"
        bind:value={email}
        placeholder="Type your email…"
        aria-label="Email address"
        required
        class="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white w-full"
      />
      <button type="submit" class="fun-button">
        Subscribe <i class="fas fa-envelope ml-2"></i>
      </button>
    </form>
  </section>
</main>
