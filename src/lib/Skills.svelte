<script>
	import { fly } from 'svelte/transition';
	import Edu from '$lib/Skills/Edu.svelte';
	import Skills from '$lib/Skills/Skills.svelte';
	import Certs from '$lib/Skills/Certs.svelte';
	import Tech from '$lib/Skills/Tech.svelte';


	let current = 'edu';
</script>

<section
	class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-screen scroll-mt-4"
	id="kwalifikacje"
>
	<div class="mt-10 mb-2 r">
		<p class="text-2xl mb-1">Poznaj moje umiejętności</p>
		<h2 class="text-7xl text-accent font-semibold">Kwalifikacje</h2>
	</div>
	<div class="flex flex-row gap-4 mb-4 text-lg">
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg"
			class:current={'edu' === current}
			on:click={() => (current = 'edu')}
		>
			<p>Edukacja</p>
		</button>
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg"
			class:current={'skills' === current}
			on:click={() => (current = 'skills')}
		>
			<p>Umiejętności</p>
		</button>
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg"
			class:current={'cert' === current}
			on:click={() => (current = 'cert')}
		>
			<p>Certyfikaty</p>
		</button>
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg"
			class:current={'tech' === current}
			on:click={() => (current = 'tech')}
		>
			<p>Technologie</p>
		</button>
		<button
			class="px-6 py-3 bg-secondary text-neutral rounded-lg shadow-lg"
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
		<article class="grid grid-cols-1 gap-6" in:fly={{ x: 80, duration: 600 }}>
			<div class="bg-secondary p-6 rounded-lg shadow-lg">
				<h3 class="text-3xl font-bold mb-2">Sieci komputerowe</h3>
				<p class="text-lg mb-2">
					Posiadam umiejętności w zakresie projektowania, konfiguracji i zarządzania sieciami
					komputerowymi. Ukończyłem kursy Cisco CCNA i CCNP, co pozwala mi na efektywne zarządzanie
					infrastrukturą sieciową.
				</p>
				<ul class="list-disc pl-5">
					<li>Projektowanie sieci LAN i WAN</li>
					<li>Konfiguracja routerów i przełączników</li>
					<li>Zarządzanie sieciami bezprzewodowymi</li>
					<li>Monitorowanie i optymalizacja wydajności sieci</li>
					<li>Rozwiązywanie problemów sieciowych</li>
				</ul>
			</div>
			<div class="bg-secondary p-6 rounded-lg shadow-lg">
				<h3 class="text-3xl font-bold mb-2">Cyberbezpieczeństwo</h3>
				<p class="text-lg mb-2">
					Znam się na zabezpieczaniu systemów komputerowych przed zagrożeniami. Ukończyłem kursy
					Cisco Network Security, co pozwala mi na skuteczne zabezpieczanie sieci i systemów.
				</p>
				<ul class="list-disc pl-5">
					<li>Analiza ryzyka i zarządzanie bezpieczeństwem</li>
					<li>Implementacja polityk bezpieczeństwa</li>
					<li>Monitorowanie i reagowanie na incydenty bezpieczeństwa</li>
					<li>Testowanie penetracyjne i audyty bezpieczeństwa</li>
					<li>Zarządzanie dostępem i uwierzytelnianiem</li>
				</ul>
			</div>
			<div class="bg-secondary p-6 rounded-lg shadow-lg">
				<h3 class="text-3xl font-bold mb-2">Full-stack Web Development</h3>
				<p class="text-lg mb-2">
					Posiadam umiejętności w zakresie tworzenia aplikacji webowych zarówno po stronie klienta,
					jak i serwera. Znam się na HTML, CSS, JavaScript oraz frameworkach takich jak React i
					Node.js.
				</p>

				<ul class="list-disc pl-5">
					<li>Tworzenie responsywnych interfejsów użytkownika</li>
					<li>Programowanie aplikacji webowych w JavaScript</li>
					<li>Integracja z bazami danych (SQL, NoSQL)</li>
					<li>Implementacja API i usług webowych</li>
					<li>Testowanie i debugowanie aplikacji webowych</li>
				</ul>
			</div>
		</article>
	{/if}
</section>

<style lang="postcss">
	.current {
		background-color: var(--color-accent);
	}
</style>
