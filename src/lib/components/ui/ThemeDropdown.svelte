<script lang="ts">
	import { globalState, setTheme, toggleThemeDropdown } from '$lib/state.svelte';
	import { _ } from 'svelte-i18n';

	const themes = [
		{ id: 'default', name: 'Default' },
		{ id: 'dracula', name: 'Dracula' },
		{ id: 'gruvbox', name: 'Gruvbox' },
		{ id: 'light', name: 'Light' },
		{ id: 'tokyonight', name: 'Tokyo Night' },
		{ id: 'onedarkpro', name: 'One Dark Pro' },
		{ id: 'cyberpurple', name: 'Cyber Purple 77' },
		{ id: 'abyss', name: 'Deep Abyss' }
	];

	function handleThemeSelect(themeId: string) {
		setTheme(themeId);
		toggleThemeDropdown();
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') globalState.themeDropdownOpen = false;
	}}
/>

{#if globalState.themeDropdownOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="fixed inset-0 z-[90]" onclick={toggleThemeDropdown}></div>
	<div
		class="fixed top-10 right-4 w-48 bg-surface border border-outline-variant shadow-xl z-[100] flex flex-col font-code-block text-sm"
	>
		<div
			class="px-3 py-2 border-b border-outline-variant text-on-surface-variant text-xs font-bold bg-surface-variant"
		>
			{$_('header.selectTheme')}
		</div>
		{#each themes as theme (theme.id)}
			<button
				class="w-full text-left px-4 py-2 hover:bg-primary-container hover:text-white transition-colors duration-150 flex items-center justify-between {globalState.theme ===
				theme.id
					? 'text-primary font-bold'
					: 'text-on-surface'}"
				onclick={() => handleThemeSelect(theme.id)}
			>
				{theme.name}
				{#if globalState.theme === theme.id}
					<span class="material-symbols-outlined text-[14px]">check</span>
				{/if}
			</button>
		{/each}
	</div>
{/if}
