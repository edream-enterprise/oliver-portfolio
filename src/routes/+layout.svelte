<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import NeovimCmd from '$lib/components/layout/NeovimCmd.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Oliver Alejandro Erazo Reyes - Portfolio</title>
</svelte:head>

<Header />
<main class="flex-grow w-full max-w-container-max mx-auto px-gutter pb-margin-page pt-12">
	{@render children()}
</main>
<Footer />
<NeovimCmd />
