<script>
	import Fa from 'svelte-fa';
	import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
</script>

<footer class="border-t border-accent bg-primary">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
		<div class="flex flex-col items-center">
			<p class="font-bungee text-3xl">Daniel <b class="text-accent">Borowski</b></p>
			<p class="text-center text-sm max-w-xl">
				Jestem z wykształcenia technikiem informatykiem, specjalizującym się w sieciach
				komputerowych oraz administracji system Linux, ale znam się również na cyberbezpieczeństwie
				i full-stack web developmentcie.
			</p>
			<div class="flex flex-row gap-2 mt-2">
				<a
					href="/"
					class="text-neutral text-3xl hover:text-accent focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition duration-200"
					target="_blank"
				>
					<Fa icon={faFacebookSquare} />
				</a>
				<a
					href="/"
					class="text-neutral text-3xl hover:text-accent focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition duration-200"
					target="_blank"
				>
					<Fa icon={faLinkedin} />
				</a>
				<a
					href="/"
					class="text-neutral text-3xl hover:text-accent focus:outline-none focus:ring-2 focus:text-accent focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary rounded-lg p-1 transition duration-200"
					target="_blank"
				>
					<Fa icon={faGithubSquare} />
				</a>
			</div>
		</div>
	</div>

	<div class="bg-secondary p-4 mx-auto px-4 sm:px-6 lg:px-8">
		<p class="text-neutral text-sm max-w-7xl mx-auto">
			&copy; {new Date().getFullYear()} Daniel Borowski |
			<b class="font-light">Wszelkie prawa zastrzeżone.</b>
		</p>
	</div>
</footer>
