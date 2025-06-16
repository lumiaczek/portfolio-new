<script>
	import { fly } from 'svelte/transition';
</script>

<article
	class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 text-sm md:text-base lg:text-lg"
	in:fly={{ x: 80, duration: 600 }}
>
	<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-lg">
		<h3 class="text-lg md:text-xl lg:text-2xl font-bungee mb-2 text-center">Informatyka</h3>
		<p class="mb-2">
			Mam zaawansowane umiejętności związane z ogólną informatyką. Potrafię instalować i
			konfigurować systemy operacyjne z rodziny Windows i Linux, zarówno wersje serwerowe, jak i
			workstation. Umiem składać, czyścić oraz diagnozować komputery i laptopy. Potrafię również
			konfigurować urządzenia peryferyjne, drukarki itp.
		</p>
		<ul class="list-disc pl-4 md:pl-5">
			<li>Instalacja i konfiguracja systemów Linux i Windows</li>
			<li>Konserwacja i naprawa komputerów i laptopów</li>
			<li>Instalacja drukarek i innych urządzeń peryferyjnych</li>
			<li>Diagnostyka systemów komputerowych</li>
			<li>Zaawansowana administracja systemami Linux i Windows</li>
		</ul>
	</div>
	<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-lg scale-105">
		<h3 class="text-xl lg:text-2xl font-bungee mb-2 text-center">Sieci komputerowe</h3>
		<p class="mb-2">
			Dzięki takim certyfikatom jak CCNA, CCNP oraz Network Security, jestem w stanie projektować i
			konfigurować bezpieczne sieci komputerowe, dla SOHO lub zarówno małych, jak i dużych firm.
			Głównie specjalizuję się w urządzeniach sieciowych marki Cisco, ale znam również firmy
			MikroTik i TP-LINK.
		</p>
		<ul class="list-disc pl-4 md:pl-5">
			<li>Projektowanie bezpiecznych sieci LAN i WAN, zgodnie z najnowszymi rozwiązaniami</li>
			<li>Symulacja działań zaprojektowanej sieci</li>
			<li>Konfiguracja routerów, przełączników, firewalli, serwerów usługowych</li>
			<li>Zarządzanie sieciami bezprzewodowymi</li>
			<li>Monitorowanie i optymalizacja wydajności sieci</li>
			<li>Rozwiązywanie problemów sieciowych</li>
		</ul>
	</div>
	<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-lg">
		<h3 class="text-xl lg:text-2xl font-bungee mb-2 text-center">Full-stack Web Development</h3>
		<p class="mb-2">
			Potrafię pisać proste aplikacje webowe w SvelteKit, zarówno po stronie klienta, jak i serwera.
			Znam się na HTML, CSS, JavaScript, Express.js, MongoDB i MariaDB. Potrafię tworzyć zarówno
			statyczne strony Internetowa jak ta, na której się znajdujesz, jak i dynamiczne aplikacje
			webowe, które mogą komunikować się z bazami danych i innymi usługami.
		</p>

		<ul class="list-disc pl-4 md:pl-5">
			<li>Tworzenie responsywnych interfejsów użytkownika</li>
			<li>Programowanie aplikacji webowych w SvelteKit</li>
			<li>Integracja z bazami danych (SQL, NoSQL)</li>
			<li>Implementacja API i usług webowych</li>
			<li>Testowanie i debugowanie aplikacji webowych</li>
		</ul>
	</div>
</article>
