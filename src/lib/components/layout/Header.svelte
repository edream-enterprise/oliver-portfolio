<script lang="ts">
	import { toggleLanguage, toggleSystemMonitor, toggleThemeDropdown } from '$lib/state.svelte';
	import { resolve } from '$app/paths';
	import { _ } from 'svelte-i18n';

	function openNeovim() {
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('neovim-preset', { detail: 'help' }));
		}
	}
</script>

<header
	class="fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center px-gutter h-8 bg-surface border-b border-outline-variant overflow-hidden"
>
	<div class="flex items-center h-full flex-shrink-0 min-w-0">
		<a
			href={resolve('/')}
			class="flex items-center h-full px-2 font-label-sm text-primary hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 whitespace-nowrap"
		>
			oliver@almalinux: ~
		</a>
	</div>
	<nav class="hidden md:flex items-center h-full gap-4">
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href={resolve('/#projects')}>{$_('nav.projects')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href={resolve('/#architecture')}>{$_('nav.architecture')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-secondary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href={resolve('/about')}>{$_('nav.profile')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href={resolve('/#experience')}>{$_('nav.experience')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-primary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href={resolve('/#stack')}>{$_('nav.stack')}</a
		>
		<a
			class="font-label-sm text-on-surface-variant hover:bg-secondary-container hover:text-white transition-all duration-200 hover:brightness-110 px-3 py-1"
			href={resolve('/blog')}>{$_('nav.garden')}</a
		>
	</nav>
	<div class="flex items-center justify-end gap-2 sm:gap-3 text-primary flex-shrink-0">
		<span
			class="material-symbols-outlined text-[16px] flex items-center justify-center w-6 h-6 cursor-pointer hover:opacity-80 hover:bg-surface-variant rounded-sm transition-all"
			aria-hidden="true"
			onclick={toggleSystemMonitor}
			title={$_('header.systemMonitor')}>memory</span
		>
		<span
			class="material-symbols-outlined text-[16px] flex items-center justify-center w-6 h-6 cursor-pointer hover:opacity-80 hover:bg-surface-variant rounded-sm transition-all"
			aria-hidden="true"
			onclick={openNeovim}
			title={$_('header.openTerminal')}>terminal</span
		>
		<span
			class="material-symbols-outlined text-[16px] flex items-center justify-center w-6 h-6 cursor-pointer hover:opacity-80 hover:bg-surface-variant rounded-sm transition-all"
			aria-hidden="true"
			onclick={toggleLanguage}
			title={$_('header.toggleLanguage')}>translate</span
		>
		<span
			class="material-symbols-outlined text-[16px] flex items-center justify-center w-6 h-6 cursor-pointer hover:opacity-80 hover:bg-surface-variant rounded-sm transition-all"
			aria-hidden="true"
			onclick={toggleThemeDropdown}
			title={$_('header.selectTheme')}>palette</span
		>
	</div>
</header>
