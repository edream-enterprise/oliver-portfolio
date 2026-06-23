<script lang="ts">
	import { globalState, toggleLanguage, toggleSystemMonitor, toggleThemeDropdown } from '$lib/state.svelte';

	function openNeovim() {
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('neovim-toggle'));
		}
	}
</script>

<header
	class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter h-8 bg-surface border-b border-outline-variant"
>
	<div class="flex items-center h-full">
		<div class="waybar-module font-label-sm text-primary">oliver@almalinux: ~</div>
	</div>
	<nav class="hidden md:flex items-center h-full gap-4">
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/#projects">{globalState.language === 'es' ? 'Proyectos' : 'Projects'}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/#architecture">{globalState.language === 'es' ? 'Arquitectura' : 'Architecture'}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-secondary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/about">{globalState.language === 'es' ? 'Perfil' : 'Profile'}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/#experience">{globalState.language === 'es' ? 'Experiencia' : 'Experience'}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/#stack">Stack</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-secondary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/blog">{globalState.language === 'es' ? 'Jardín' : 'Garden'}</a
		>
	</nav>
	<div class="flex items-center h-full gap-2 text-primary">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			class="material-symbols-outlined text-[16px] waybar-module cursor-pointer hover:opacity-80"
			aria-hidden="true"
			onclick={toggleSystemMonitor}
			title="System Monitor">memory</span
		>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			class="material-symbols-outlined text-[16px] waybar-module cursor-pointer hover:opacity-80"
			aria-hidden="true"
			onclick={openNeovim}
			title="Open Terminal">terminal</span
		>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			class="material-symbols-outlined text-[16px] waybar-module cursor-pointer hover:opacity-80"
			aria-hidden="true"
			onclick={toggleLanguage}
			title="Toggle Language">translate</span
		>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			class="material-symbols-outlined text-[16px] waybar-module cursor-pointer hover:opacity-80"
			aria-hidden="true"
			onclick={toggleThemeDropdown}
			title="Select Theme">palette</span
		>
	</div>
</header>
