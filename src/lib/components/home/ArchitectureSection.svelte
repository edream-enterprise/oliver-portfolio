<script lang="ts">
	import { _ } from 'svelte-i18n';
	import PaneCard from '$lib/components/ui/PaneCard.svelte';
</script>

<section class="py-16 border-b border-outline-variant" id="architecture">
	<div class="mb-8 flex items-center gap-2">
		<span class="material-symbols-outlined text-primary" aria-hidden="true">account_tree</span>
		<h2 class="font-headline-md text-base sm:text-lg text-primary break-all">
			{$_('architecture.title')}
		</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<!-- Arch Card 1 -->
		<PaneCard variant="secondary">
			<h3 class="font-headline-md text-base sm:text-lg text-secondary mb-4">
				{$_('architecture.frontend.title')}
			</h3>
			<p class="font-body-md text-on-surface-variant">
				{$_('architecture.frontend.description')}
			</p>
		</PaneCard>
		<!-- Arch Card 2 -->
		<PaneCard variant="secondary">
			<h3 class="font-headline-md text-base sm:text-lg text-secondary mb-4">
				{$_('architecture.backend.title')}
			</h3>
			<p class="font-body-md text-on-surface-variant">
				{$_('architecture.backend.description')}
			</p>
		</PaneCard>
		<!-- Arch Card 3 -->
		<PaneCard variant="secondary">
			<h3 class="font-headline-md text-base sm:text-lg text-secondary mb-4">
				{$_('architecture.devops.title')}
			</h3>
			<p class="font-body-md text-on-surface-variant">
				{$_('architecture.devops.description')}
			</p>
		</PaneCard>
	</div>
</section>
