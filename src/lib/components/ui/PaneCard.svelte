<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		variant = 'primary',
		class: className = '',
		href,
		target,
		rel
	}: {
		children: Snippet;
		variant?: 'primary' | 'secondary' | 'none';
		class?: string;
		href?: string;
		target?: string;
		rel?: string;
	} = $props();

	let glowClass = $derived(
		variant === 'primary'
			? 'pane-glow-primary'
			: variant === 'secondary'
				? 'pane-glow-secondary'
				: ''
	);
</script>

{#if href}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a {href} {target} {rel} class="flex flex-col bg-surface pane-border {glowClass} p-6 {className}">
		{@render children()}
	</a>
{:else}
	<div class="flex flex-col bg-surface pane-border {glowClass} p-6 {className}">
		{@render children()}
	</div>
{/if}
