<script>
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
	import Button from '../UI/Button.svelte';
	import { goto } from '$app/navigation';
</script>

<section class="max-w-7xl mb-8 mx-auto px-4 min-h-[50vh] sm:px-6 lg:px-8 scroll-m-24" id="about">
	<div class="mt-0 sm:mt-20 mb-4">
		<p class="text-xl sm:text-2xl mb-1">Poznaj mnie bliżej</p>
		<h2 class="text-5xl md:text-7xl text-accent font-semibold">O mnie</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div class="flex flex-col gap-4">
			<p class="text-base sm:text-lg mb-2">
				Cześć! Nazywam się <b class="text-accent">Daniel Borowski</b>. Jestem z wykształcenia
				<b class="text-accent">technikiem informatykiem</b>. Specjalizuję się w
				<b class="text-accent">administrowaniu i projektowaniu sieci komputerowych</b>, ale znam się
				również na <b class="text-accent">cyberbezpieczeństwie</b> i
				<b class="text-accent">full-stack web developmentcie</b>. Pierwszy swój program napisałem w
				wieku 8 lat w batchu, jeszcze wtedy na Windowsie XP. W ten sposób narodziła się moja pasja
				do informatyki.
			</p>
			<p class="text-base sm:text-lg">
				Obecnie <b class="text-accent">zakończyłem już naukę w technikum</b> i jestem gotów na nowe
				wyzwania. Moim celem jest
				<b class="text-accent">zdobycie tytułu inżyniera na Politechnice Poznańskiej</b>, gdzie
				planuję studiować <b class="text-accent">cyberbezpieczeństwo</b>. W międzyczasie chcę
				rozwijać swoje umiejętności teoretyczne, kończąc <b class="text-accent">kurs Cisco CCNP</b>,
				a także praktyczne, <b class="text-accent">pracując w branży IT</b>.
			</p>
			<p class="text-base sm:text-lg">
				Jeśli chcesz dowiedzieć się więcej o moich umiejętnościach i kwalifikacjach, zapraszam do
				przejrzenia mojego portfolio.
			</p>

			<Button
				on:click={() => {
					goto('/about');
				}}
				icon={faMagnifyingGlass}>Czytaj dalej</Button
			>
		</div>
		<div class="flex justify-center items-center mt-10 md:-mt-20 overflow-hidden">
			<div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
				<img
					src="/ja.webp"
					alt="Moje zdjęcie"
					class="w-full object-cover p-4 relative z-10 rounded-xl"
				/>
				<div class="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10">
					<div class="border-t-4 border-r-4 border-accent w-full h-full"></div>
				</div>
				<div class="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10">
					<div class="border-b-4 border-l-4 border-accent w-full h-full"></div>
				</div>
			</div>
		</div>
	</div>
</section>
