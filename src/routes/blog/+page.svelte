<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/UI/Button.svelte';
</script>

<svelte:head>
	<title>Daniel Borowski | Blog</title>
</svelte:head>

<main class="h-[90vh] max-w-7xl mx-auto flex items-center justify-center">
	<div
		class="flex flex-col items-center justify-center bg-secondary/70 px-8 py-8 rounded-lg shadow-lg"
	>
		<h1
			class="text-7xl font-bungee bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-200 mb-4"
		>
			Work in progress
		</h1>
		<p class="text-xl">Tutaj kiedyś powstanie mój blog.</p>
		<p class="text-base text-gray-300 mb-4">
			Na razie nic tu nie ma, ale możesz wrócić na stronę główną lub skontaktować się ze mną, jeśli
			masz jakieś pytania.
		</p>
		<Button
			on:click={() => {
				goto('/');
			}}>Wróć na stronę główną</Button
		>
	</div>
</main>
