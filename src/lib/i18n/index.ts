import { init, register } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('es', () => import('./es.json'));

init({
	fallbackLocale: 'en',
	initialLocale: 'en'
});
