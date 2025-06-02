<script>
	import { fly } from "svelte/transition";

</script>
<article class="grid grid-cols-3 gap-6 mt-8" in:fly={{ x: 80, duration: 600 }}>
			<div class="bg-secondary p-6 rounded-lg shadow-lg">
				<h3 class="text-2xl text-center font-bungee mb-2">Szkoła podstawowa</h3>
				<p class="text-lg text-center mb-2">
					Szkoła Podstawowa nr 4 im. Henryka Sienkiewicza w Barlinku.
				</p>
			</div>
			<div class="bg-secondary p-6 rounded-lg shadow-lg scale-105">
				<h3 class="text-2xl text-center font-bungee mb-2">Szkoła wyższa</h3>
				<p class="text-lg text-center mb-2">
					Politechnika Poznańska, kierunek Cyberbezpieczeństwo.
				</p>
			</div>
			<div class="bg-secondary p-6 rounded-lg shadow-lg">
				<h3 class="text-2xl text-center font-bungee mb-2">Szkoła średnia</h3>
				<p class="text-lg text-center mb-2">
					Zespół Szkół Elektrycznych im. mjr. Henryka Sucharskiego w Gorzowie Wielkopolskim,
					kierunek technik Informatyk.
				</p>
			</div>
</article>