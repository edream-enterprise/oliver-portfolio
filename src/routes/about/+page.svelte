<script lang="ts">
	// @ts-expect-error mdsvex module types
	import Bio from '$lib/content/about/bio_completa.md';
</script>

<svelte:head>
	<title>About | Oliver's Portfolio</title>
	<meta name="description" content="Oliver's complete biography" />
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-2 mb-4">
		<span class="material-symbols-outlined text-primary" aria-hidden="true">person</span>
		<h1 class="font-headline-lg text-primary uppercase">/about/bio_completa.md</h1>
	</div>

	<div class="bg-surface pane-border pane-glow-secondary p-6 md:p-8">
		<article class="prose prose-invert prose-p:font-body-md prose-headings:font-headline-sm prose-a:text-primary max-w-none">
			<Bio />
		</article>
	</div>
</div>
