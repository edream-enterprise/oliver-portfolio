<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import { resolve } from '$app/paths';

	let active = $state(false);
	let command = $state('');
	let inputRef: HTMLInputElement | undefined = $state();
	let errorMsg = $state('');
	let lastSearchTerm = $state('');

	// History
	let history: string[] = $state([]);
	let historyIndex = $state(-1);

	function handleKeydown(e: KeyboardEvent) {
		// Global toggle with ':' or '/'
		if ((e.key === ':' || e.key === '/') && document.activeElement !== inputRef) {
			e.preventDefault();
			active = true;
			command = e.key === '/' ? '/' : '';
			errorMsg = '';
			historyIndex = history.length;
			setTimeout(() => inputRef?.focus(), 0);
		} else if (e.key === 'n' && document.activeElement !== inputRef && lastSearchTerm) {
			e.preventDefault();
			window.find(lastSearchTerm, false, false, true, false, false, false);
		} else if (e.key === 'Escape' && active) {
			active = false;
			inputRef?.blur();
		}
	}

	function handleToggleEvent() {
		active = true;
		command = '';
		errorMsg = '';
		historyIndex = history.length;
		setTimeout(() => inputRef?.focus(), 0);
	}

	function handlePresetEvent(e: CustomEvent) {
		active = true;
		command = e.detail;
		errorMsg = '';
		historyIndex = history.length;
		setTimeout(() => inputRef?.focus(), 0);
	}

	function handleInputKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			const val = command.trim();
			if (!val) return;

			// Save to history
			if (history[history.length - 1] !== val) {
				history.push(val);
			}
			historyIndex = history.length;

			if (command.startsWith('/')) {
				const searchTerm = command.slice(1);
				if (searchTerm) {
					lastSearchTerm = searchTerm;
					inputRef?.blur();
					const found = window.find(searchTerm, false, false, true, false, false, false);
					if (!found) {
						errorMsg = `E486: Pattern not found: ${searchTerm}`;
						inputRef?.focus();
					} else {
						active = false;
					}
				}
				if (!errorMsg) command = '';
				return;
			}

			const valLower = val.toLowerCase();
			const cmdParts = valLower.split(' ');
			const cmd = cmdParts[0];

			errorMsg = '';

			if (cmd.startsWith('%s/') || cmd.startsWith('s/')) {
				const parts = command.split('/');
				if (parts.length >= 3) {
					const search = parts[1];
					const replace = parts[2];
					const flags = parts[3] || '';

					try {
						const regex = new RegExp(search, flags.includes('g') ? 'g' : '');
						walkAndReplace(document.body, regex, replace);
						active = false;
					} catch {
						errorMsg = `E486: Invalid pattern: ${search}`;
					}
				} else {
					errorMsg = `E474: Invalid argument`;
				}
			} else if (cmd === 'n') {
				if (lastSearchTerm) {
					inputRef?.blur();
					const found = window.find(lastSearchTerm, false, false, true, false, false, false);
					if (!found) {
						errorMsg = `E486: Pattern not found: ${lastSearchTerm}`;
						inputRef?.focus();
					} else {
						active = false;
					}
				} else {
					errorMsg = 'E35: No previous regular expression';
				}
			} else if (cmd === 'q') {
				active = false;
			} else if (cmd === 'help') {
				if (typeof window !== 'undefined') {
					import('$lib/state.svelte').then(({ toggleHelpModal }) => {
						toggleHelpModal();
					});
				}
				active = false;
			} else if (cmd === 'glow') {
				if (typeof window !== 'undefined') {
					import('$lib/state.svelte').then(({ toggleGlowMode }) => {
						toggleGlowMode();
					});
				}
				active = false;
			} else if (cmd === 'colorscheme' && cmdParts.length > 1) {
				const theme = cmdParts[1];
				if (typeof window !== 'undefined') {
					import('$lib/state.svelte').then(({ setTheme }) => {
						setTheme(theme);
					});
				}
				active = false;
			} else if (cmd === 'set' && cmdParts[1]?.startsWith('lang=')) {
				const lang = cmdParts[1].split('=')[1];
				if (lang === 'en' || lang === 'es') {
					if (typeof window !== 'undefined') {
						import('$lib/state.svelte').then(({ setLanguage }) => {
							setLanguage(lang);
						});
					}
					active = false;
				} else {
					errorMsg = `E474: Invalid argument: ${cmdParts[1]}`;
				}
			} else if (cmd === 'e' && cmdParts.length > 1) {
				const dest = cmdParts[1];
				if (['stack', 'architecture', 'projects', 'experience', 'contact'].includes(dest)) {
					if ($page.url.pathname === '/') {
						document.getElementById(dest)?.scrollIntoView({ behavior: 'smooth' });
					} else {
						// eslint-disable-next-line svelte/no-navigation-without-resolve
						goto((resolve as (path: string) => string)(`/#${dest}`));
					}
				} else if (['about', 'blog'].includes(dest)) {
					// eslint-disable-next-line svelte/no-navigation-without-resolve
					goto((resolve as (path: string) => string)(`/${dest}`));
				} else {
					errorMsg = `E484: Can't open file ${dest}`;
				}
				if (!errorMsg) active = false;
			} else if (cmd === 'hardcopy') {
				// TODO: Implement CV download/print
				errorMsg = 'Printing CV... (Not fully implemented yet)';
				setTimeout(() => {
					active = false;
					errorMsg = '';
				}, 1500);
			} else {
				errorMsg = `E492: Not an editor command: ${cmd}`;
			}

			if (!errorMsg) command = '';
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			if (historyIndex > 0) {
				historyIndex--;
				command = history[historyIndex];
			}
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (historyIndex < history.length - 1) {
				historyIndex++;
				command = history[historyIndex];
			} else {
				historyIndex = history.length;
				command = '';
			}
		} else if (e.key === 'Tab') {
			e.preventDefault();
			const val = command;
			const cmdParts = val.split(' ');

			if (cmdParts.length === 1) {
				const cmds = ['q', 'help', 'colorscheme', 'e', 'set', 'hardcopy', 'n', '%s/', 's/', 'glow'];
				const exactIdx = cmds.indexOf(cmdParts[0].toLowerCase());
				if (exactIdx !== -1) {
					command = cmds[(exactIdx + 1) % cmds.length];
				} else {
					const match = cmds.find((c) => c.startsWith(cmdParts[0].toLowerCase()));
					if (match) command = match;
				}
			} else if (cmdParts.length === 2 && cmdParts[0].toLowerCase() === 'e') {
				const routes = [
					'stack',
					'architecture',
					'projects',
					'experience',
					'contact',
					'about',
					'blog'
				];
				const exactIdx = routes.indexOf(cmdParts[1].toLowerCase());
				if (exactIdx !== -1) {
					command = `e ${routes[(exactIdx + 1) % routes.length]}`;
				} else {
					const match = routes.find((r) => r.startsWith(cmdParts[1].toLowerCase()));
					if (match) command = `e ${match}`;
					else command = `e ${routes[0]}`;
				}
			} else if (cmdParts.length === 2 && cmdParts[0].toLowerCase() === 'set') {
				const langs = ['lang=en', 'lang=es'];
				const exactIdx = langs.indexOf(cmdParts[1].toLowerCase());
				if (exactIdx !== -1) {
					command = `set ${langs[(exactIdx + 1) % langs.length]}`;
				} else {
					const match = langs.find((l) => l.startsWith(cmdParts[1].toLowerCase()));
					if (match) command = `set ${match}`;
					else command = `set ${langs[0]}`;
				}
			} else if (cmdParts.length === 2 && cmdParts[0].toLowerCase() === 'colorscheme') {
				const themes = [
					'default',
					'dracula',
					'gruvbox',
					'light',
					'tokyonight',
					'onedarkpro',
					'cyberpurple',
					'abyss'
				];
				const exactIdx = themes.indexOf(cmdParts[1].toLowerCase());
				if (exactIdx !== -1) {
					command = `colorscheme ${themes[(exactIdx + 1) % themes.length]}`;
				} else {
					const match = themes.find((t) => t.startsWith(cmdParts[1].toLowerCase()));
					if (match) command = `colorscheme ${match}`;
					else command = `colorscheme ${themes[0]}`;
				}
			}
		} else {
			errorMsg = '';
		}
	}

	function walkAndReplace(node: Node, regex: RegExp, replaceText: string) {
		if (node.nodeType === Node.TEXT_NODE) {
			if (node.nodeValue && regex.test(node.nodeValue)) {
				node.nodeValue = node.nodeValue.replace(regex, replaceText);
			}
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			const el = node as HTMLElement;
			if (el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE' && el.id !== 'neovim-cmd-container') {
				for (let i = 0; i < node.childNodes.length; i++) {
					walkAndReplace(node.childNodes[i], regex, replaceText);
				}
			}
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		window.addEventListener('neovim-toggle', handleToggleEvent as EventListener);
		window.addEventListener('neovim-preset', handlePresetEvent as EventListener);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('keydown', handleKeydown);
			window.removeEventListener('neovim-toggle', handleToggleEvent as EventListener);
			window.removeEventListener('neovim-preset', handlePresetEvent as EventListener);
		}
	});
</script>

<div
	id="neovim-cmd-container"
	class="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant p-2 items-center font-code-block z-50 {active
		? 'flex'
		: 'hidden'}"
>
	<span class={errorMsg ? 'text-error' : 'text-primary'}>
		{command.startsWith('/') ? '' : ':'}
	</span>
	<input
		bind:this={inputRef}
		bind:value={command}
		onkeydown={handleInputKeydown}
		class="bg-transparent border-none outline-none ml-1 w-full {errorMsg
			? 'text-error'
			: 'text-primary'}"
		type="text"
		aria-label="Neovim Command Bar"
	/>
	{#if errorMsg}
		<span
			class="absolute left-0 bottom-full w-full bg-error text-on-error px-2 py-1 text-sm border-t border-error"
		>
			{errorMsg}
		</span>
	{/if}
</div>
