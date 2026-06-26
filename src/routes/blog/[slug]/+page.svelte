<script lang="ts">
	let { data } = $props();
	let Content = $derived(data.content);
</script>

<svelte:head>
	<title>{data.meta.title} | Oliver's Portfolio</title>
	<meta name="description" content={data.meta.excerpt} />
</svelte:head>

<div class="flex flex-col gap-6">
	<a href="/blog" class="text-secondary hover:text-primary transition-colors font-code-block mb-2 inline-flex items-center gap-2 w-max">
		<span>&lt;</span> cd ..
	</a>

	<div class="flex flex-col gap-2 mb-4">
		<h1 class="font-headline-lg text-primary uppercase">{data.meta.title}</h1>
		<div class="text-on-surface-variant font-code-block text-sm">
			[ Date: {data.meta.date} ]
		</div>
	</div>

	<div class="bg-surface pane-border pane-glow-secondary p-6 md:p-8">
		<article class="prose prose-invert prose-p:font-body-md prose-headings:font-headline-sm prose-a:text-primary prose-pre:bg-black max-w-none">
			<Content />
		</article>
	</div>
</div>
