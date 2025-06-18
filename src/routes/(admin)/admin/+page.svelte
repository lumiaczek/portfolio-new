<script lang="ts">
	import Button from '$lib/UI/Button.svelte';
	import { faBars, faRightFromBracket, faTrash } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Toast from '$lib/UI/Toast.svelte';

	let mails: any[] = [];

	let toast = false;
	let toastType = 'null';
	let failReason = 'empty';

	const showToast = (status: string) => {
		toastType = status;

		toast = true;
		setTimeout(() => {
			toast = false;
		}, 3000);
	};

	onMount(async () => {
		const response = await fetch('/admin/mails');
		if (response.ok) {
			const data = await response.json();
			if (data && typeof data === 'object' && !Array.isArray(data)) {
				mails = Object.entries(data)
					.map(([id, mail]) => ({ id, ...(typeof mail === 'object' && mail !== null ? mail : {}) }))
					.reverse(); // najnowsze na górze
			} else {
				mails = Array.isArray(data) ? data.slice().reverse() : data;
			}
		} else {
			console.error('Failed to fetch mails');
		}
	});

	const removeMail = async (id: string) => {
		const response = await fetch(`/admin/mails?id=${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			mails = mails.filter((mail) => mail.id !== id);

			showToast('success');
		} else {
			showToast('error');
			failReason = '';
		}
	};

	let navbarVisible = false;

	const toggleMenu = () => {
		navbarVisible = !navbarVisible;
	};
</script>

<svelte:head>
	<title>Daniel Borowski | Panel administratora</title>
</svelte:head>

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

<main class="max-w-7xl mx-auto p-6">
	<nav>
		<div
			class="flex items-center justify-between p-4 max-w-7xl mx-auto rounded-lg shadow-lg bg-secondary mt-4"
		>
			<div class="flex items-center justify-between w-full">
				<a
					href="/admin"
					class=" text-neutral text-xl hover:text-gray-300 flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition-all duration-200"
				>
					<b class="text-neutral">Panel Admina</b>
				</a>
				<button
					aria-label="Wyloguj się"
					class="p-2.5 bg-red-400/80 rounded-lg shadow-lg hover:bg-red-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-red-500 focus:text-neutral"
				>
					<Fa
						icon={faRightFromBracket}
						class="text-neutral text-xl hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-accent"
						on:click={() => {}}
					/>
				</button>
			</div>
		</div>
	</nav>

	{#if mails.length === 0}
		<p class="text-center text-3xl text-gray-300 mt-8">Brak wiadomości do wyświetlenia.</p>
	{/if}

	{#each mails as mail (mail.id)}
		<div class="bg-secondary p-4 mb-4 mt-4 rounded-lg shadow-lg relative">
			<div>
				<h3 class="text-2xl font-bold">
					{#if mail.service === 'it'}
						<b class="text-accent">Usługi Informatyczne</b>
					{:else if mail.service === 'network'}
						<b class="text-accent">Projektowanie i instalacja sieci komputerowych</b>
					{:else if mail.service === 'web'}
						<b class="text-accent">Tworzenie stron Internetowych</b>
					{:else if mail.service === 'other'}
						<b class="text-accent">Inne</b>
					{:else}
						<b class="text-accent">Nieznane</b>
					{/if}
					- {mail.name || mail.imie}
				</h3>
				<p class="text-xs text-gray-400 mb-1">ID: {mail.id}</p>
				<p class="text-sm mb-2 text-gray-500">
					Otrzymano: {mail.date}
				</p>
				<p class="text-base mb-1"><strong>Email:</strong> {mail.email || mail.mail}</p>
				<p class="font-light mb-2">{mail.message || mail.wiadomosc}</p>
			</div>
			<button
				class="absolute cursor-pointer top-2 right-2 flex flex-col justify-center items-center w-fit bg-red-400/80 rounded-lg shadow-lg p-2.5 hover:bg-red-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-red-500 focus:text-neutral"
				on:click={async () => {
					removeMail(mail.id);
				}}
			>
				<Fa icon={faTrash} class="text-neutral text-xl" />
			</button>
		</div>
	{/each}

	{#if toast && toastType !== 'null'}
		<Toast type={toastType}>
			{#if toastType === 'success'}
				Pomyślnie usunięto wiadomość.
			{:else if toastType === 'error' && failReason === ''}
				Wystąpił błąd podczas usuwania wiadomości.
			{/if}
		</Toast>
	{/if}
</main>
