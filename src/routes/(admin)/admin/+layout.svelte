<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/UI/Button.svelte';
	import {
		faArrowUpRightFromSquare,
		faBars,
		faGear,
		faRightFromBracket
	} from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { fly } from 'svelte/transition';

	let authorization = true;
	let authStatus = 'pending';
	let logoutToast = false;
	let v: number;
	let navbarVisible = false;

	const toggleMenu = () => {
		navbarVisible = !navbarVisible;
	};

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

		const responseV = await fetch('/admin/views');

		const views = await responseV.json();

		v = views || 0;
	});

	const showLogoutToast = (): Promise<void> => {
		return new Promise((resolve) => {
			logoutToast = true;
			setTimeout(() => {
				logoutToast = false;
				resolve();
			}, 2000);
		});
	};

	const logout = async () => {
		await showLogoutToast();
		localStorage.removeItem('token');
		goto('/auth');
	};
</script>

<nav>
	{#if authorization}
		<div
			class="fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-2xl w-full h-full flex items-center justify-center"
		>
			<div class="bg-secondary p-8 rounded-lg shadow-lg text-center">
				<h1 class="text-3xl font-bungee mb-2 text-accent">Trwa autoryzacja</h1>
				<p class="text-lg">Proszę czekać...</p>
				<Fa icon={faGear} class="text-center text-4xl mx-auto mt-4 animate-spin" />
			</div>
		</div>
	{/if}

	{#if authStatus === 'error'}
		<div
			class="fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-xl w-full h-full flex items-center justify-center"
		>
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
	<nav
		class="w-full px-4 sm:px-6 lg:px-8 bg-primary sticky z-50 top-0 left-0 border-b border-accent/50"
	>
		<div class="flex items-center justify-between h-20 max-w-7xl mx-auto">
			<div class="flex items-center justify-between w-full">
				<h1 class="text-xl md:text-3xl font-bold font-bungee">
					<a href="/" aria-label="Strona główna"><b class="text-accent">Daniel</b> Borowski</a>
				</h1>
				<button on:click={toggleMenu} aria-label="Otwórz menu" class="md:hidden">
					<Fa icon={faBars} class="text-2xl" />
				</button>
				<div class="ml-10 md:flex hidden md:flex-row items-baseline space-x-2 text-lg">
					<a
						href="/"
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">1.</b>
						<p>Strona główna</p>
					</a>
					<a
						href="/about"
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1"
					>
						<b class="text-accent">2.</b>
						<p>O mnie</p>
					</a>
					<a
						href="/about#kwalifikacje"
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">3.</b>
						<p>Kwalifikacje</p>
					</a>
					<a
						href="/cv"
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">4.</b>
						<p>CV</p>
					</a>
					<a
						href="/contact"
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">5.</b>
						<p>Kontakt</p>
					</a>
					<a
						href="/blog"
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">6.</b>
						<p>Blog</p>
					</a>
				</div>
			</div>
		</div>
		{#if navbarVisible}
			<div
				class="absolute right-0 z-50 flex h-screen w-3/4 flex-col space-y-2 bg-primary/85 p-4 text-right text-xl md:hidden"
				in:fly={{ x: 100, duration: 300 }}
				out:fly={{ x: 100, duration: 300 }}
			>
				<div class="flex flex-col items-end space-x-2 text-lg">
					<a
						href="/"
						on:click={() => (navbarVisible = false)}
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">1.</b>
						<p>Strona główna</p>
					</a>
					<a
						href="/about"
						on:click={() => (navbarVisible = false)}
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1"
					>
						<b class="text-accent">2.</b>
						<p>O mnie</p>
					</a>
					<a
						href="/about#kwalifikacje"
						on:click={() => (navbarVisible = false)}
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">3.</b>
						<p>Kwalifikacje</p>
					</a>
					<a
						href="/cv"
						on:click={() => (navbarVisible = false)}
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">4.</b>
						<p>CV</p>
					</a>
					<a
						href="/contact"
						on:click={() => (navbarVisible = false)}
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">5.</b>
						<p>Kontakt</p>
					</a>
					<a
						href="/blog"
						on:click={() => (navbarVisible = false)}
						data-sveltekit-reload
						class=" text-neutral hover:text-gray-300 flex mr-2 flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
					>
						<b class="text-accent">6.</b>
						<p>Blog</p>
					</a>
				</div>
			</div>
		{/if}
	</nav>
	<section class="max-w-7xl mx-auto py-4 px-6">
		<nav>
			<div
				class="flex items-center justify-between p-4 max-w-7xl mx-auto rounded-lg shadow-lg bg-secondary mt-4"
			>
				<div class="flex items-center justify-between w-full">
					<div class="flex flex-col lg:flex-row lg:items-center gap-2 text-lg">
						<a
							class="px-4 py-3 bg-secondary text-neutral rounded-lg hover:bg-accent/50 transition duration-200"
							class:current={'/admin' === $page.url.pathname}
							href="/admin"
						>
							Wiadomości
						</a>
						<a
							class="px-4 py-3 bg-secondary text-neutral rounded-lg hover:bg-accent/50 transition duration-200"
							class:current={'/admin/blog-cms' === $page.url.pathname}
							href="/admin/blog-cms"
						>
							Zarządzanie blogiem
						</a>
						<a
							class="px-4 py-3 bg-secondary text-neutral rounded-lg hover:bg-accent/50 transition duration-200"
							class:current={'/admin/settings' === $page.url.pathname}
							href="/admin/settings"
						>
							Ustawienia
						</a>
					</div>
					<button
						aria-label="Wyloguj się"
						class="p-2.5 bg-red-400/80 rounded-lg shadow-lg hover:bg-red-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-red-500 focus:text-neutral"
						on:click={async () => {
							await logout();
						}}
					>
						<Fa
							icon={faRightFromBracket}
							class="text-neutral text-xl hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-accent"
						/>
					</button>
				</div>
			</div>
		</nav>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
			<div class="flex items-center justify-between p-4 rounded-lg shadow-lg bg-secondary mt-4">
				<div class="flex items-center justify-between w-full">
					<p class="font-light text-neutral text-lg">Wejścia na stronę:</p>
					<p class="font-medium text-accent text-xl">{v}</p>
				</div>
			</div>
			<div class="flex items-center justify-between p-4 rounded-lg shadow-lg bg-secondary lg:mt-4">
				<div class="flex items-center justify-between w-full">
					<p class="font-light text-neutral text-lg">Wyświetleń na blogu:</p>
					<p class="font-medium text-accent text-xl">{v}</p>
				</div>
			</div>
			<div class="flex items-center justify-between p-4 rounded-lg shadow-lg bg-secondary lg:mt-4">
				<div class="flex items-center justify-between w-full">
					<p class="font-light text-neutral text-lg">Polubienia:</p>
					<p class="font-medium text-accent text-xl">{v}</p>
				</div>
			</div>
		</div>
	</section>

	{#if logoutToast}
		<main
			class="fixed top-0 left-0 z-50 backdrop-blur-2xl w-full h-full flex items-center justify-center"
		>
			<div class="bg-secondary p-8 rounded-lg shadow-lg text-center">
				<h1 class="text-3xl font-bungee mb-2 text-red-400/80">Wylogowywanie</h1>
				<p class="text-lg">Proszę czekać...</p>
				<Fa icon={faGear} class="text-center text-4xl mx-auto mt-4 animate-spin" />
			</div>
		</main>
	{/if}
</nav>

<slot />

<style lang="postcss">
	.current {
		background-color: var(--color-accent);
	}
</style>
