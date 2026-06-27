<script lang="ts">
	import { _, json } from 'svelte-i18n';
	import PaneCard from '$lib/components/ui/PaneCard.svelte';

	let scrollContainer: HTMLElement | undefined = $state();

	const getTags = (key: string): string[] => {
		const tags = $json(key);
		return Array.isArray(tags) ? tags : [];
	};

	const scrollLeft = () => {
		if (scrollContainer) {
			const cardWidth = scrollContainer.querySelector('a')?.clientWidth || 380;
			scrollContainer.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' }); // 24px is gap-6
		}
	};

	const scrollRight = () => {
		if (scrollContainer) {
			const cardWidth = scrollContainer.querySelector('a')?.clientWidth || 380;
			scrollContainer.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
		}
	};
</script>

<section class="py-16 border-b border-outline-variant" id="projects">
	<div class="mb-8 flex items-center justify-between">
		<div class="flex items-center gap-2">
			<span class="material-symbols-outlined text-primary" aria-hidden="true">folder_open</span>
			<h2 class="font-headline-md text-base sm:text-lg text-primary break-all">{$_('projects.title')}</h2>
		</div>
		<div class="flex items-center gap-2 hidden sm:flex">
			<button
				class="bg-surface pane-border px-3 py-1 text-primary hover:bg-surface-variant hover:text-secondary transition-colors font-mono focus:outline-none"
				aria-label={$_('projects.prevProjects')}
				onclick={scrollLeft}
			>
				&lt;
			</button>
			<button
				class="bg-surface pane-border px-3 py-1 text-primary hover:bg-surface-variant hover:text-secondary transition-colors font-mono focus:outline-none"
				aria-label={$_('projects.nextProjects')}
				onclick={scrollRight}
			>
				&gt;
			</button>
		</div>
	</div>
	<div
		bind:this={scrollContainer}
		class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar"
	>
		<!-- Card 1 -->
		<PaneCard
			href="https://github.com/10Oliver/NeoVim-configuration"
			target="_blank"
			rel="noopener noreferrer"
			variant="secondary"
			class="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start rounded-none transition-colors hover:border-primary group"
		>
			<h3 class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary">
				{$_('projects.project1.title')}
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				{$_('projects.project1.description')}
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				{#each getTags('projects.project1.tags') as tag (tag)}
					<span
						class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
						>[{tag}]</span
					>
				{/each}
			</div>
		</PaneCard>
		<!-- Card 2 -->
		<PaneCard
			href="https://github.com/edream-enterprise/oliver-portfolio"
			target="_blank"
			rel="noopener noreferrer"
			variant="secondary"
			class="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start rounded-none transition-colors hover:border-primary group"
		>
			<h3 class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary">
				{$_('projects.project2.title')}
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				{$_('projects.project2.description')}
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				{#each getTags('projects.project2.tags') as tag (tag)}
					<span
						class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
						>[{tag}]</span
					>
				{/each}
			</div>
		</PaneCard>
		<!-- Card 3 -->
		<PaneCard
			href="https://github.com/10Oliver/gestion-eventos-comunitarios"
			target="_blank"
			rel="noopener noreferrer"
			variant="secondary"
			class="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start rounded-none transition-colors hover:border-primary group"
		>
			<h3
				class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary uppercase"
			>
				{$_('projects.project3.title')}
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				{$_('projects.project3.description')}
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				{#each getTags('projects.project3.tags') as tag (tag)}
					<span
						class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
						>[{tag}]</span
					>
				{/each}
			</div>
		</PaneCard>
		<!-- Card 4 -->
		<PaneCard
			href="https://github.com/10Oliver/desafio-1-lis"
			target="_blank"
			rel="noopener noreferrer"
			variant="secondary"
			class="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start rounded-none transition-colors hover:border-primary group"
		>
			<h3
				class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary uppercase"
			>
				{$_('projects.project4.title')}
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				{$_('projects.project4.description')}
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				{#each getTags('projects.project4.tags') as tag (tag)}
					<span
						class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
						>[{tag}]</span
					>
				{/each}
			</div>
		</PaneCard>
		<!-- Card 5 -->
		<PaneCard
			href="https://github.com/10Oliver/vue3-template"
			target="_blank"
			rel="noopener noreferrer"
			variant="secondary"
			class="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start rounded-none transition-colors hover:border-primary group"
		>
			<h3
				class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary uppercase"
			>
				{$_('projects.project5.title')}
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				{$_('projects.project5.description')}
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				{#each getTags('projects.project5.tags') as tag (tag)}
					<span
						class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
						>[{tag}]</span
					>
				{/each}
			</div>
		</PaneCard>
	</div>
</section>

<style>
	/* Hide scrollbar for the carousel for a cleaner look */
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.hide-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
