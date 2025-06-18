<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
	import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';
</script>

<main class="h-[90vh] flex max-w-7xl mx-auto items-center justify-center px-2 -mt-16 sm:mt-0">
	<div
		class="z-20 bg-secondary/70 px-4 sm:px-8 py-6 sm:py-8 flex flex-col rounded-lg shadow-lg w-full md:w-fit"
	>
		<p class="text-xl sm:text-2xl md:text-3xl text-left">👋 Cześć, jestem</p>
		<h1
			class="text-3xl md:text-7xl font-bungee bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-200 mb-2 text-left"
		>
			Daniel Borowski
		</h1>
		<p class="mb-4 text-base sm:text-lg text-neutral text-left">
			Jestem z wykształcenia technikiem informatykiem, specjalizującym się w sieciach komputerowych <br
				class="hidden sm:inline"
			/>
			oraz administracji system Linux, ale znam się również na cyberbezpieczeństwie i web developmentcie.
		</p>

		<div
			class="text-base sm:text-lg md:text-xl flex flex-col items-center md:flex-row gap-2 flex-wrap"
		>
			<button
				class="bg-accent/80 cursor-pointer w-fit flex flex-row justify-center items-center text-neutral px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-accent/50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary"
				on:click={() => goto('/contact')}
			>
				<p>Skontaktuj się ze mną</p>
				<Fa icon={faPaperPlane} class="ml-2 text-lg sm:text-xl" />
			</button>
			<button
				class="border-accent cursor-pointer border-2 w-fit text-neutral px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-accent-dark transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary"
				on:click={() => goto('/about')}
			>
				Poznaj mnie bliżej
			</button>
		</div>
	</div>
	<div class="absolute hidden bottom-5 md:flex flex-row items-center justify-center w-full">
		<button
			class="bg-secondary/60 px-4 sm:px-5 py-3 sm:py-4 rounded-full shadow-lg animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary"
			on:click={() => goto('/#services')}
		>
			<Fa icon={faArrowDown} class="text-xl sm:text-2xl text-accent" />
		</button>
	</div>
</main>
