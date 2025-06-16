<script>
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { fly } from 'svelte/transition';
</script>

<article class="grid grid-cols-1 lg:grid-cols-2 gap-2" in:fly={{ x: 80, duration: 600 }}>
	<div class="p-4">
		<h3 class="text-2xl md:text-3xl text-center font-bungee mb-4">Sieci komputerowe</h3>
		<div class="relative flex mb-4 bg-secondary p-4 rounded-lg shadow-lg">
			<img src="ccnp.webp" alt="" class="h-22" />
			<div class="flex flex-col justify-center ml-4">
				<h3 class="font-bold text-lg">CCNP Enterprise: Core Networking</h3>
				<p class="font-light text-base">Cisco Networking Academy</p>
			</div>
			<a
				href="/certs/ccnp_encor.pdf"
				target="_blank"
				class="absolute bottom-2 right-2 bg-accent py-2 px-4 rounded-lg cursor-pointer"
			>
				<Fa icon={faMagnifyingGlass} />
			</a>
		</div>
		<div class="relative flex mb-4 bg-secondary p-4 rounded-lg shadow-lg">
			<img src="ccna3.webp" alt="" class="h-22" />
			<div class="flex flex-col justify-center ml-4">
				<h3 class="font-bold text-lg">CCNA: Enterprise Networking, Security, and Automation</h3>
				<p class="font-light text-base">Cisco Networking Academy</p>
			</div>
			<a
				href="/certs/ccna3.pdf"
				target="_blank"
				class="absolute bottom-2 right-2 bg-accent py-2 px-4 rounded-lg cursor-pointer"
			>
				<Fa icon={faMagnifyingGlass} />
			</a>
		</div>
		<div class="relative flex mb-4 bg-secondary p-4 rounded-lg shadow-lg">
			<img src="ccna2.webp" alt="" class="h-22" />
			<div class="flex flex-col justify-center ml-4">
				<h3 class="font-bold text-lg">CCNA: Switching, Routing, and Wireless Essentials</h3>
				<p class="font-light text-base">Cisco Networking Academy</p>
			</div>
			<a
				href="/certs/ccna2.pdf"
				target="_blank"
				class="absolute bottom-2 right-2 bg-accent py-2 px-4 rounded-lg cursor-pointer"
			>
				<Fa icon={faMagnifyingGlass} />
			</a>
		</div>
		<div class="relative flex mb-4 bg-secondary p-4 rounded-lg shadow-lg">
			<img src="ccna1.webp" alt="" class="h-22" />
			<div class="flex flex-col justify-center ml-4">
				<h3 class="font-bold text-lg">CCNA: Introduction to Networks</h3>
				<p class="font-light text-base">Cisco Networking Academy</p>
			</div>
			<a
				href="/certs/ccna1.pdf"
				target="_blank"
				class="absolute bottom-2 right-2 bg-accent py-2 px-4 rounded-lg cursor-pointer"
			>
				<Fa icon={faMagnifyingGlass} />
			</a>
		</div>
	</div>
	<div class="p-4">
		<h3 class="text-2xl md:text-3xl text-center font-bungee mb-4">Cyberbezpieczeństwo</h3>
		<div class="relative flex mb-4 bg-secondary p-4 rounded-lg shadow-lg">
			<img src="ns.webp" alt="" class="h-22" />
			<div class="flex flex-col justify-center ml-4">
				<h3 class="font-bold text-lg">Network Security</h3>
				<p class="font-light text-base">Cisco Networking Academy</p>
			</div>
			<a
				href="/certs/ns.pdf"
				target="_blank"
				class="absolute bottom-2 right-2 bg-accent py-2 px-4 rounded-lg cursor-pointer"
			>
				<Fa icon={faMagnifyingGlass} />
			</a>
		</div>
		<div class="relative flex mb-4 bg-secondary p-4 rounded-lg shadow-lg">
			<img src="cs.webp" alt="" class="h-22" />
			<div class="flex flex-col justify-center ml-4">
				<h3 class="font-bold text-lg">Introduction to Cybersecurity</h3>
				<p class="font-light text-base">Cisco Networking Academy</p>
			</div>
			<a
				href="/certs/ics.pdf"
				target="_blank"
				class="absolute bottom-2 right-2 bg-accent py-2 px-4 rounded-lg cursor-pointer"
			>
				<Fa icon={faMagnifyingGlass} />
			</a>
		</div>
	</div>
</article>
