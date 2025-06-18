<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/UI/Button.svelte';
	import Skills from '$lib/About/Skills.svelte';
	import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
</script>

<svelte:head>
	<title>Daniel Borowski | O mnie</title>
</svelte:head>

<section class="max-w-7xl mb-8 mx-auto px-4 sm:px-6 lg:px-8 z-20">
	<div class="mt-6 mb-4 r">
		<p class="text-2xl md:text-3xl">Cześć!</p>
		<h2 class="text-4xl md:text-6xl text-accent font-semibold font-bungee">Jestem Daniel</h2>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 grid-rows-1">
		<div class="flex flex-col gap-4 h-fit">
			<p class="text-base sm:text-lg mb-2">
				Pochodzę z <b class="text-accent">Barlinka</b>, małego miasteczka w zachodniopomorskim.
				Informatyką interesuję się od dzieciństwa,
				<b class="text-accent"
					>kiedy to w wieku 8 lat napisałem swój pierwszy program w batchu na Windowsie XP</b
				>. Od tego czasu moja pasja do informatyki tylko rosła.
				<b class="text-accent">Ukończyłem technikum informatyczne z wyróżnieniem, </b> a także
				zdobyłem
				<b class="text-accent">dyplom zawodowy informatyka z finalnym wynikiem 100% </b>.
			</p>
			<p class="text-base sm:text-lg">
				W trakcie nauki w technikum zdobyłem wiele praktycznych umiejętności, objętych podstawą
				programową, lecz wiele technologii i narzędzi, poznałem samodzielnie, eksperymentując na
				maszynach wirtualnych i starych komputerach. W szczególności interesuję się sieciami
				komputerowymi oraz cyberbezpieczeństwem. Dzięki temu, że moja szkoła była lokalną akademią
				Cisco, ukończyłem wiele certyfikatów, w tym <b class="text-accent"
					>trzy modułowy CCNA, CCNP oraz Network Security</b
				>.
			</p>
			<p class="text-base sm:text-lg">
				Obecnie, czekam na wyniki matur, które mam nadzieję, będą pozytywne. Planuję rozpocząć
				studia na <b class="text-accent">Politechnice Poznańskiej</b>, na kierunku
				<b class="text-accent">cyberbezpieczeństwo</b>
				oraz <b class="text-accent">kontynuować rozwój swoich umiejętności w branży IT</b>.
			</p>
			<p class="text-base sm:text-lg">
				W przyszłości chciałbym pracować jako starszy administrator sieci komputerowych lub
				specjalista ds. cyberbezpieczeństwa.
			</p>

			<Button
				icon={faArrowDown}
				clazz="text-sm md:text-lg"
				on:click={() => {
					goto('/about#kwalifikacje', {
						replaceState: true
					});
				}}>Sprawdź moje umiejętności i kwalifikacje</Button
			>
		</div>

		<div class="flex justify-center items-center lg:-mt-20">
			<div class="relative w-auto">
				<img src="/ja.webp" alt="Moje zdjęcie" class="w-full object-cover p-4 relative z-10" />
				<div class="absolute top-0 right-0 w-10 h-10">
					<div class="border-t-4 border-r-4 border-accent w-full h-full"></div>
				</div>
				<div class="absolute bottom-0 left-0 w-10 h-10">
					<div class="border-b-4 border-l-4 border-accent w-full h-full"></div>
				</div>
			</div>
		</div>
	</div>
</section>
<Skills />
