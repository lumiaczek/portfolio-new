<script lang="ts">
	import Fa from 'svelte-fa';

	export let icon: any = null;
	export let clazz: string = '';
</script>

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
