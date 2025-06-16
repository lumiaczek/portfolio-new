<script>
	import { fly } from 'svelte/transition';
</script>

<article
	class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 text-sm md:text-base lg:text-lg"
	in:fly={{ x: 80, duration: 600 }}
>
	<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-lg">
		<h3 class="text-lg md:text-xl lg:text-2xl text-center font-bungee mb-2">Szkoła podstawowa</h3>
		<p class="text-base md:text-lg text-center mb-2">
			Szkoła Podstawowa nr 4 im. Henryka Sienkiewicza w Barlinku.
		</p>
	</div>
	<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-lg scale-105">
		<h3 class="text-lg md:text-xl lg:text-2xl text-center font-bungee mb-2">Szkoła wyższa</h3>
		<p class="text-base md:text-lg text-center mb-2">
			Politechnika Poznańska, kierunek Cyberbezpieczeństwo.
		</p>
	</div>
	<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-lg">
		<h3 class="text-lg md:text-xl lg:text-2xl text-center font-bungee mb-2">Szkoła średnia</h3>
		<p class="text-base md:text-lg text-center mb-2">
			Zespół Szkół Elektrycznych im. mjr. Henryka Sucharskiego w Gorzowie Wielkopolskim, kierunek
			technik Informatyk.
		</p>
	</div>
</article>
