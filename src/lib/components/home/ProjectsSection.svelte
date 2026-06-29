<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { resolve } from '$app/paths';
	import ButtonPrimary from '$lib/components/ui/ButtonPrimary.svelte';
	import ButtonSecondary from '$lib/components/ui/ButtonSecondary.svelte';
	import PaneCard from '$lib/components/ui/PaneCard.svelte';
	import { getLocalizedProjects, type ProjectMeta } from '$lib/projects';
	import { globalState } from '$lib/state.svelte';

	let { projects }: { projects: ProjectMeta[] } = $props();
	let scrollContainer: HTMLElement | undefined = $state();
	let localizedProjects = $derived(
		getLocalizedProjects(projects, globalState.language, { featuredOnly: true })
	);

	const scrollLeft = () => {
		if (scrollContainer) {
			const cardWidth = scrollContainer.querySelector('article')?.clientWidth || 380;
			scrollContainer.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' }); // 24px is gap-6
		}
	};

	const scrollRight = () => {
		if (scrollContainer) {
			const cardWidth = scrollContainer.querySelector('article')?.clientWidth || 380;
			scrollContainer.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
		}
	};
</script>

<section class="border-outline-variant border-b py-16" id="projects">
	<div class="mb-8 flex items-center justify-between">
		<div class="flex items-center gap-2">
			<span class="material-symbols-outlined text-primary" aria-hidden="true">folder_open</span>
			<h2 class="font-headline-md text-primary break-all text-base sm:text-lg">
				{$_('projects.title')}
			</h2>
		</div>
		<div class="hidden items-center gap-2 sm:flex">
			<button
				class="bg-surface pane-border text-primary hover:bg-surface-variant hover:text-secondary px-3 py-1 font-mono transition-colors focus:outline-none"
				aria-label={$_('projects.prevProjects')}
				onclick={scrollLeft}
			>
				&lt;
			</button>
			<button
				class="bg-surface pane-border text-primary hover:bg-surface-variant hover:text-secondary px-3 py-1 font-mono transition-colors focus:outline-none"
				aria-label={$_('projects.nextProjects')}
				onclick={scrollRight}
			>
				&gt;
			</button>
		</div>
	</div>
	<div
		bind:this={scrollContainer}
		class="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
	>
		{#each localizedProjects as project (project.slug)}
			<PaneCard
				variant="secondary"
				class="group w-[85vw] flex-shrink-0 snap-start rounded-none transition-colors hover:border-primary sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
			>
				<article class="flex h-full flex-col">
					<h3
						class="font-headline-md text-secondary group-hover:text-primary mb-4 uppercase transition-colors"
					>
						{project.title}
					</h3>
					<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
						{project.description}
					</p>
					{#if project.tags && project.tags.length > 0}
						<div class="mb-5 mt-auto flex flex-wrap gap-2">
							{#each project.tags as tag (tag)}
								<span
									class="font-label-sm bg-surface-variant text-on-surface-variant border-outline-variant border px-2 py-1"
									>[{tag}]</span
								>
							{/each}
						</div>
					{/if}
					{#if project.repoUrl || project.demoUrl}
						<div class="flex flex-col gap-2 sm:flex-row">
							{#if project.repoUrl}
								<ButtonPrimary
									href={project.repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="w-full sm:w-auto"
								>
									{$_('projects.repo')}
								</ButtonPrimary>
							{/if}
							{#if project.demoUrl}
								<ButtonSecondary
									href={project.demoUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="w-full sm:w-auto"
								>
									{$_('projects.demo')}
								</ButtonSecondary>
							{/if}
						</div>
					{/if}
				</article>
			</PaneCard>
		{/each}
	</div>
	<ButtonSecondary href={resolve('/projects')} class="mt-2 w-full sm:w-max">
		{$_('projects.viewAll')}
	</ButtonSecondary>
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
