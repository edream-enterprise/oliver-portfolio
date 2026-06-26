<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section
	class="py-16 border-b border-outline-variant"
	id="experience"
>
	<div class="mb-8 flex items-center gap-2">
		<span
			class="material-symbols-outlined text-primary"
			aria-hidden="true">work_history</span
		>
		<h2 class="font-headline-md text-primary">{$_('experience.title')}</h2>
	</div>
	<div class="bg-surface pane-border p-6">
		<div class="border-l border-outline-variant ml-3 space-y-8">
			<div
				class="relative pl-6 before:absolute before:-left-[5px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-primary before:rounded-none"
			>
				<div class="font-code-block text-secondary text-sm mb-1">{$_('experience.job1.date')}</div>
				<h3 class="text-primary font-headline-md uppercase mb-2">
					{$_('experience.job1.title')}
				</h3>
				<p class="font-body-md text-on-surface-variant">
					{$_('experience.job1.description')}
				</p>
			</div>
			<div
				class="relative pl-6 before:absolute before:-left-[5px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-primary before:rounded-none"
			>
				<div class="font-code-block text-secondary text-sm mb-1">{$_('experience.job2.date')}</div>
				<h3 class="text-primary font-headline-md uppercase mb-2">
					{$_('experience.job2.title')}
				</h3>
				<p class="font-body-md text-on-surface-variant">
					{$_('experience.job2.description')}
				</p>
			</div>
		</div>
	</div>
</section>
