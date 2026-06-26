<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section
	class="py-16 border-b border-outline-variant"
	id="architecture"
>
	<div class="mb-8 flex items-center gap-2">
		<span
			class="material-symbols-outlined text-primary"
			aria-hidden="true">account_tree</span
		>
		<h2 class="font-headline-md text-primary">{$_('architecture.title')}</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<!-- Arch Card 1 -->
		<div class="flex flex-col bg-surface pane-border pane-glow-secondary p-6">
			<h3 class="font-headline-md text-secondary mb-4">{$_('architecture.frontend.title')}</h3>
			<p class="font-body-md text-on-surface-variant">
				{$_('architecture.frontend.description')}
			</p>
		</div>
		<!-- Arch Card 2 -->
		<div class="flex flex-col bg-surface pane-border pane-glow-secondary p-6">
			<h3 class="font-headline-md text-secondary mb-4">{$_('architecture.backend.title')}</h3>
			<p class="font-body-md text-on-surface-variant">
				{$_('architecture.backend.description')}
			</p>
		</div>
		<!-- Arch Card 3 -->
		<div class="flex flex-col bg-surface pane-border pane-glow-secondary p-6">
			<h3 class="font-headline-md text-secondary mb-4">{$_('architecture.devops.title')}</h3>
			<p class="font-body-md text-on-surface-variant">
				{$_('architecture.devops.description')}
			</p>
		</div>
	</div>
</section>
