<script>
	import { enhance } from '$app/forms';
	import Fa from 'svelte-fa';
	import {
		faMobileScreenButton,
		faLocationDot,
		faHashtag
	} from '@fortawesome/free-solid-svg-icons';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import Button from '$lib/UI/Button.svelte';
</script>

<svelte:head>
	<title>Daniel Borowski | Kontakt</title>
</svelte:head>

<main class="max-w-7xl mb-8 mx-auto min-h-[80vh] px-4 sm:px-6 lg:px-8 z-10 relative">
	<div class="mt-16 mb-4">
		<p class="text-2xl mb-1">Masz pytania?</p>
		<h2 class="text-7xl text-accent font-semibold">Skontaktuj się ze mną</h2>
	</div>
	<div class="flex flex-row mx-auto mt-8 max-w-5xl overflow-hidden shadow-lg">
		<div class="bg-secondary rounded-l-lg p-8 w-2/3">
			<h3 class="text-3xl font-semibold text-neutral mb-4 text-center">Formularz kontaktowy</h3>
			<form method="POST" use:enhance>
				<label for="usluga" class="text-lg">Wybierz usługę</label>
				<select
					name="usluga"
					id="usluga"
					class="text-base text-primary w-full p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
				>
					<option value="">Wybierz opcje</option>
					<option value="it">Usługa informatyczna</option>
					<option value="network">Projektowanie i instalacja sieci komputerowych</option>
					<option value="web">Tworzenie stron Internetowych</option>
					<option value="other">Inne</option>
				</select>
				<label for="name" class="text-lg">Imię</label>
				<input
					type="text"
					name="name"
					placeholder="Jan Kowalski"
					class="text-primary text-base w-full p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
					required
				/>
				<label for="email" class="text-lg">Email</label>
				<input
					type="email"
					name="email"
					placeholder="example@example.com"
					class="text-primary text-base w-full p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
					required
				/>
				<label for="message" class="text-lg">Wiadomość</label>
				<textarea
					name="message"
					placeholder="Twoja wiadomość"
					class="text-primary text-base w-full p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
					rows="5"
					required
				></textarea>
				<Button icon={faEnvelope} clazz="w-full">Wyślij wiadomość</Button>
			</form>
		</div>
		<div
			class="p-6 w-1/2 bg-secondary/30 rounded-r-lg overflow-hidden shadow-lg flex flex-col justify-around"
		>
			<div class="px-6">
				<div class="flex items-center flex-row gap-4 mb-2">
					<Fa icon={faMobileScreenButton} class="text-4xl" />
					<h3 class="text-4xl">Telefon</h3>
				</div>
				<p class="text-xl font-light">+48 782 068 821</p>
			</div>
			<div class="px-6">
				<div class="flex items-center flex-row gap-4 mb-2">
					<Fa icon={faLocationDot} class="text-4xl" />
					<h3 class="text-4xl">Adres</h3>
				</div>
				<p class="text-xl font-light">Barlinek, Zachodniopomorskie, Polska</p>
			</div>
			<div class="px-6">
				<div class="flex items-center flex-row gap-4 mb-2">
					<Fa icon={faEnvelope} class="text-4xl" />
					<h3 class="text-4xl">Email</h3>
				</div>
				<p class="text-xl font-light">danielborowski05@gmail.com</p>
			</div>
			<div class="px-6">
				<div class="flex items-center flex-row gap-4 mb-2">
					<Fa icon={faHashtag} class="text-4xl" />
					<h3 class="text-4xl">Social media</h3>
				</div>
				<div class="flex flex-row items-center gap-4">
					<a
						href="/"
						target="_blank"
						class="hover:underline hover:underline-offset-3 text-lg font-light focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1"
					>
						Facebook
					</a>
					<a
						href="/"
						target="_blank"
						class="hover:underline hover:underline-offset-3 text-lg font-light focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1"
						>Linkedin</a
					>
					<a
						href="/"
						target="_blank"
						class="hover:underline hover:underline-offset-3 text-lg font-light focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1"
						>Github</a
					>
				</div>
			</div>
		</div>
	</div>
</main>
