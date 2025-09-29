<script>
	let email = '';

	function validateEmail() {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!regex.test(email)) {
			alert('Please enter a valid email address.');
			return;
		}
		alert('Thank you for subscribing!');
	}
</script>

<main class="mx-auto max-w-7xl flex-1 px-4 py-12">
	<section class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
		<article
			class="rounded-xl bg-[#D1B17D] p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
		>
			<img src="/assets/ep8.jpg" alt="Murder Drones Episode 8 Thumbnail" class="mb-4 rounded-lg" />
			<h3 class="mb-2 text-xl font-semibold text-[#3E474C]">
				<a
					href="/2024/08/22/one-day-until-murder-drones-episode-8.html"
					class="transition hover:text-[#70AD95]"
				>
					One Day until Murder Drones Episode 8!!
				</a>
			</h3>
			<time datetime="2024-08-22T15:45:32-06:00" class="text-sm text-gray-700">August 22, 2024</time
			>
		</article>
		<!-- More blog-posts go here -->
		<!-- make dynamic soon -->
	</section>

	<section class="mt-16 rounded-xl bg-[#D1B17D] p-8 text-center shadow-lg">
		<h2 class="mb-4 text-2xl font-bold text-[#3E474C]" id="subscribe-heading">Subscribe</h2>
		<p class="mb-6">Enter your email below to receive updates.</p>
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
			<button type="submit" class="fun-button">
				Subscribe <i class="fas fa-envelope ml-2"></i>
			</button>
		</form>
	</section>
</main>
