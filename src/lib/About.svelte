<script>
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
	import Button from './Button.svelte';
	import { goto } from '$app/navigation';
</script>

<section class="max-w-7xl mb-8 mx-auto px-4 sm:px-6 lg:px-8" id="about">
	<div class="mt-20 mb-4 r">
		<p class="text-2xl mb-1">Poznaj mnie bliżej</p>
		<h2 class="text-7xl text-accent font-semibold">O mnie</h2>
	</div>
	<div class="grid grid-cols-2">
		<div class="flex flex-col gap-4">
			<p class="text-lg mb-2">
				Cześć! Nazywam się Daniel Borowski. Jestem z wykształcenia technikiem informatykiem.
				Specjalizuję się w administrowaniu i projektowaniu sieci komputerowych, ale znam się również
				na cyberbezpieczeństwie i full-stack web developmentcie. Pierwszy swój program napisałem w
				wieku 8 lat w batchu, jeszcze wtedy na Windowsie XP. W ten sposób narodziła się moja pasja
				do informatyki.
			</p>
			<p class="text-lg">
				Obecnie zakończyłem już naukę w technikum i jestem gotów na nowe wyzwania. Moim celem jest
				zdobycie tytułu inżyniera na Politechnice Poznańskiej, gdzie planuję studiować
				cyberbezpieczeństwo. W międzyczasie chcę rozwijać swoje umiejętności teoretyczne, kończąc
				kurs Cisco CCNP, a także praktyczne, pracując w branży IT. Wierzę, że łącząc teorię z
				praktyką, mogę stać się jeszcze lepszym specjalist.
			</p>

			<Button
				on:click={() => {
					goto('/about');
				}}
				icon={faMagnifyingGlass}>Czytaj dalej</Button
			>
		</div>
	</div>
</section>
