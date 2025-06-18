<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/UI/Button.svelte';
	import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

	let login: string;
	let password: string;

	const submit = async () => {
		const body = JSON.stringify({ login, password });
		const response = await fetch('/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body
		});

		if (response.ok) {
			const data = await response.json();
			localStorage.setItem('token', data.token);
			goto('/admin');
		} else {
			alert('Wystąpił błąd podczas logowania');
		}
	};
</script>

<svelte:head>
	<title>Daniel Borowski | Logowanie</title>
</svelte:head>

<main class="h-[90vh] max-w-7xl mx-auto flex items-center justify-center">
	<div
		class="flex flex-col items-center justify-center bg-secondary/70 px-8 py-8 rounded-lg shadow-lg m-4"
	>
		<h1 class="text-3xl font-bungee mb-4">Zaloguj się</h1>
		<form class="flex flex-col" method="POST" on:submit|preventDefault>
			<label for="login" class="text-lg">Login</label>
			<input
				bind:value={login}
				type="text"
				name="login"
				class="text-primary text-base p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
				required
			/>
			<label for="password" class="text-lg">Hasło</label>
			<input
				bind:value={password}
				type="password"
				name="password"
				class="text-primary text-base p-2.5 rounded-lg bg-neutral mb-8 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
				required
			/>

			<Button icon={faLockOpen} clazz="w-full" on:click={submit}>Zaloguj się</Button>
		</form>
	</div>
</main>
