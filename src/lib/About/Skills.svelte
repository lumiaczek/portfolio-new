<script>
	import Edu from '$lib/Skills/Edu.svelte';
	import Skills from '$lib/Skills/Skills.svelte';
	import Certs from '$lib/Skills/Certs.svelte';
	import Tech from '$lib/Skills/Tech.svelte';
	import Exp from '$lib/Skills/Exp.svelte';

	let current = 'edu';
</script>

<section
	class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen scroll-mt-4"
	id="kwalifikacje"
>
	<div class="mt-10 mb-2 r">
		<p class="text-2xl mb-1">Poznaj moje umiejętności</p>
		<h2 class="text-7xl text-accent font-semibold">Kwalifikacje</h2>
	</div>
	<div class="flex flex-row gap-4 mb-4 text-lg">
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg hover:bg-accent/50
    transition duration-200"
			class:current={'edu' === current}
			on:click={() => (current = 'edu')}
		>
			<p>Edukacja</p>
		</button>
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg hover:bg-accent/50
    		transition duration-200"
			class:current={'skills' === current}
			on:click={() => (current = 'skills')}
		>
			<p>Umiejętności</p>
		</button>
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg hover:bg-accent/50
    transition duration-200"
			class:current={'cert' === current}
			on:click={() => (current = 'cert')}
		>
			<p>Certyfikaty</p>
		</button>
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg hover:bg-accent/50
    transition duration-200"
			class:current={'tech' === current}
			on:click={() => (current = 'tech')}
		>
			<p>Technologie</p>
		</button>
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg hover:bg-accent/50
    transition duration-200"
			class:current={'exp' === current}
			on:click={() => (current = 'exp')}
		>
			<p>Doświadczenie</p>
		</button>
	</div>
	{#if current === 'edu'}
		<Edu />
	{:else if current === 'skills'}
		<Skills />
	{:else if current === 'cert'}
		<Certs />
	{:else if current === 'tech'}
		<Tech />
	{:else if current === 'exp'}
		<Exp />
	{/if}
</section>

<style lang="postcss">
	.current {
		background-color: var(--color-accent);
	}
</style>
