<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faMobileScreenButton,
		faLocationDot,
		faHashtag
	} from '@fortawesome/free-solid-svg-icons';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import Button from '$lib/UI/Button.svelte';
	import Toast from '$lib/UI/Toast.svelte';

	let toast = false;
	let toastType = 'null';
	let failReason = 'empty';

	let formData = {
		service: '',
		name: '',
		email: '',
		message: '',
		date: new Date().toLocaleString()
	};

	const showToast = (status: string) => {
		toastType = status;

		toast = true;
		setTimeout(() => {
			toast = false;
		}, 3000);
	};

	const sendForm = async () => {
		if (!formData.service || !formData.name || !formData.email || !formData.message) {
			showToast('error');
			failReason = 'empty';
			return;
		}

		const request = await fetch('/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		const response = await request.json();
		if (!response.success) {
			showToast('error');
			failReason = '';
			return;
		}

		if (request.ok) {
			showToast('success');
			formData = { service: '', name: '', email: '', message: '', date: '' };
		} else {
			showToast('error');
			failReason = '';
		}
	};
</script>

<svelte:head>
	<title>Daniel Borowski | Kontakt</title>
</svelte:head>

<main class="max-w-7xl mb-8 mx-auto min-h-[80vh] px-4 sm:px-6 lg:px-8 z-10 relative">
	<div class="mt-8 md:mt-16 mb-4">
		<p class="text-xl sm:text-2xl mb-1">Masz pytania?</p>
		<h2 class="text-5xl md:text-7xl text-accent font-semibold">Skontaktuj się ze mną</h2>
	</div>
	<div class="flex flex-col md:flex-row mx-auto mt-8 max-w-5xl overflow-hidden shadow-lg">
		<div class="bg-secondary rounded-t-lg md:rounded-l-lg p-8 md:w-2/3">
			<h3 class="text-3xl font-semibold text-neutral mb-4 text-center">Formularz kontaktowy</h3>
			<form method="POST" on:submit|preventDefault>
				<label for="usluga" class="text-lg">Wybierz usługę</label>
				<select
					name="usluga"
					id="usluga"
					bind:value={formData.service}
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
					bind:value={formData.name}
					type="text"
					name="name"
					placeholder="Jan Kowalski"
					class="text-primary text-base w-full p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
					required
				/>
				<label for="email" class="text-lg">Email</label>
				<input
					bind:value={formData.email}
					type="email"
					name="email"
					placeholder="example@example.com"
					class="text-primary text-base w-full p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
					required
				/>
				<label for="message" class="text-lg">Wiadomość</label>
				<textarea
					bind:value={formData.message}
					name="message"
					placeholder="Twoja wiadomość"
					class="text-primary text-base w-full p-2.5 rounded-lg bg-neutral mb-4 focus:ring-accent focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:outline-none"
					rows="5"
					required
				></textarea>
				<Button type="solid" icon={faEnvelope} clazz="w-full" on:click={sendForm}
					>Wyślij wiadomość</Button
				>
			</form>
		</div>
		<div
			class="p-6 md:w-1/2 bg-secondary/30 rounded-b-lg md:rounded-r-lg overflow-hidden shadow-lg flex flex-col justify-around gap-6"
		>
			<div class="px-2 sm:px-4 md:px-6">
				<div class="flex items-center flex-row gap-2 sm:gap-4 mb-2">
					<Fa icon={faMobileScreenButton} class="text-3xl sm:text-4xl" />
					<h3 class="text-2xl sm:text-3xl md:text-4xl">Telefon</h3>
				</div>
				<p class="text-base sm:text-lg md:text-xl font-light break-all">+48 782 068 821</p>
			</div>
			<div class="px-2 sm:px-4 md:px-6">
				<div class="flex items-center flex-row gap-2 sm:gap-4 mb-2">
					<Fa icon={faLocationDot} class="text-3xl sm:text-4xl" />
					<h3 class="text-2xl sm:text-3xl md:text-4xl">Adres</h3>
				</div>
				<p class="text-base sm:text-lg md:text-xl font-light">
					Barlinek, Zachodniopomorskie, Polska
				</p>
			</div>
			<div class="px-2 sm:px-4 md:px-6">
				<div class="flex items-center flex-row gap-2 sm:gap-4 mb-2">
					<Fa icon={faEnvelope} class="text-3xl sm:text-4xl" />
					<h3 class="text-2xl sm:text-3xl md:text-4xl">Email</h3>
				</div>
				<p class="text-base sm:text-lg md:text-xl font-light break-all">
					danielborowski05@gmail.com
				</p>
			</div>
			<div class="px-2 sm:px-4 md:px-6">
				<div class="flex items-center flex-row gap-2 sm:gap-4 mb-2">
					<Fa icon={faHashtag} class="text-3xl sm:text-4xl" />
					<h3 class="text-2xl sm:text-3xl md:text-4xl">Social media</h3>
				</div>
				<div class="flex flex-row items-start sm:items-center gap-2 sm:gap-4">
					<a
						aria-label="Facebook"
						href="https://www.facebook.com/daniel.borowski.184881/"
						target="_blank"
						class="hover:underline hover:underline-offset-3 text-base sm:text-lg font-light focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1"
					>
						Facebook
					</a>
					<a
						aria-label="Linkedin"
						href="https://www.linkedin.com/in/daniel-borowski-622466215/"
						target="_blank"
						class="hover:underline hover:underline-offset-3 text-base sm:text-lg font-light focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1"
						>Linkedin</a
					>
					<a
						aria-label="Github"
						href="https://github.com/lumiaczek"
						target="_blank"
						class="hover:underline hover:underline-offset-3 text-base sm:text-lg font-light focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1"
						>Github</a
					>
				</div>
			</div>
		</div>
	</div>
	{#if toast && toastType !== 'null'}
		<Toast type={toastType}>
			{#if toastType === 'success'}
				Formularz został wysłany!
			{:else if toastType === 'error' && failReason === ''}
				Wystąpił błąd podczas wysyłania formularza.
			{:else if toastType === 'error' && failReason === 'empty'}
				Uzupełnij wszystkie pola formularza.
			{/if}
		</Toast>
	{/if}
</main>
