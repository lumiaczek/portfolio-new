<script lang="ts">
	import Fa from 'svelte-fa';
	import type { PageData } from './$types';
	import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
	import Toast from '$lib/UI/Toast.svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import Button from '$lib/UI/Button.svelte';

	export let data: PageData;

	$: posts = data.posts;

	let toast = false;
	let toastType = 'null';
	let failReason = 'empty';
	let removalPostId = '';

	let removePostModal = false;

	const showToast = (status: string) => {
		toastType = status;

		toast = true;
		setTimeout(() => {
			toast = false;
		}, 3000);
	};

	const removePost = async (id: string) => {
		const response = await fetch(`/admin/blog?id=${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			posts = posts.filter((post: any) => post.id !== id);
			invalidateAll();
			showToast('success');
		} else {
			showToast('error');
			failReason = '';
		}
	};

	const closeModal = () => {
		removePostModal = false;
	};

	const openDeleteConfirmation = (id: string) => {
		removalPostId = id;
		removePostModal = true;
	};
</script>

<svelte:head>
	<title>Daniel Borowski | Zarządzanie blogiem</title>
</svelte:head>

<main class="max-w-7xl mx-auto px-6 pt-6">
	<div>
		<Button
			type="solid"
			icon={faPenToSquare}
			on:click={() => {
				goto('/admin/blog-cms/create');
			}}>Dodaj artykuł</Button
		>
	</div>
	<div class="grid grid-cols-1 gap-4 mt-4">
		{#if posts === undefined}
			<p class="text-center text-3xl text-gray-300 mt-8">Brak artykułów.</p>
		{/if}

		{#each posts as post (post.id)}
			<div
				class="shadow-lg rounded-lg bg-secondary flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 relative"
			>
				<div class="p-6">
					<h3 class="text-2xl font-semibold">{post.title}</h3>
					<p class="font-light text-sm">{post.date}</p>
					<p class="text-base font-light text-muted mb-4">
						{post.description}
					</p>
				</div>

				{#if post.published}
					<p
						class="absolute bottom-3 right-2 bg-accent/80 text-white text-xs px-2.5 py-0.5 rounded-lg shadow-lg"
					>
						Opublikowane
					</p>
				{:else}
					<p
						class="absolute bottom-3 right-2 bg-red-400/80 text-white text-xs px-2.5 py-0.5 rounded-lg shadow-lg"
					>
						Wersja robocza
					</p>
				{/if}

				<div>
					<p
						class="absolute bottom-3 left-6 bg-gray-500 text-white text-xs px-2.5 py-0.5 rounded-lg shadow-lg"
					>
						ID: {post.id}
					</p>
				</div>
				<div class="absolute top-3 right-3 flex flex-row gap-2">
					<button
						class="cursor-pointer flex flex-col justify-center items-center w-fit bg-blue-400/80 rounded-lg shadow-lg p-2.5 hover:bg-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-blue-500 focus:text-neutral"
						on:click={() => {
							goto(`/admin/blog-cms/create?id=${post.id}`);
						}}
					>
						<Fa icon={faPenToSquare} class="text-neutral text-xl" />
					</button>
					<button
						class="cursor-pointer flex flex-col justify-center items-center w-fit bg-red-400/80 rounded-lg shadow-lg p-2.5 hover:bg-red-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-red-500 focus:text-neutral"
						on:click={async () => {
							openDeleteConfirmation(post.id);
						}}
					>
						<Fa icon={faTrashCan} class="text-neutral text-xl" />
					</button>
				</div>
			</div>
		{/each}
	</div>

	{#if removePostModal}
		<div class="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50">
			<div class="bg-secondary rounded-lg shadow-lg p-6 w-11/12 max-w-md">
				<h2 class="text-xl font-semibold mb-4 text-center">Potwierdzenie usunięcia</h2>
				<p class="mb-6 font-light text-center">Czy na pewno chcesz usunąć ten artykuł?</p>
				<div class="flex justify-center items-center space-x-4">
					<Button
						type="solid-danger"
						on:click={() => {
							removePostModal = false;
							removePost(removalPostId);
						}}>Usuń</Button
					>
					<button on:click={closeModal} class="hover:underline underline-offset-2 cursor-pointer"
						>Anuluj</button
					>
				</div>
			</div>
		</div>
	{/if}

	{#if toast && toastType !== 'null'}
		<Toast type={toastType}>
			{#if toastType === 'success'}
				Pomyślnie usunięto artykuł.
			{:else if toastType === 'error' && failReason === ''}
				Wystąpił błąd podczas usuwania artykułu.
			{/if}
		</Toast>
	{/if}
</main>
