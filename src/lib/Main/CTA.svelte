<script>
	import { goto } from '$app/navigation';
	import Button from '../UI/Button.svelte';
	import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
</script>

<section
	class="max-w-7xl mx-auto my-10 min-h-[25vh] h-[35vh] flex items-center justify-center px-2 sm:px-4"
>
	<div
		class="flex flex-col items-center justify-center bg-secondary/70 py-8 rounded-lg shadow-lg w-full max-w-full sm:max-w-2xl"
	>
		<p class="text-base sm:text-lg">Masz jakieś pytania?</p>
		<h2
			class="text-4xl sm:text-5xl md:text-6xl font-bungee bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-200 mb-4 text-center"
		>
			Skontaktuj się
		</h2>

		<Button
			icon={faPaperPlane}
			class="w-full sm:w-auto"
			on:click={() => {
				goto('/contact');
			}}>Formularz kontaktowy</Button
		>
	</div>
</section>
