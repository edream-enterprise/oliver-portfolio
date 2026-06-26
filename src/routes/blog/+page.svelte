<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>{$_('blogPage.title')}</title>
	<meta name="description" content={$_('blogPage.description')} />
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-2 mb-4">
		<span class="material-symbols-outlined text-primary" aria-hidden="true">terminal</span>
		<h1 class="font-headline-lg text-primary uppercase">{$_('blog.pageTitle')}</h1>
	</div>

	<div class="flex flex-col gap-4">
		{#each data.posts as post (post.slug)}
			<a href={resolve(`/blog/${post.slug}`)} class="block group">
				<article
					class="p-6 bg-surface pane-border pane-glow-primary group-hover:-translate-y-1 transform transition-all rounded-none"
				>
					<div class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
						<h2
							class="font-headline-md text-on-surface group-hover:text-primary transition-colors uppercase"
						>
							{post.title}
						</h2>
						<time class="font-code-block text-on-surface-variant text-sm">{post.date}</time>
					</div>
					<p class="font-body-md text-on-surface-variant">
						{post.excerpt}
					</p>
				</article>
			</a>
		{/each}
	</div>
</div>
