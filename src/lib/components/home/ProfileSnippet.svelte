<script lang="ts">
	import { _ } from 'svelte-i18n';
	import PaneCard from '$lib/components/ui/PaneCard.svelte';
	import ButtonSecondary from '$lib/components/ui/ButtonSecondary.svelte';
</script>

<section class="py-16 border-b border-outline-variant" id="profile">
	<div class="mb-8 flex items-center gap-2">
		<span class="material-symbols-outlined text-primary" aria-hidden="true">person</span>
		<h2 class="font-headline-md text-base sm:text-lg text-primary break-all">{$_('profile.title')}</h2>
	</div>
	<PaneCard variant="none" class="gap-4">
		<p class="font-body-lg text-on-surface">
			{$_('profile.description')}
		</p>
		<ul class="font-code-block text-on-surface-variant list-none space-y-2">
			<li>
				<span class="text-secondary">&gt;</span>
				{$_('profile.timeline.2022')}
			</li>
			<li>
				<span class="text-secondary">&gt;</span>
				{$_('profile.timeline.2023')}
			</li>
			<li>
				<span class="text-secondary">&gt;</span>
				{$_('profile.timeline.2024')}
			</li>
			<li>
				<span class="text-secondary">&gt;</span>
				{$_('profile.timeline.2025')}
			</li>
			<li>
				<span class="text-secondary">&gt;</span>
				{$_('profile.timeline.2026')}
			</li>
		</ul>
		<ButtonSecondary href="/about" class="mt-6 w-full sm:w-max">
			{$_('profile.btnBio')}
		</ButtonSecondary>
	</PaneCard>
</section>
