<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		variant = 'primary',
		class: className = ''
	}: { children: Snippet; variant?: 'primary' | 'secondary' | 'none'; class?: string } = $props();

	let glowClass = $derived(
		variant === 'primary'
			? 'pane-glow-primary'
			: variant === 'secondary'
				? 'pane-glow-secondary'
				: ''
	);
</script>

<div class="flex flex-col bg-surface pane-border {glowClass} p-6 {className}">
	{@render children()}
</div>
