<script lang="ts">
	import {
		globalState,
		toggleLanguage,
		toggleSystemMonitor,
		toggleThemeDropdown
	} from '$lib/state.svelte';
	import { resolve } from '$app/paths';
	import { _ } from 'svelte-i18n';

	function openNeovim() {
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('neovim-preset', { detail: 'help' }));
		}
	}
</script>

<header
	class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter h-8 bg-surface border-b border-outline-variant"
>
	<div class="flex items-center h-full">
		<a
			href={resolve('/')}
			class="waybar-module font-label-sm text-primary hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110"
		>
			oliver@almalinux: ~
		</a>
	</div>
	<nav class="hidden md:flex items-center h-full gap-4">
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/#projects">{$_('nav.projects')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/#architecture">{$_('nav.architecture')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-secondary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/about">{$_('nav.profile')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/#experience">{$_('nav.experience')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/#stack">{$_('nav.stack')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-secondary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href="/blog">{$_('nav.garden')}</a
		>
	</nav>
	<div class="flex items-center h-full gap-2 text-primary">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			class="material-symbols-outlined text-[16px] waybar-module cursor-pointer hover:opacity-80"
			aria-hidden="true"
			onclick={toggleSystemMonitor}
			title={$_('header.systemMonitor')}>memory</span
		>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			class="material-symbols-outlined text-[16px] waybar-module cursor-pointer hover:opacity-80"
			aria-hidden="true"
			onclick={openNeovim}
			title={$_('header.openTerminal')}>terminal</span
		>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			class="material-symbols-outlined text-[16px] waybar-module cursor-pointer hover:opacity-80"
			aria-hidden="true"
			onclick={toggleLanguage}
			title={$_('header.toggleLanguage')}>translate</span
		>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			class="material-symbols-outlined text-[16px] waybar-module cursor-pointer hover:opacity-80"
			aria-hidden="true"
			onclick={toggleThemeDropdown}
			title={$_('header.selectTheme')}>palette</span
		>
	</div>
</header>
