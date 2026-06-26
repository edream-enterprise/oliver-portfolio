<script lang="ts">
	import PaneCard from '$lib/components/ui/PaneCard.svelte';
	import { _ } from 'svelte-i18n';

	const years = ['2026', '2025', '2024', '2023', '2022', '2021', '2015'];
</script>

<svelte:head>
	<title>{$_('about.pageTitle')}</title>
	<meta name="description" content={$_('about.pageDescription')} />
</svelte:head>

<div class="flex flex-col gap-12 pb-12 w-full max-w-4xl mx-auto">
	<!-- Component 1: Terminal Output (The Introduction) -->
	<section>
		<div class="mb-4 flex items-center gap-2">
			<span class="material-symbols-outlined text-primary" aria-hidden="true">terminal</span>
			<h1 class="font-headline-lg text-primary">{$_('about.title')}</h1>
		</div>
		<PaneCard class="overflow-x-auto text-sm md:text-base">
			<div class="font-code-block flex items-center gap-2 mb-6">
				<span class="text-primary font-bold">oliver@almalinux:~$</span>
				<span class="text-on-surface-variant">{$_('about.command')}</span>
			</div>
			<div class="font-code-block space-y-6 text-on-surface-variant whitespace-pre-wrap">
				<div>
					<span class="text-primary font-bold">{$_('about.userInfo')}</span>
{$_('about.userName')}
{$_('about.userRole')}
{$_('about.userStatus')}
					<span class="text-secondary font-bold">{$_('about.userStatusValue')}</span><span>{$_('about.userStatusDesc')}</span>
				</div>

				<div>
					<span class="text-primary font-bold">{$_('about.aboutTitle')}</span>
					{$_('about.aboutText')}
				</div>
			</div>
		</PaneCard>
	</section>

	<!-- Component 2: The Timeline Log (The Journey) -->
	<section>
		<div class="mb-4 flex items-center gap-2">
			<h2 class="font-headline-md text-primary">📂 {$_('about.timelineTitle')}</h2>
		</div>
		<PaneCard>
			<div class="border-l border-outline-variant ml-3 space-y-8 py-2">
				{#each years as year}
					<div
						class="relative pl-6 before:absolute before:-left-[5px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-primary before:rounded-none"
					>
						<div class="font-code-block text-secondary text-sm mb-1">[ {year} ]</div>
						<h3 class="text-primary font-headline-md uppercase mb-2">
							{$_(`about.timeline.${year}.title`)}
						</h3>
						<p class="font-body-md text-on-surface-variant">
							{$_(`about.timeline.${year}.description`)}
						</p>
					</div>
				{/each}
			</div>
		</PaneCard>
	</section>

	<!-- Component 3: Configuration File (Philosophy) -->
	<section>
		<div class="mb-4 flex items-center gap-2">
			<h2 class="font-headline-md text-primary">⚙️ {$_('about.configTitle')}</h2>
		</div>
		<PaneCard class="overflow-x-auto text-sm md:text-base">
			<pre class="font-code-block leading-relaxed"><code class="text-on-surface-variant"
					><span class="text-secondary opacity-80"
						># ---------------------------------------------------------
{$_('about.configComment1')}
# ---------------------------------------------------------
{$_('about.configComment2')}
{$_('about.configComment3')}
{$_('about.configComment4')} </span>

UNIX_PHILOSOPHY=<span class="text-primary">true</span>
DRIVEN_BY=<span class="text-primary">"Efficiency and Open Source"</span>
DISTRACTIONS=<span class="text-primary">0</span>

<span class="text-secondary opacity-80"
						># ---------------------------------------------------------
{$_('about.configComment5')}
# ---------------------------------------------------------
{$_('about.configComment6')}
{$_('about.configComment7')}
{$_('about.configComment8')}
{$_('about.configComment9')}</span
					>

<span class="text-secondary">export</span> WORKFLOW=<span class="text-primary"
						>"Terminal-driven"</span
					></code
				></pre>
		</PaneCard>
	</section>
</div>
