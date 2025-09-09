<script lang="ts">
	import Fa from 'svelte-fa';

	export let icon: any = null;
	export let clazz: string = '';
	export let type: string = 'solid'; // solid | outline
</script>

{#if type === 'solid' || type === undefined}
	<button
		class={`bg-accent/80 text-lg cursor-pointer w-fit flex flex-row justify-center items-center text-neutral px-6 py-3 rounded-lg hover:bg-accent/50
	    transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary
	    ${clazz}`}
		on:click
	>
		<p><slot /></p>
		{#if icon !== null}
			<Fa {icon} class="ml-2 text-xl" />
		{/if}
	</button>
{/if}

{#if type === 'outline'}
	<button
		class={`border-accent cursor-pointer flex flex-row border-2 w-fit text-neutral px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-accent-dark transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-secondary ${clazz}`}
		on:click
	>
		<p><slot /></p>
		{#if icon !== null}
			<Fa {icon} class="ml-2 text-xl" />
		{/if}
	</button>
{/if}

{#if type === 'solid-danger'}
	<button
		class={`bg-red-400/80 text-lg cursor-pointer w-fit flex flex-row justify-center items-center text-neutral px-6 py-3 rounded-lg hover:bg-red-500
	    transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-secondary
	    ${clazz}`}
		on:click
	>
		<p><slot /></p>
		{#if icon !== null}
			<Fa {icon} class="ml-2 text-xl" />
		{/if}
	</button>
{/if}
