<script lang="ts">
	import { globalState, toggleHelpModal } from '$lib/state.svelte';
	import { _ } from 'svelte-i18n';
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') globalState.helpModalOpen = false;
	}}
/>

{#if globalState.helpModalOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center backdrop-blur-sm"
		onclick={toggleHelpModal}
	>
		<div
			class="bg-surface border border-outline-variant p-6 max-w-lg w-full shadow-2xl relative font-code-block"
			onclick={(e) => e.stopPropagation()}
		>
			<button
				class="absolute top-2 right-2 text-on-surface-variant hover:text-error cursor-pointer select-none"
				onclick={toggleHelpModal}
				aria-label={$_('help.close')}
			>
				<span class="material-symbols-outlined">close</span>
			</button>

			<h2 class="text-primary font-bold text-lg mb-4 border-b border-outline-variant pb-2">
				{$_('help.title')}
			</h2>

			<div
				class="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-4 gap-y-4 text-sm text-on-surface"
			>
				<div
					class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0"
				>
					{$_('help.commands.e.command')}
				</div>
				<div class="text-on-surface-variant">
					{$_('help.commands.e.description')}
				</div>

				<div
					class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0"
				>
					{$_('help.commands.colorscheme.command')}
				</div>
				<div class="text-on-surface-variant">
					{$_('help.commands.colorscheme.description')}
				</div>

				<div
					class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0"
				>
					{$_('help.commands.set.command')}
				</div>
				<div class="text-on-surface-variant">
					{$_('help.commands.set.description')}
				</div>

				<div
					class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0"
				>
					{$_('help.commands.hardcopy.command')}
				</div>
				<div class="text-on-surface-variant">
					{$_('help.commands.hardcopy.description')}
				</div>

				<div
					class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0"
				>
					{$_('help.commands.search.command')}
				</div>
				<div class="text-on-surface-variant">
					{$_('help.commands.search.description')}
				</div>

				<div
					class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0"
				>
					{$_('help.commands.n.command')}
				</div>
				<div class="text-on-surface-variant">
					{$_('help.commands.n.description')}
				</div>

				<div
					class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0"
				>
					{$_('help.commands.replace.command')}
				</div>
				<div class="text-on-surface-variant">
					{$_('help.commands.replace.description')}
				</div>

				<div
					class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0"
				>
					{$_('help.commands.q.command')}
				</div>
				<div class="text-on-surface-variant">{$_('help.commands.q.description')}</div>

				<div
					class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0"
				>
					{$_('help.commands.help.command')}
				</div>
				<div class="text-on-surface-variant">{$_('help.commands.help.description')}</div>
			</div>
		</div>
	</div>
{/if}
