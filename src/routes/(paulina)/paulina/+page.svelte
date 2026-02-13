<script lang="ts">
	import { mount, onMount } from 'svelte';
	import BackgroundP from '$lib/BackgroundP.svelte';
	import { fade } from 'svelte/transition';

	let targetDate = new Date(new Date().getFullYear(), 1, 14, 8, 0, 0);

	if (new Date() > targetDate) {
		targetDate.setFullYear(targetDate.getFullYear() + 1);
	}

	let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
	let isTimeUp = false;
	let mounted = false;

	function updateTimer() {
		const now = new Date();
		const diff = targetDate.getTime() - now.getTime();

		if (diff <= 0) {
			isTimeUp = true;
			return;
		}

		timeLeft = {
			days: Math.floor(diff / (1000 * 60 * 60 * 24)),
			hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((diff / 1000 / 60) % 60),
			seconds: Math.floor((diff / 1000) % 60)
		};
	}

	onMount(() => {
		updateTimer();
		mounted = true;

		const interval = setInterval(() => {
			updateTimer();
			if (isTimeUp) clearInterval(interval);
		}, 1000);

		return () => clearInterval(interval);
	});

	const pad = (num: number) => num.toString().padStart(2, '0');
</script>

<svelte:head>
	<title>❤️ Walentynki dla mojej Paulinki</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Nunito:wght@300;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="max-w-7xl mb-8 mx-auto px-4 min-h-[50vh] sm:px-6 lg:px-8 scroll-m-24">
	<div class="flex flex-col items-center mt-8 sm:mt-20 mb-4">
		<p class="text-xl sm:text-xl mb-1">Skoro tak bardzo chciałaś stronę</p>
		<h2 class="text-4xl md:text-7xl text-[#e63946] font-semibold">To proszę bardzo ❤️</h2>

		{#if !mounted}
			<p>Ładowanie...</p>
		{:else if isTimeUp}
			<div
				in:fade={{ duration: 1000 }}
				class="relative z-10 flex flex-col items-center justify-center p-4 mt-8"
			>
				<div
					class="
            max-w-2xl w-full
            
            rounded-3xl p-8 md:p-12
            text-center text-white
        "
				>
					<p class=" text-lg md:text-xl text-gray-300 mb-4 font-light">To już prawie 5 lat razem</p>

					<div class="space-y-2 text-base md:text-lg leading-relaxed text-gray-100">
						<p>Wiele razem przeżyliśmy i wiele jeszcze przed nami.</p>
						<p>Bywały wzloty i upadki, ale chcę, żebyś wiedziała że...</p>
					</div>

					<div class="my-4 transform hover:scale-105 transition-transform duration-500">
						<p class=" text-4xl md:text-5xl text-[#e63946] drop-shadow-lg">
							jesteś dla mnie najważniejsza <br /> i najwspanialsza.
						</p>
					</div>

					<div
						class=" text-sm md:text-base text-gray-400 italic mt-8 border-t border-white/10 pt-6"
					>
						<p class="mb-2">Wiem, że czasami ciężko to po mnie poznać.</p>
						<p class="text-white font-medium">
							Ale niezależnie od wszystkiego – pamiętaj, że zawsze tak jest.
						</p>
					</div>
					<div class="text-right mt-8">
						<p class="text-2xl font-light text-[#e63946]">Kocham Cię najmocniej na świecie ❤️</p>
						<p class="text-lg text-gray-400">Twój Daniel</p>
					</div>
				</div>
			</div>
		{:else}
			<div class="timer-wrapper">
				<h2 class="mt-8 lg:mt-20 text-center">Do Walentynek pozostało:</h2>
				<div class="timer">
					<div class="time-box">
						<span class="number">{pad(timeLeft.days)}</span>
						<span class="label">Dni</span>
					</div>
					<div class="separator">:</div>
					<div class="time-box">
						<span class="number">{pad(timeLeft.hours)}</span>
						<span class="label">Godz</span>
					</div>
					<div class="separator">:</div>
					<div class="time-box">
						<span class="number">{pad(timeLeft.minutes)}</span>
						<span class="label">Min</span>
					</div>
					<div class="separator">:</div>
					<div class="time-box">
						<span class="number">{pad(timeLeft.seconds)}</span>
						<span class="label">Sek</span>
					</div>
				</div>
			</div>
		{/if}
	</div>
</main>

<BackgroundP />

<style>
	.timer {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 2rem;
		margin-top: 20px;
	}

	.time-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.number {
		font-weight: bold;
		font-size: 3rem;
		color: #e63946;
	}

	.label {
		font-size: 0.8rem;
		text-transform: uppercase;
		color: #555;
	}

	.separator {
		font-size: 2rem;
		padding-bottom: 20px;
		color: #e63946;
	}
</style>
