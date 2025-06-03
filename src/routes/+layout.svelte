<script>
	import '../app.css';
	let { children } = $props();
	import Navbar from '$lib/UI/Navbar.svelte';
	import Background from '$lib/Background.svelte';
	import Footer from '$lib/UI/Footer.svelte';
</script>

<Navbar />
{@render children()}
<Footer />
<Background />
