<script>
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { fly } from 'svelte/transition';

	let navbarVisible = false;

	const toggleMenu = () => {
		navbarVisible = !navbarVisible;
	};
</script>

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
					href="/Daniel-Borowski_CV1.pdf"
					target="_blank"
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
					href="/Daniel-Borowski_CV1.pdf"
					target="_blank"
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
