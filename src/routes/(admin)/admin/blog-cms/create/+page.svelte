<script lang="ts">
	import Button from '$lib/UI/Button.svelte';
	import { faSquareCheck, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
	import Editor from '@tinymce/tinymce-svelte';
	import type { PageData } from '../$types';
	import { goto } from '$app/navigation';

	let mode_title = 'Dodaj nowy artykuł';

	type PageData = {
		post: {
			id: string;
			title: string;
			description: string;
			content: string;
			published: boolean;
		};
		mode: 'create' | 'edit' | 'post-error';
		TINYMCE_API_KEY: string;
	};

	let content = '';
	let title = '';
	let description = '';
	let published = false;
	let id = '';

	export let data: PageData;

	if (data.mode === 'edit') {
		mode_title = 'Edytuj artykuł';

		title = data.post.title;
		id = data.post.id;
		description = data.post.description;
		content = data.post.content;
		published = data.post.published;
	} else {
		mode_title = 'Dodaj nowy artykuł';
	}

	const determineAction = async (status: boolean) => {
		if (status === true) {
			published = true;
		} else {
			published = false;
		}

		if (data.mode === 'create') {
			await createArticle();
		} else if (data.mode === 'edit') {
			await editArticle();
		}
	};

	const createArticle = async () => {
		const response = await fetch('/admin/blog', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				description,
				content,
				published
			})
		});
		if (response.ok) {
			const data = await response.json();
			goto(`/admin/blog-cms`);
		} else {
			console.error('Failed to create article');
		}
	};

	const editArticle = async () => {
		const response = await fetch(`/admin/blog`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id,
				title,
				description,
				content,
				published
			})
		});
		if (response.ok) {
			const data = await response.json();
			goto(`/admin/blog-cms`);
		} else {
			console.error('Failed to edit article');
		}
	};
</script>

{#if data.mode === 'post-error'}
	<main class="h-[80vh] max-w-7xl mx-auto flex items-center justify-center">
		<div
			class="flex flex-col items-center justify-center bg-secondary/70 px-8 py-8 rounded-lg shadow-lg m-4"
		>
			<h1 class="text-3xl font-bold mb-4">Coś poszło nie tak</h1>
			<p class="text-lg font-light mb-6">Nie udało się załadować artykułu.</p>
			<Button
				on:click={() => {
					goto('/admin/blog-cms');
				}}
				type="solid">Wróć do zarządzania blogiem</Button
			>
		</div>
	</main>
{/if}

<svelte:head>
	<title>Daniel Borowski | Dodawanie artykułu</title>
</svelte:head>

{#if data.mode !== 'post-error'}
	<main class="max-w-7xl mx-auto px-6 pt-6">
		<h1 class="text-3xl font-bold mb-6">{mode_title}</h1>

		<section class="h-fit mb-2">
			<form class=" bg-secondary p-6 rounded-lg shadow-lg" method="POST" on:submit|preventDefault>
				<div>
					<label for="title" class="text-lg">Tytuł</label>
					<input
						type="text"
						bind:value={title}
						name="title"
						placeholder="VLANy na urządzeniach Cisco"
						class="text-primary text-base w-full p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
						required
					/>
				</div>
				<div>
					<label for="description" class="text-lg">Opis</label>
					<textarea
						bind:value={description}
						rows="4"
						cols="50"
						name="description"
						placeholder="Sieci VLAN na urządzeniach Cisco - rodzaje, konfiguracja krok po kroku"
						class="text-primary text-base w-full p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
						required
					></textarea>
				</div>
				<div class="mb-4">
					<label for="content" class="text-lg">Treść</label>
					<Editor apiKey={data.TINYMCE_API_KEY} bind:value={content} />
				</div>
				<div class="flex flex-row justify-between items-center w-full">
					<div class="flex space-x-2">
						<Button
							type="solid"
							icon={faSquareCheck}
							on:click={() => {
								determineAction(false);
							}}>Zapisz artykuł</Button
						>
						<Button
							type="outline"
							icon={faShareFromSquare}
							on:click={() => {
								determineAction(true);
							}}>Zapisz i opublikuj</Button
						>
					</div>
					<div class="flex flex-row gap-2 items-center">
						<button class="group">
							<p class="group-hover:underline underline-offset-2">Podgląd</p>
						</button>

						{#if data.mode === 'edit'}
							{#if data.post.published}
								<p class=" bg-accent/80 text-white text-xs px-2.5 py-0.5 rounded-lg shadow-lg">
									Opublikowane
								</p>
							{:else}
								<p class=" bg-yellow-400/80 text-white text-xs px-2.5 py-0.5 rounded-lg shadow-lg">
									Wersja robocza
								</p>
							{/if}
						{/if}
					</div>
				</div>
			</form>
		</section>
	</main>
{/if}
