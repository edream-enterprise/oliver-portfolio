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
		class="btn-primary text-[13px] sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 uppercase rounded-none inline-block text-center break-all sm:whitespace-nowrap {className}"
		{onclick}
	>
		{@render children()}
	</a>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
{:else}
	<button
		{type}
		class="btn-primary text-[13px] sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 uppercase rounded-none cursor-pointer break-all sm:whitespace-nowrap {className}"
		{onclick}
	>
		{@render children()}
	</button>
{/if}
