<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { resolve } from '$app/paths';
	import ButtonPrimary from '$lib/components/ui/ButtonPrimary.svelte';
	import ButtonSecondary from '$lib/components/ui/ButtonSecondary.svelte';
	import PaneCard from '$lib/components/ui/PaneCard.svelte';
	import { getLocalizedProjects } from '$lib/projects';
	import { globalState } from '$lib/state.svelte';

	let { data } = $props();
	let localizedProjects = $derived(getLocalizedProjects(data.projects, globalState.language));
</script>

<svelte:head>
	<title>{$_('projectsPage.title')}</title>
	<meta name="description" content={$_('projectsPage.description')} />
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
		<div class="flex flex-col gap-3">
			<a
				href={resolve('/#projects')}
				class="font-code-block text-secondary hover:text-primary inline-flex w-max items-center gap-2 text-sm transition-colors"
			>
				<span aria-hidden="true">&larr;</span>
				{$_('projects.backCommand')}
			</a>
			<div class="flex items-center gap-2">
				<span class="material-symbols-outlined text-primary" aria-hidden="true">folder_open</span>
				<h1 class="font-headline-lg text-primary uppercase">{$_('projects.pageTitle')}</h1>
			</div>
		</div>
		<span class="font-code-block text-on-surface-variant text-xs uppercase">
			[ {localizedProjects.length}
			{$_('projects.countLabel')} ]
		</span>
	</div>

	{#if localizedProjects.length > 0}
		<div class="grid gap-4 md:grid-cols-2">
			{#each localizedProjects as project (project.slug)}
				<PaneCard
					variant="primary"
					class="group rounded-none transition-colors hover:border-primary"
				>
					<article class="flex h-full flex-col">
						<div class="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
							<h2
								class="font-headline-md text-on-surface group-hover:text-primary uppercase transition-colors"
							>
								{project.title}
							</h2>
							<span class="font-code-block text-on-surface-variant shrink-0 text-xs uppercase">
								#{project.order.toString().padStart(2, '0')}
							</span>
						</div>

						<p class="font-body-md text-on-surface-variant mb-4 leading-relaxed">
							{project.description}
						</p>

						{#if project.tags && project.tags.length > 0}
							<div class="mb-5 mt-auto flex flex-wrap gap-1.5">
								{#each project.tags as tag (tag)}
									<span
										class="font-code-block border-secondary-container text-secondary border px-1.5 py-0.5 text-xs uppercase"
									>
										{tag}
									</span>
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
	{:else}
		<PaneCard variant="secondary">
			<p class="font-body-md text-on-surface-variant">{$_('projects.emptyState')}</p>
		</PaneCard>
	{/if}
</div>
