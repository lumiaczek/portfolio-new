<script>
	import Fa from 'svelte-fa';
	import { faEthernet, faLaptopCode, faComputer } from '@fortawesome/free-solid-svg-icons';
</script>

<section class="max-w-7xl mb-8 mt-28 mx-auto px-4 sm:px-6 lg:px-8" id="services">
	<div class="mb-4 r">
		<p class="text-xl sm:text-2xl mb-1">Co mogę dla Ciebie zrobić</p>
		<h2 class="text-5xl md:text-7xl text-accent font-semibold">Usługi</h2>
	</div>
	<div class="flex flex-col items-center min-h-[45vh] justify-center mt-12 sm:mt-0">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div class="flex flex-col gap-2 text-center">
				<Fa icon={faLaptopCode} class="text-4xl sm:text-5xl mb-2" />
				<h3 class="text-xl sm:text-2xl font-semibold">Tworzenie stron Internetowych</h3>
				<p class="text-base md:text-lg">
					Tworzę nowoczesne i responsywne strony internetowe, które są dostosowane do Twoich
					potrzeb. Od prostych stron po zaawansowane aplikacje webowe.
				</p>
			</div>
			<div class="flex flex-col gap-2 text-center">
				<Fa icon={faEthernet} class="text-4xl sm:text-5xl mb-2" />
				<h3 class="text-xl sm:text-2xl font-semibold">
					Projektowanie i montaż sieci komputerowych
				</h3>
				<p class="text-base md:text-lg">
					Projektuję i konfiguruję bezpieczne sieci komputerowe, zarówno dla małych, jak i dużych
					firm. Mogę również zarządzać infrastrukturą sieciową, zapewniając jej wydajność i
					bezpieczeństwo.
				</p>
			</div>
			<div class="flex flex-col gap-2 text-center">
				<Fa icon={faComputer} class="text-4xl sm:text-5xl mb-2" />
				<h3 class="text-xl sm:text-2xl font-semibold">Usługi informatyczne</h3>
				<p class="text-base md:text-lg">
					Oferuję szeroki zakres usług informatycznych, w tym instalację i konfigurację systemów
					operacyjnych, konserwację sprzętu komputerowego oraz wsparcie techniczne dla użytkowników.
				</p>
			</div>
		</div>
	</div>
</section>
