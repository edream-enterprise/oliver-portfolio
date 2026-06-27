<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { resolve } from '$app/paths';
	import BlogViewToggle from '$lib/components/blog/BlogViewToggle.svelte';
	import { globalState } from '$lib/state.svelte';

	let { data } = $props();
	let activePost = $derived(
		data.variants.find((post) => post.language === globalState.language) ??
			data.variants.find((post) => post.language === 'en') ??
			data.variants[0]
	);
	let Content = $derived(activePost.content);

	type ViewMode = 'terminal' | 'preview';
	let viewMode = $state<ViewMode>('terminal');
</script>

<svelte:head>
	<title>{activePost.title} | Oliver's Portfolio</title>
	<meta name="description" content={activePost.excerpt ?? ''} />
	{#if activePost.canonicalUrl}
		<link rel="canonical" href={activePost.canonicalUrl} />
	{/if}
</svelte:head>

<div class="flex flex-col gap-6">
	<!-- Back navigation -->
	<a
		href={resolve('/blog')}
		class="font-code-block text-secondary hover:text-primary -mb-2 inline-flex w-max items-center gap-2 text-sm transition-colors"
	>
		<span aria-hidden="true">←</span>
		{$_('blog.backCommand')}
	</a>

	<!-- Post header -->
	<header class="pane-border bg-surface p-6 md:p-8">
		<!-- Top row: metadata + view toggle -->
		<div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
			<div class="flex flex-col gap-2">
				<time class="font-code-block text-on-surface-variant text-xs uppercase">
					[ {$_('blog.dateLabel')}: {activePost.date} ]
				</time>
				<span class="font-code-block text-on-surface-variant text-xs uppercase">
					[ {$_('blog.languageLabel')}: {activePost.language} ]
				</span>
			</div>
			<BlogViewToggle onchange={(m) => (viewMode = m)} />
		</div>

		<!-- Title -->
		<h1 class="font-headline-lg text-primary mb-3 uppercase leading-tight">
			{activePost.title}
		</h1>

		<!-- Excerpt -->
		{#if activePost.excerpt}
			<p class="font-body-md text-on-surface-variant mb-4 leading-relaxed">
				{activePost.excerpt}
			</p>
		{/if}

		<!-- Tags -->
		{#if activePost.tags && activePost.tags.length > 0}
			<div class="flex flex-wrap gap-1.5">
				{#each activePost.tags as tag (tag)}
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
	{#if activePost.coverImage}
		<img
			src={activePost.coverImage}
			alt={activePost.title}
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
			<span aria-hidden="true">←</span>
			{$_('blog.backToAllNotes')}
		</a>
	</div>
</div>
