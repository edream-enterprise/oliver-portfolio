<script lang="ts">
	import { resolve } from '$app/paths';
	import BlogViewToggle from '$lib/components/blog/BlogViewToggle.svelte';

	let { data } = $props();
	let Content = $derived(data.content);

	type ViewMode = 'terminal' | 'preview';
	let viewMode = $state<ViewMode>('terminal');
</script>

<svelte:head>
	<title>{data.meta.title} | Oliver's Portfolio</title>
	<meta name="description" content={data.meta.excerpt ?? ''} />
	{#if data.meta.canonicalUrl}
		<link rel="canonical" href={data.meta.canonicalUrl} />
	{/if}
</svelte:head>

<div class="flex flex-col gap-6">
	<!-- Back navigation -->
	<a
		href={resolve('/blog')}
		class="font-code-block text-secondary hover:text-primary -mb-2 inline-flex w-max items-center gap-2 text-sm transition-colors"
	>
		<span aria-hidden="true">←</span> cd /blog
	</a>

	<!-- Post header -->
	<header class="pane-border bg-surface p-6 md:p-8">
		<!-- Top row: metadata + view toggle -->
		<div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
			<div class="flex flex-col gap-2">
				<time class="font-code-block text-on-surface-variant text-xs uppercase">
					[ Date: {data.meta.date} ]
				</time>
				{#if data.meta.language}
					<span class="font-code-block text-on-surface-variant text-xs uppercase">
						[ Lang: {data.meta.language} ]
					</span>
				{/if}
			</div>
			<BlogViewToggle onchange={(m) => (viewMode = m)} />
		</div>

		<!-- Title -->
		<h1 class="font-headline-lg text-primary mb-3 uppercase leading-tight">
			{data.meta.title}
		</h1>

		<!-- Excerpt -->
		{#if data.meta.excerpt}
			<p class="font-body-md text-on-surface-variant mb-4 leading-relaxed">
				{data.meta.excerpt}
			</p>
		{/if}

		<!-- Tags -->
		{#if data.meta.tags && data.meta.tags.length > 0}
			<div class="flex flex-wrap gap-1.5">
				{#each data.meta.tags as tag (tag)}
					<span
						class="font-code-block border-secondary-container text-secondary border px-1.5 py-0.5 text-xs uppercase"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</header>

	<!-- Cover image -->
	{#if data.meta.coverImage}
		<img
			src={data.meta.coverImage}
			alt={data.meta.title}
			class="pane-border h-56 w-full object-cover"
		/>
	{/if}

	<!-- Post content -->
	{#if viewMode === 'terminal'}
		<!-- Terminal view: dense, code-friendly -->
		<div class="pane-border pane-glow-secondary bg-surface p-6 md:p-8">
			<article
				class="prose prose-invert prose-p:font-body-md prose-headings:font-headline-sm prose-headings:uppercase prose-a:text-primary hover:prose-a:text-on-surface prose-pre:bg-surface-dim prose-code:text-secondary prose-strong:text-on-surface max-w-none"
			>
				<Content />
			</article>
		</div>
	{:else}
		<!-- Markdown preview view: editorial, wider reading width -->
		<div class="pane-border bg-surface p-6 md:p-10">
			<article
				class="prose prose-invert prose-p:font-body-md prose-p:leading-relaxed prose-headings:font-headline-sm prose-headings:text-primary prose-a:text-secondary hover:prose-a:underline prose-pre:bg-surface-dim prose-code:text-secondary prose-img:border prose-img:border-outline-variant prose-strong:text-on-surface mx-auto max-w-3xl"
			>
				<Content />
			</article>
		</div>
	{/if}

	<!-- Bottom navigation -->
	<div class="border-outline-variant flex justify-start border-t pt-6">
		<a
			href={resolve('/blog')}
			class="font-code-block text-secondary hover:text-primary inline-flex items-center gap-2 text-sm transition-colors"
		>
			<span aria-hidden="true">←</span> back to all notes
		</a>
	</div>
</div>
