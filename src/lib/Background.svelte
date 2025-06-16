<script>
	const binaries = [
		{
			text: '1010',
			class: 'left-1/4 top-1/3 text-6xl text-accent opacity-20 animate-float-slower hidden sm:block'
		},
		{
			text: '01101',
			class: 'right-1/4 top-1/2 text-5xl text-teal-200 opacity-15 animate-float-slower '
		},
		{
			text: '1101',
			class:
				'left-1/3 bottom-1/4 text-7xl text-accent opacity-10 animate-float-slower hidden sm:block'
		},
		{
			text: '1001',
			class:
				'right-1/3 bottom-1/3 text-4xl text-teal-100 opacity-20 animate-float-slower hidden sm:block'
		},
		{
			text: '0110',
			class: 'left-1/2 top-1/4 text-6xl text-accent opacity-10 animate-float-slower hidden sm:block'
		},
		{
			text: '111',
			class: 'left-1/5 top-2/3 text-3xl text-accent opacity-15 animate-float-slower hidden sm:block'
		},
		{
			text: '10111',
			class: 'right-1/5 bottom-1/5 text-5xl text-teal-100 opacity-10 animate-float-slower'
		},
		{
			text: '100',
			class:
				'left-1/6 bottom-1/6 text-4xl text-accent opacity-20 animate-float-slower hidden sm:block'
		},
		{
			text: '11001',
			class: 'right-1/6 top-1/6 text-6xl text-teal-200 opacity-15 animate-float-slower '
		},
		{ text: '010', class: 'left-1/3 top-1/5 text-3xl text-accent opacity-10 animate-float-slower' }
	];
	binaries.push(
		{
			text: '00101',
			class: 'left-1/8 top-1/8 text-4xl text-accent opacity-10 animate-float-slowerer'
		},
		{
			text: '11100',
			class:
				'right-1/8 bottom-1/8 text-5xl text-teal-100 opacity-15 animate-float-slowerer hidden sm:block'
		},
		{
			text: '0101',
			class: 'left-1/7 bottom-1/3 text-3xl text-accent opacity-20 animate-float-slowerer'
		},
		{
			text: '1010',
			class: 'right-1/7 top-1/3 text-4xl text-teal-200 opacity-10 float-slower hidden sm:block'
		},
		{
			text: '001',
			class: 'left-1/5 top-1/8 text-2xl text-accent opacity-15 float-slower hidden sm:block'
		},
		{
			text: '1111',
			class: 'right-1/5 bottom-1/7 text-3xl text-teal-100 opacity-20 float-slower'
		},
		{
			text: '00011',
			class: 'left-1/4 bottom-1/8 text-5xl text-accent opacity-10 float-slower'
		},
		{
			text: '10101',
			class: 'right-1/4 top-1/8 text-4xl text-accent opacity-15 float-slower'
		}
	);
</script>

<div class="fixed inset-0 pointer-events-none overflow-hidden">
	{#each binaries as bin}
		<div class="absolute select-none {bin.class}">
			{bin.text}
		</div>
	{/each}
</div>

<style>
	@keyframes float-slower {
		0% {
			transform: translateY(0) scale(1) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) scale(1.03) rotate(1deg);
		}
		100% {
			transform: translateY(0) scale(1) rotate(0deg);
		}
	}
	.animate-float-slowerer {
		animation: float-slower 13s ease-in-out infinite;
	}
</style>
