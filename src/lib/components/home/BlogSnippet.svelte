<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section
	class="py-16 border-b border-outline-variant"
	id="blog"
>
	<div class="mb-8 flex items-center gap-2">
		<span
			class="material-symbols-outlined text-primary"
			aria-hidden="true">terminal</span
		>
		<h2 class="font-headline-md text-primary">{$_('blog.title')}</h2>
	</div>
	<div class="flex flex-col gap-4">
		<!-- Blog Post 1 -->
		<article class="p-6 bg-surface pane-border pane-glow-primary group cursor-pointer rounded-none">
			<div class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
				<h3
					class="font-headline-md text-on-surface group-hover:text-primary transition-colors uppercase"
				>
					{$_('blog.post1.title')}
				</h3>
				<time class="font-code-block text-on-surface-variant text-sm">{$_('blog.post1.date')}</time>
			</div>
			<p class="font-body-md text-on-surface-variant">
				{$_('blog.post1.description')}
			</p>
		</article>
		<!-- Blog Post 2 -->
		<article class="p-6 bg-surface pane-border pane-glow-primary group cursor-pointer rounded-none">
			<div class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
				<h3
					class="font-headline-md text-on-surface group-hover:text-primary transition-colors uppercase"
				>
					{$_('blog.post2.title')}
				</h3>
				<time class="font-code-block text-on-surface-variant text-sm">{$_('blog.post2.date')}</time>
			</div>
			<p class="font-body-md text-on-surface-variant">
				{$_('blog.post2.description')}
			</p>
		</article>
		<a
			class="btn-primary font-label-sm px-6 py-3 mt-6 uppercase inline-block w-max hover:-translate-y-1 transform transition-all"
			href="/blog">{$_('blog.btnAllNotes')}</a
		>
	</div>
</section>
