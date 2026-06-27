<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import NeovimCmd from '$lib/components/layout/NeovimCmd.svelte';
	import SystemMonitor from '$lib/components/ui/SystemMonitor.svelte';
	import ThemeDropdown from '$lib/components/ui/ThemeDropdown.svelte';
	import HelpModal from '$lib/components/ui/HelpModal.svelte';
	import { globalState } from '$lib/state.svelte';
	import { _ } from 'svelte-i18n';
	import '$lib/i18n';

	let { children } = $props();

	$effect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.className =
				(globalState.theme === 'default' ? '' : `theme-${globalState.theme}`) +
				(globalState.glowMode ? ' glow-mode' : '');

			if (globalState.theme === 'default') {
				console.log(
					`%c${$_('console.matrixHint')}`,
					'color: #00ff00; font-weight: bold; font-family: monospace;'
				);
			}
		}
	});

	// Idle Timer (Easter Egg)
	let idleTimeout: ReturnType<typeof setTimeout>;

	function resetIdleTimer() {
		clearTimeout(idleTimeout);
		// 5 minutes = 300,000 ms
		idleTimeout = setTimeout(() => {
			if (typeof window !== 'undefined') {
				import('$lib/state.svelte').then(({ setGlowMode }) => {
					setGlowMode(true);
				});
			}
		}, 300000);
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			resetIdleTimer();
			window.addEventListener('mousemove', resetIdleTimer);
			window.addEventListener('keydown', resetIdleTimer);
			window.addEventListener('touchstart', resetIdleTimer);
			window.addEventListener('scroll', resetIdleTimer);

			return () => {
				clearTimeout(idleTimeout);
				window.removeEventListener('mousemove', resetIdleTimer);
				window.removeEventListener('keydown', resetIdleTimer);
				window.removeEventListener('touchstart', resetIdleTimer);
				window.removeEventListener('scroll', resetIdleTimer);
			};
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{$_('about.pageTitle')}</title>
</svelte:head>

<Header />
<main class="flex-grow w-full max-w-container-max mx-auto px-gutter pb-margin-page pt-12">
	{@render children()}
</main>
<Footer />
<NeovimCmd />
<SystemMonitor />
<ThemeDropdown />
<HelpModal />
