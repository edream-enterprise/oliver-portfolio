<script lang="ts">
	import { _ } from 'svelte-i18n';
	import PaneCard from '$lib/components/ui/PaneCard.svelte';
	import ButtonPrimary from '$lib/components/ui/ButtonPrimary.svelte';
</script>

<section class="py-16 border-b border-outline-variant" id="blog">
	<div class="mb-8 flex items-center gap-2">
		<span class="material-symbols-outlined text-primary" aria-hidden="true">terminal</span>
		<h2 class="font-headline-md text-base sm:text-lg text-primary break-all">{$_('blog.title')}</h2>
	</div>
	<div class="flex flex-col gap-4">
		<!-- Blog Post 1 -->
		<PaneCard variant="primary" class="group cursor-pointer">
			<div class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
				<h3
					class="font-headline-md text-on-surface group-hover:text-primary transition-colors uppercase break-words"
				>
					{$_('blog.post1.title')}
				</h3>
				<time class="font-code-block text-on-surface-variant text-sm">{$_('blog.post1.date')}</time>
			</div>
			<p class="font-body-md text-on-surface-variant">
				{$_('blog.post1.description')}
			</p>
		</PaneCard>
		<!-- Blog Post 2 -->
		<PaneCard variant="primary" class="group cursor-pointer">
			<div class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
				<h3
					class="font-headline-md text-on-surface group-hover:text-primary transition-colors uppercase break-words"
				>
					{$_('blog.post2.title')}
				</h3>
				<time class="font-code-block text-on-surface-variant text-sm">{$_('blog.post2.date')}</time>
			</div>
			<p class="font-body-md text-on-surface-variant">
				{$_('blog.post2.description')}
			</p>
		</PaneCard>
		<ButtonPrimary href="/blog" class="mt-6 w-full sm:w-max">
			{$_('blog.btnAllNotes')}
		</ButtonPrimary>
	</div>
</section>
