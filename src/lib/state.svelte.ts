import { locale } from 'svelte-i18n';

const SUPPORTED_LANGUAGES = ['en', 'es'] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const getInitialLanguage = (): SupportedLanguage => {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('language');
		if (stored && SUPPORTED_LANGUAGES.includes(stored as SupportedLanguage)) {
			return stored as SupportedLanguage;
		}

		const browserLang = navigator.language.split('-')[0];
		if (SUPPORTED_LANGUAGES.includes(browserLang as SupportedLanguage)) {
			return browserLang as SupportedLanguage;
		}
	}
	return 'en';
};

export const globalState = $state({
	theme: 'default',
	language: getInitialLanguage(),
	systemMonitorOpen: false,
	themeDropdownOpen: false,
	helpModalOpen: false
});

export function setTheme(newTheme: string) {
	globalState.theme = newTheme;
}

export function toggleLanguage() {
	const newLang = globalState.language === 'en' ? 'es' : 'en';
	globalState.language = newLang;
	locale.set(newLang);
	if (typeof window !== 'undefined') {
		localStorage.setItem('language', newLang);
	}
}

export function toggleSystemMonitor() {
	globalState.systemMonitorOpen = !globalState.systemMonitorOpen;
	// Close dropdown if open
	if (globalState.systemMonitorOpen) {
		globalState.themeDropdownOpen = false;
		globalState.helpModalOpen = false;
	}
}

export function toggleThemeDropdown() {
	globalState.themeDropdownOpen = !globalState.themeDropdownOpen;
	// Close monitor if open
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
