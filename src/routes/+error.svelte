<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Button from '$lib/UI/Button.svelte';
</script>

<svelte:head>
	<title>Daniel Borowski | Błąd</title>
</svelte:head>

<main class="h-[90vh] max-w-7xl mx-auto flex items-center justify-center">
	<div
		class="flex flex-col items-center justify-center bg-secondary/70 px-8 py-8 rounded-lg shadow-lg m-4"
	>
		<h1
			class="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bungee bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-200 mb-4"
		>
			{page.status}
			{page.error?.message}
		</h1>
		<p class="text-xl text-center">Coś poszło nie tak.</p>
		<p class="text-base text-gray-300 mb-4 text-center">
			Jeżeli uważasz, że to wina strony, skontaktuj się ze mną.
		</p>
		<Button
			on:click={() => {
				goto('/');
			}}>Wróć na stronę główną</Button
		>
	</div>
</main>
