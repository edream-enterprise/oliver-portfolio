<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className = '',
		href,
		target,
		rel,
		type = 'button',
		onclick
	}: {
		children: Snippet;
		class?: string;
		href?: string;
		target?: string;
		rel?: string;
		type?: 'button' | 'submit' | 'reset';
		onclick?: (e: MouseEvent) => void;
	} = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#if href}
	<a
		{href}
		{target}
		{rel}
		class="btn-primary font-label-sm px-6 py-3 uppercase rounded-none whitespace-nowrap inline-block text-center {className}"
		{onclick}
	>
		{@render children()}
	</a>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
{:else}
	<button
		{type}
		class="btn-primary font-label-sm px-6 py-3 uppercase rounded-none whitespace-nowrap cursor-pointer {className}"
		{onclick}
	>
		{@render children()}
	</button>
{/if}
