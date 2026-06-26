<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section
	class="py-16 border-b border-outline-variant"
	id="profile"
>
	<div class="mb-8 flex items-center gap-2">
		<span
			class="material-symbols-outlined text-primary"
			aria-hidden="true">person</span
		>
		<h2 class="font-headline-md text-primary">{$_('profile.title')}</h2>
	</div>
	<div class="bg-surface pane-border p-6 flex flex-col gap-4">
		<p class="font-body-lg text-on-surface">
			{$_('profile.description')}
		</p>
		<ul class="font-code-block text-on-surface-variant list-none space-y-2">
			<li>
				<span class="text-secondary">&gt;</span> {$_('profile.timeline.2022')}
			</li>
			<li>
				<span class="text-secondary">&gt;</span> {$_('profile.timeline.2023')}
			</li>
			<li>
				<span class="text-secondary">&gt;</span> {$_('profile.timeline.2024')}
			</li>
			<li>
				<span class="text-secondary">&gt;</span> {$_('profile.timeline.2025')}
			</li>
			<li>
				<span class="text-secondary">&gt;</span> {$_('profile.timeline.2026')}
			</li>
		</ul>
		<a
			class="btn-secondary font-label-sm px-4 py-2 mt-6 uppercase inline-block w-max transition-colors"
			href="/about">{$_('profile.btnBio')}</a
		>
	</div>
</section>
