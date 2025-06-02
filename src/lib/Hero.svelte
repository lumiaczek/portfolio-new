<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
	import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';
</script>

<main class="h-[90vh] flex max-w-7xl mx-auto items-center justify-center">
	<div class="z-20 bg-secondary/70 px-8 py-8 flex flex-col rounded-lg shadow-lg">
		<p class="text-3xl">👋 Cześć, jestem</p>
		<h1
			class="text-7xl font-bungee bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-200 mb-2"
		>
			Daniel Borowski
		</h1>
		<p class="mb-4 text-left text-lg text-neutral">
			Jestem z wykształcenia technikiem informatykiem, specjalizującym się w sieciach <br />
			komputerowych oraz w obsłudze Linuxa, ale znam się również na cyberbezpieczeństwie <br />
			i full-stack web developmentcie.
		</p>

		<div class="text-xl flex flex-row gap-2">
			<button
				class="bg-accent/80 cursor-pointer w-fit flex flex-row justify-center items-center text-neutral px-6 py-3 rounded-lg hover:bg-accent/50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary"
				on:click={() => goto('/contact')}
			>
				<p>Skontaktuj się ze mną</p>
				<Fa icon={faPaperPlane} class="ml-2 text-xl" />
			</button>
			<button
				class="border-accent cursor-pointer border-2 w-fit text-neutral px-6 py-3 rounded-lg hover:bg-accent-dark transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary"
				on:click={() => goto('/about')}
			>
				Poznaj mnie bliżej
			</button>
		</div>
	</div>
	<div class="absolute bottom-5 flex flex-row items-center justify-center">
		<button
			class="bg-secondary/60 px-5 py-4 rounded-full shadow-lg animate-bounce cursor-pointer"
			on:click={() => goto('/#about')}
		>
			<Fa icon={faArrowDown} class="text-2xl text-accent animate-float-slowerer" />
		</button>
	</div>
</main>
