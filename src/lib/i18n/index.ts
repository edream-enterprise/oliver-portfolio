import { init, addMessages, locale } from 'svelte-i18n';
import { browser } from '$app/environment';
import en from './en.json';
import es from './es.json';

addMessages('en', en);
addMessages('es', es);

const SUPPORTED_LANGUAGES = ['en', 'es'] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const getBrowserLocale = (): SupportedLanguage => {
	if (browser) {
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

const initialLocale = getBrowserLocale();

init({
	fallbackLocale: 'en',
	initialLocale
});

if (browser) {
	locale.set(initialLocale);
}
