<script>
	import { goto } from '$app/navigation';
	import Button from '../UI/Button.svelte';
	import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
</script>

<section class="max-w-7xl mx-auto my-10 h-[35vh] flex items-center justify-center">
	<div
		class="flex flex-col items-center justify-center bg-secondary/70 py-8 rounded-lg shadow-lg w-full"
	>
		<p>Masz jakieś pytania?</p>
		<h2
			class="text-6xl font-bungee bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-200 mb-4"
		>
			Skontaktuj się
		</h2>

		<Button
			icon={faPaperPlane}
			on:click={() => {
				goto('/contact');
			}}>Formularz kontaktowy</Button
		>
	</div>
</section>
