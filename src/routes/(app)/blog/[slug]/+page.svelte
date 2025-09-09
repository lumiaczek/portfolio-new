<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const post = data.post;
</script>

<svelte:head>
	<title>Daniel Borowski | {post.title}</title>
</svelte:head>

<main class="max-w-5xl mb-8 mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
	<article class="prose lg:prose-xl max-w-none mt-8 md:mt-16">
		<div class="mt-8 md:mt-16 mb-4">
			<h2 class="text-5xl md:text-7xl text-accent font-semibold">{post.title}</h2>
			<p class="text-lg font-light sm:text-xl mb-1">Opublikowano {post.date}</p>
		</div>
		<p class="text-base text-muted mb-4">{post.description}</p>
		<div class="font-light">{@html post.content}</div>
	</article>
</main>
