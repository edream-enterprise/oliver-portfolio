export const globalState = $state({
	theme: 'default',
	language: 'en',
	systemMonitorOpen: false,
	themeDropdownOpen: false,
	helpModalOpen: false
});

// Helper functions to manage state
export function setTheme(newTheme: string) {
	globalState.theme = newTheme;
}

export function toggleLanguage() {
	globalState.language = globalState.language === 'en' ? 'es' : 'en';
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
