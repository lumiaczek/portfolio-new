<script lang="ts">
	import Toast from '$lib/UI/Toast.svelte';

	let toast = false;
	let toastType = 'null';
	let failReason = 'empty';

	const showToast = (status: string) => {
		toastType = status;

		toast = true;
		setTimeout(() => {
			toast = false;
		}, 2000);
	};

	const zeroCounter = async () => {
		const response = await fetch(`/admin/views`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			showToast('success');
			setTimeout(() => {
				location.reload();
			}, 2000);
		} else {
			showToast('error');
			failReason = '';
		}
	};
</script>

<main class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
	<section class="mb-8 bg-secondary/70 p-6 rounded-lg shadow-lg">
		<h2 class="text-2xl font-semibold mb-2">Zarządzanie licznikiem</h2>
		<p class="mb-4 font-light">
			Kliknij przycisk poniżej, aby zresetować licznik odwiedziń do zera.
		</p>
		<button
			class="px-4 py-2 bg-red-400/80 text-white rounded hover:bg-red-500 transition"
			on:click={zeroCounter}
		>
			Wyzeruj licznik
		</button>
	</section>

	<section class="mb-8 bg-secondary/70 p-6 rounded-lg shadow-lg"></section>

	{#if toast}
		<Toast type={toastType}>Wyzerowano licznik odwiedziń</Toast>
	{/if}
</main>
