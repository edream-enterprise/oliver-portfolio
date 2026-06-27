<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { resolve } from '$app/paths';
	import PaneCard from '$lib/components/ui/PaneCard.svelte';
	import ButtonPrimary from '$lib/components/ui/ButtonPrimary.svelte';
	import type { BlogPostMeta } from '$lib/blog';

	let { posts }: { posts: BlogPostMeta[] } = $props();
</script>

<section class="border-outline-variant border-b py-16" id="blog">
	<div class="mb-8 flex items-center gap-2">
		<span class="material-symbols-outlined text-primary" aria-hidden="true">terminal</span>
		<h2 class="font-headline-md text-primary break-all text-base sm:text-lg">{$_('blog.title')}</h2>
	</div>
	<div class="flex flex-col gap-4">
		{#each posts as post (post.slug)}
			<PaneCard variant="primary" href={resolve(`/blog/${post.slug}`)} class="group">
				<div class="mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
					<h3
						class="font-headline-md text-on-surface group-hover:text-primary break-words uppercase transition-colors"
					>
						{post.title}
					</h3>
					<time class="font-code-block text-on-surface-variant text-sm">{post.date}</time>
				</div>
				<p class="font-body-md text-on-surface-variant mb-3">
					{post.excerpt}
				</p>
				{#if post.tags && post.tags.length > 0}
					<div class="flex flex-wrap gap-1.5">
						{#each post.tags as tag (tag)}
							<span
								class="font-code-block text-secondary border-secondary-container border px-1.5 py-0.5 text-xs uppercase"
							>
								{tag}
							</span>
						{/each}
					</div>
				{/if}
			</PaneCard>
		{/each}
		<ButtonPrimary href={resolve('/blog')} class="mt-6 w-full sm:w-max">
			{$_('blog.btnAllNotes')}
		</ButtonPrimary>
	</div>
</section>
