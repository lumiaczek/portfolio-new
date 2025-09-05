<script lang="ts">
	import { faGear, faTrash } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

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
		try {
			const response = await fetch('/admin/mails');
			if (response.ok) {
				const data = await response.json();
				if (data === null) {
					mails = [];
					return;
				}
				if (data && typeof data === 'object' && !Array.isArray(data)) {
					mails = Object.entries(data)
						.map(([id, mail]) => ({
							id,
							...(typeof mail === 'object' && mail !== null ? mail : {})
						}))
						.reverse();
				} else {
					mails = Array.isArray(data) ? data.slice().reverse() : data;
				}
			} else {
				console.error('Failed to fetch mails');
			}
		} catch (error) {
			console.error('Error fetching mails:', error);
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
</script>

<svelte:head>
	<title>Daniel Borowski | Panel administratora</title>
</svelte:head>

<main class="max-w-7xl mx-auto p-6">
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
