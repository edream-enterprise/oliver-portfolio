<script lang="ts">
</script>

<section class="py-16 border-b border-outline-variant" id="blog">
	<div class="mb-8 flex items-center gap-2">
		<span class="material-symbols-outlined text-primary" aria-hidden="true">terminal</span>
		<h2 class="font-headline-md text-primary">/var/log/latest_notes</h2>
	</div>
	<div class="flex flex-col gap-4">
		<!-- Blog Post 1 -->
		<article
			class="p-6 bg-[#141414] pane-border pane-glow-primary group cursor-pointer rounded-none"
		>
			<div class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
				<h3
					class="font-headline-md text-on-surface group-hover:text-primary transition-colors uppercase"
				>
					Optimizing Neovim for Vue/Svelte
				</h3>
				<time class="font-code-block text-on-surface-variant text-sm">2024-10-24</time>
			</div>
			<p class="font-body-md text-on-surface-variant">
				A deep dive into setting up LSP, Treesitter, and formatting tools to create a blazing fast
				development environment for modern frontend frameworks without the bloat of an IDE.
			</p>
		</article>
		<!-- Blog Post 2 -->
		<article
			class="p-6 bg-[#141414] pane-border pane-glow-primary group cursor-pointer rounded-none"
		>
			<div class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
				<h3
					class="font-headline-md text-on-surface group-hover:text-primary transition-colors uppercase"
				>
					Dokploy + Podman on Alma Linux
				</h3>
				<time class="font-code-block text-on-surface-variant text-sm">2024-09-12</time>
			</div>
			<p class="font-body-md text-on-surface-variant">
				Moving away from Docker daemon dependencies. How I configured Dokploy to seamlessly manage
				rootless Podman containers on a fresh Alma Linux instance for secure, self-hosted
				deployments.
			</p>
		</article>
		<a
			class="bg-primary text-surface font-mono text-[10px] px-6 py-3 mt-6 uppercase inline-block w-max hover:-translate-y-1 transform transition-all hidden"
			href="/blog">[ ls -l /var/log/todas_las_notas ]</a
		>
		<a
			class="btn-primary font-label-sm px-6 py-3 mt-6 uppercase inline-block w-max hover:-translate-y-1 transform transition-all"
			href="/blog">[ ls -l /var/log/todas_las_notas ]</a
		>
	</div>
</section>
