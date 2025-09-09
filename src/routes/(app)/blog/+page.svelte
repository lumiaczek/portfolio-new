<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/UI/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Daniel Borowski | Blog</title>
</svelte:head>

<main class="max-w-7xl mb-8 mx-auto min-h-[80vh] px-4 sm:px-6 lg:px-8 z-10 relative">
	<div class="mt-8 md:mt-16 mb-4">
		<p class="text-xl sm:text-2xl mb-1">Ciekawe treści</p>
		<h2 class="text-5xl md:text-7xl text-accent font-semibold">Mój blog</h2>
	</div>

	{#if data.posts === undefined}
		<p class="text-center text-3xl text-gray-300 mt-8">Jeszcze nic tutaj nie ma.</p>
	{/if}
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
		{#each data.posts as post (post.id)}
			{#if post.published === true}
				<div
					class="shadow-lg flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
				>
					<img src="http://picsum.photos/400/200" alt="Test img" class="rounded-t-lg" />
					<div class="p-6 bg-secondary rounded-b-lg">
						<h3 class="text-2xl font-semibold mb-2">{post.title}</h3>
						<p class="text-base font-light text-muted mb-4">
							{post.description}
						</p>
						<Button on:click={() => goto(`/blog/${post.id}`)}>Czytaj więcej</Button>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</main>
