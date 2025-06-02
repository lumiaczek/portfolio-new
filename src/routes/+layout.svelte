<script>
	import '../app.css';
	let { children } = $props();
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import Background from '$lib/Background.svelte';
</script>

<Navbar />
{@render children()}
<Background />
