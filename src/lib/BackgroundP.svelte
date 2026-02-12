<script>
	const hearts = [
		{
			text: '❤',
			class: 'left-1/4 top-1/3 text-6xl opacity-20 animate-float-slower hidden sm:block'
		},
		{
			text: '❤',
			class: 'right-1/4 top-1/2 text-5xl opacity-15 animate-float-slower'
		},
		{
			text: '❤',
			class: 'left-1/3 bottom-1/4 text-7xl opacity-10 animate-float-slower hidden sm:block'
		},
		{
			text: '❤',
			class: 'right-1/3 bottom-1/3 text-4xl opacity-20 animate-float-slower hidden sm:block'
		},
		{
			text: '❤',
			class: 'left-1/2 top-1/4 text-6xl opacity-10 animate-float-slower hidden sm:block'
		},
		{
			text: '❤',
			class: 'left-1/5 top-2/3 text-3xl opacity-15 animate-float-slower hidden sm:block'
		},
		{
			text: '❤',
			class: 'right-1/5 bottom-1/5 text-5xl opacity-10 animate-float-slower'
		},
		{
			text: '❤',
			class: 'left-1/6 bottom-1/6 text-4xl opacity-20 animate-float-slower hidden sm:block'
		},
		{
			text: '❤',
			class: 'right-1/6 top-1/6 text-6xl opacity-15 animate-float-slower'
		},
		{
			text: '❤',
			class: 'left-1/3 top-1/5 text-3xl opacity-10 animate-float-slower'
		},
		{
			text: '❤',
			class: 'left-1/8 top-1/8 text-4xl opacity-10 animate-float-slowerer'
		},
		{
			text: '❤',
			class: 'right-1/8 bottom-1/8 text-5xl opacity-15 animate-float-slowerer hidden sm:block'
		},
		{
			text: '❤',
			class: 'left-1/7 bottom-1/3 text-3xl opacity-20 animate-float-slowerer'
		},
		{
			text: '❤',
			class: 'right-1/7 top-1/3 text-4xl opacity-10 float-slower hidden sm:block'
		},
		{
			text: '❤',
			class: 'left-1/5 top-1/8 text-2xl opacity-15 float-slower hidden sm:block'
		},
		{
			text: '❤',
			class: 'right-1/5 bottom-1/7 text-3xl opacity-20 float-slower'
		},
		{
			text: '❤',
			class: 'left-1/4 bottom-1/8 text-5xl opacity-10 float-slower'
		},
		{
			text: '❤',
			class: 'right-1/4 top-1/8 text-4xl opacity-15 float-slower'
		}
	];
</script>

<div class="fixed inset-0 pointer-events-none overflow-hidden">
	{#each hearts as heart}
		<div class="absolute select-none heart-color {heart.class}">
			{heart.text}
		</div>
	{/each}
</div>

<style>
	/* Kolor zdefiniowany w CSS, aby łatwo go zmienić w jednym miejscu */
	.heart-color {
		color: #e63946;
	}

	/* Standardowa animacja */
	@keyframes float-slower {
		0% {
			transform: translateY(0) scale(1) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) scale(1.1) rotate(5deg);
		} /* Dodałem lekkie powiększenie serca */
		100% {
			transform: translateY(0) scale(1) rotate(0deg);
		}
	}

	.animate-float-slower {
		animation: float-slower 8s ease-in-out infinite;
	}

	/* Wolniejsza wersja dla różnorodności */
	.animate-float-slowerer {
		animation: float-slower 13s ease-in-out infinite;
	}

	/* Klasa używana w oryginalnym kodzie jako 'float-slower' bez prefixu animate */
	.float-slower {
		animation: float-slower 10s ease-in-out infinite;
	}
</style>
