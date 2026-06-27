import { locale } from 'svelte-i18n';
import { browser } from '$app/environment';

const getInitialLanguage = (): 'en' | 'es' => {
	if (browser) {
		const stored = localStorage.getItem('language');
		if (stored === 'en' || stored === 'es') {
			return stored;
		}
		const browserLang = navigator.language.split('-')[0];
		if (browserLang === 'en' || browserLang === 'es') {
			return browserLang;
		}
	}
	return 'en';
};

export const globalState = $state({
	theme: 'default',
	language: getInitialLanguage(),
	systemMonitorOpen: false,
	themeDropdownOpen: false,
	helpModalOpen: false,
	glowMode: false
});

export function setTheme(newTheme: string) {
	globalState.theme = newTheme;
}

export function toggleLanguage() {
	const newLang = globalState.language === 'en' ? 'es' : 'en';
	globalState.language = newLang;
	locale.set(newLang);
	if (browser) {
		localStorage.setItem('language', newLang);
	}
}

export function setLanguage(newLang: 'en' | 'es') {
	globalState.language = newLang;
	locale.set(newLang);
	if (browser) {
		localStorage.setItem('language', newLang);
	}
}

export function toggleSystemMonitor() {
	globalState.systemMonitorOpen = !globalState.systemMonitorOpen;
	if (globalState.systemMonitorOpen) {
		globalState.themeDropdownOpen = false;
		globalState.helpModalOpen = false;
	}
}

export function toggleThemeDropdown() {
	globalState.themeDropdownOpen = !globalState.themeDropdownOpen;
	if (globalState.themeDropdownOpen) {
		globalState.systemMonitorOpen = false;
		globalState.helpModalOpen = false;
	}
}

export function toggleHelpModal() {
	globalState.helpModalOpen = !globalState.helpModalOpen;
	if (globalState.helpModalOpen) {
		globalState.systemMonitorOpen = false;
		globalState.themeDropdownOpen = false;
	}
}

export function toggleGlowMode() {
	globalState.glowMode = !globalState.glowMode;
}

export function setGlowMode(value: boolean) {
	globalState.glowMode = value;
}
