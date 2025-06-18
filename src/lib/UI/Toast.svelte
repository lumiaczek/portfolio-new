<script>
	import Fa from 'svelte-fa';
	import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
	import { fly } from 'svelte/transition';

	export let type = 'success'; // 'success' or 'error'
</script>

<div
	in:fly={{ x: -100, duration: 300 }}
	out:fly={{ x: -100, duration: 300 }}
	class="fixed bottom-4 left-4 z-50 gap-2 rounded-lg shadow-lg p-4 bg-secondary flex flex-row items-center"
>
	{#if type === 'success'}
		<div class="flex items-center gap-2 text-neutral bg-accent p-3 rounded-lg text-2xl">
			<Fa icon={faCircleCheck} />
		</div>
	{:else if type === 'error'}
		<div class="flex items-center gap-2 text-neutral bg-red-400 p-3 rounded-lg text-2xl">
			<Fa icon={faCircleXmark} />
		</div>
	{/if}
	<p class="text-neutral text-xl font-medium">
		<slot />
	</p>
</div>
