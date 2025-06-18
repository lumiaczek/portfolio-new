<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/UI/Button.svelte';
	import { faArrowUpRightFromSquare, faGear } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';

	let authorization = true;
	let authStatus = 'pending';

	onMount(async () => {
		const token = localStorage.getItem('token');
		if (!token) {
			authorization = false;
			authStatus = 'error';
			return;
		}
		const response = await fetch('/auth/verify', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		if (response.ok) {
			const data = await response.json();
			if (data.success) {
				authorization = false;
				authStatus = 'success';
			} else {
				authorization = true;
				authStatus = 'error';
			}
		} else {
			authorization = true;
			authStatus = 'error';
		}
	});
</script>

<main>
	{#if authorization}
		<div class="fixed top-0 left-0 z-50 bg-black/50 w-full h-full flex items-center justify-center">
			<div class="bg-secondary p-8 rounded-lg shadow-lg text-center">
				<h1 class="text-3xl font-bungee mb-2 text-accent">Trwa autoryzacja</h1>
				<p class="text-lg">Proszę czekać...</p>
				<Fa icon={faGear} class="text-center text-4xl mx-auto mt-4 animate-spin" />
			</div>
		</div>
	{/if}

	{#if authStatus === 'error'}
		<div class="fixed top-0 left-0 z-50 bg-black/50 w-full h-full flex items-center justify-center">
			<div class="bg-secondary p-8 rounded-lg shadow-lg text-center">
				<h1 class="text-2xl font-bungee mb-2 text-accent">Autoryzacja nie powiodła się</h1>
				<p class="text-lg mb-4">Kliknij przycisk aby wrócić na stronę logowania</p>
				<Button
					icon={faArrowUpRightFromSquare}
					clazz="mx-auto"
					on:click={() => {
						goto('/auth');
					}}>Wróć do logowania</Button
				>
			</div>
		</div>
	{/if}
</main>

<slot />
