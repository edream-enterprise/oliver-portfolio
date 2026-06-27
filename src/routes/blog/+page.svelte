<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { resolve } from '$app/paths';
	import BlogViewToggle from '$lib/components/blog/BlogViewToggle.svelte';
	import { getLocalizedBlogPosts } from '$lib/blog';
	import { globalState } from '$lib/state.svelte';

	let { data } = $props();
	let localizedPosts = $derived(getLocalizedBlogPosts(data.posts, globalState.language));

	type ViewMode = 'terminal' | 'preview';
	let viewMode = $state<ViewMode>('terminal');
</script>

<svelte:head>
	<title>{$_('blogPage.title')}</title>
	<meta name="description" content={$_('blogPage.description')} />
</svelte:head>

<div class="flex flex-col gap-6">
	<!-- Header Row -->
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div class="flex items-center gap-2">
			<span class="material-symbols-outlined text-primary" aria-hidden="true">terminal</span>
			<h1 class="font-headline-lg text-primary uppercase">{$_('blog.pageTitle')}</h1>
		</div>
		<BlogViewToggle onchange={(m) => (viewMode = m)} />
	</div>

	<!-- Terminal View -->
	{#if viewMode === 'terminal'}
		<div class="flex flex-col gap-4">
			{#each localizedPosts as post (post.slug)}
				<a href={resolve(`/blog/${post.slug}`)} class="group block">
					<article
						class="pane-border pane-glow-primary bg-surface transform rounded-none p-5 transition-all group-hover:-translate-y-0.5"
					>
						<!-- Top bar: title + date -->
						<div class="mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
							<h2
								class="font-headline-md text-on-surface group-hover:text-primary uppercase transition-colors"
							>
								{post.title}
							</h2>
							<time class="font-code-block text-on-surface-variant shrink-0 text-xs"
								>[ {post.date} ]</time
							>
						</div>

						<!-- Excerpt -->
						<p class="font-body-md text-on-surface-variant mb-3 leading-relaxed">
							{post.excerpt}
						</p>

						<!-- Tags -->
						{#if post.tags && post.tags.length > 0}
							<div class="flex flex-wrap gap-1.5">
								{#each post.tags as tag (tag)}
									<span
										class="font-code-block border-secondary-container text-secondary border px-1.5 py-0.5 text-xs uppercase"
									>
										{tag}
									</span>
								{/each}
							</div>
						{/if}
					</article>
				</a>
			{/each}
		</div>

		<!-- Markdown Preview View -->
	{:else}
		<div class="flex flex-col gap-6">
			{#each localizedPosts as post (post.slug)}
				<a href={resolve(`/blog/${post.slug}`)} class="group block">
					<article
						class="pane-border bg-surface group-hover:border-primary transition-all duration-200 p-6 md:p-8"
					>
						<!-- Cover image placeholder -->
						{#if post.coverImage}
							<img
								src={post.coverImage}
								alt={post.title}
								class="border-outline-variant mb-5 h-40 w-full border object-cover"
							/>
						{/if}

						<!-- Date chip -->
						<div class="font-code-block text-on-surface-variant mb-3 text-xs uppercase">
							{post.date}
						</div>

						<!-- Title -->
						<h2
							class="font-headline-md text-on-surface group-hover:text-primary mb-3 transition-colors"
						>
							{post.title}
						</h2>

						<!-- Excerpt -->
						<p class="font-body-md text-on-surface-variant mb-4 leading-relaxed">
							{post.excerpt}
						</p>

						<!-- Tags + read more -->
						<div class="flex flex-wrap items-center justify-between gap-3">
							<div class="flex flex-wrap gap-1.5">
								{#if post.tags && post.tags.length > 0}
									{#each post.tags as tag (tag)}
										<span
											class="font-code-block border-secondary-container text-secondary border px-2 py-0.5 text-xs"
										>
											{tag}
										</span>
									{/each}
								{/if}
							</div>
							<span class="font-code-block text-primary group-hover:underline text-xs uppercase">
								{$_('blog.readMore')} →
							</span>
						</div>
					</article>
				</a>
			{/each}
		</div>
	{/if}
</div>
