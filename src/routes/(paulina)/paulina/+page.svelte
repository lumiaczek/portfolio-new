<script lang="ts">
	import { mount, onMount } from 'svelte';
	import BackgroundP from '$lib/BackgroundP.svelte';

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
		updateTimer(); // Oblicz raz natychmiast po załadowaniu
		mounted = true; // Pokaż komponent

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
</svelte:head>

<main class="max-w-7xl mb-8 mx-auto px-4 min-h-[50vh] sm:px-6 lg:px-8 scroll-m-24">
	<div class="flex flex-col items-center mt-8 sm:mt-20 mb-4">
		<p class="text-xl sm:text-xl mb-1">Skoro tak bardzo chciałaś stronę</p>
		<h2 class="text-4xl md:text-7xl text-[#e63946] font-semibold">To proszę bardzo ❤️</h2>

		{#if !mounted}
			<p>Ładowanie...</p>
		{:else if isTimeUp}{:else}
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
