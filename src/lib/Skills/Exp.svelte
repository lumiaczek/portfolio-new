<script>
	import { fly } from 'svelte/transition';
</script>

<article class="grid grid-cols-1 gap-4 p-4" in:fly={{ x: 80, duration: 600 }}>
	<h2 class="text-3xl text-center font-bungee mb-4">Praca</h2>
	<div class="bg-secondary p-6 rounded-lg shadow-lg">
		<div class="flex flex-row justify-between items-center">
			<h3 class="font-regular">Informatyk dla Stalmaks Krzysztof Gilewicz</h3>
			<p class="text-base">2024</p>
		</div>
		<p>Umowa o zlecenie ze stawką godzinową</p>
	</div>
	<div class="bg-secondary p-6 rounded-lg shadow-lg">
		<div class="flex flex-row justify-between items-center">
			<h3 class="font-regular">Product Manager dla ZOO KOI</h3>
			<p class="text-base">2021 - 2022</p>
		</div>
		<p>Umowa o zlecenie</p>
	</div>

	<h2 class="text-3xl text-center font-bungee mt-2 mb-4">Praktyki zawodowe</h2>
	<div class="bg-secondary p-6 rounded-lg shadow-lg">
		<div class="flex flex-row justify-between items-center">
			<h3 class="font-regular">Praktykant w dziale organizacji Urzędu Miejskiego w Barlinku</h3>
			<p class="text-base">2024</p>
		</div>
		<p>Umowa o praktykę zawodową</p>
	</div>
	<div class="bg-secondary p-6 rounded-lg shadow-lg">
		<div class="flex flex-row justify-between items-center">
			<h3 class="font-regular">Praktykant w Zespole Teleinformatycznym banku GBS w Barlinku</h3>
			<p class="text-base">2023</p>
		</div>
		<p>Umowa o praktykę zawodową</p>
	</div>

	<h2 class="text-3xl text-center font-bungee mt-2 mb-4">Zlecenia / Freelance</h2>
	<div class="bg-secondary p-6 rounded-lg shadow-lg">
		<div class="flex flex-row justify-between items-center">
			<h3 class="font-regular">Operator Informatycznej Obsługi OKW 16 oraz 8 w Barlinku</h3>
			<p class="text-base">2024, 2025</p>
		</div>
		<p>Umowa o zlecenie</p>
	</div>
	<div class="bg-secondary p-6 rounded-lg shadow-lg">
		<div class="flex flex-row justify-between items-center">
			<h3 class="font-regular">Website Developer dla Hydrobar Paweł Figiel</h3>
			<p class="text-base">2022</p>
		</div>
		<p>Freelance</p>
	</div>
	<div class="bg-secondary p-6 rounded-lg shadow-lg">
		<div class="flex flex-row justify-between items-center">
			<h3 class="font-regular">Website Developer dla Stalmaks Krzysztof Gilewicz</h3>
			<p class="text-base">2022</p>
		</div>
		<p>Freelance</p>
	</div>
</article>
