<script>
	import { fly } from 'svelte/transition';
</script>

<article class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8" in:fly={{ x: 80, duration: 600 }}>
	<div class="bg-secondary p-6 rounded-lg shadow-lg">
		<h3 class="text-2xl font-bungee mb-2 text-center">Informatyka</h3>
		<p class="text-lg mb-2">
			Znam się na zabezpieczaniu systemów komputerowych przed zagrożeniami. Ukończyłem kursy Cisco
			Network Security, co pozwala mi na skuteczne zabezpieczanie sieci i systemów.
		</p>
		<ul class="list-disc pl-5">
			<li>Analiza ryzyka i zarządzanie bezpieczeństwem</li>
			<li>Implementacja polityk bezpieczeństwa</li>
			<li>Monitorowanie i reagowanie na incydenty bezpieczeństwa</li>
			<li>Testowanie penetracyjne i audyty bezpieczeństwa</li>
			<li>Zarządzanie dostępem i uwierzytelnianiem</li>
		</ul>
	</div>
	<div class="bg-secondary p-6 rounded-lg shadow-lg scale-105">
		<h3 class="text-2xl font-bungee mb-2 text-center">Sieci komputerowe</h3>
		<p class="text-lg mb-2">
			Posiadam umiejętności w zakresie projektowania, konfiguracji i zarządzania sieciami
			komputerowymi. Ukończyłem kursy Cisco CCNA i CCNP, co pozwala mi na efektywne zarządzanie
			infrastrukturą sieciową.
		</p>
		<ul class="list-disc pl-5">
			<li>Projektowanie sieci LAN i WAN</li>
			<li>Konfiguracja routerów i przełączników</li>
			<li>Zarządzanie sieciami bezprzewodowymi</li>
			<li>Monitorowanie i optymalizacja wydajności sieci</li>
			<li>Rozwiązywanie problemów sieciowych</li>
		</ul>
	</div>
	<div class="bg-secondary p-6 rounded-lg shadow-lg">
		<h3 class="text-2xl font-bungee mb-2 text-center">Full-stack Web Development</h3>
		<p class="text-lg mb-2">
			Posiadam umiejętności w zakresie tworzenia aplikacji webowych zarówno po stronie klienta, jak
			i serwera. Znam się na HTML, CSS, JavaScript oraz frameworkach takich jak React i Node.js.
		</p>

		<ul class="list-disc pl-5">
			<li>Tworzenie responsywnych interfejsów użytkownika</li>
			<li>Programowanie aplikacji webowych w JavaScript</li>
			<li>Integracja z bazami danych (SQL, NoSQL)</li>
			<li>Implementacja API i usług webowych</li>
			<li>Testowanie i debugowanie aplikacji webowych</li>
		</ul>
	</div>
</article>
