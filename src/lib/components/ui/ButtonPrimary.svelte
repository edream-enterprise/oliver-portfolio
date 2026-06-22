<script lang="ts">
	import type { Snippet } from 'svelte';
	
	let { children, class: className = '', onclick }: { children: Snippet; class?: string; onclick?: () => void } = $props();
</script>

<button
	class="btn-primary font-label-sm px-6 py-3 uppercase rounded-none {className}"
	onclick={onclick}
>
	{@render children()}
</button>
