<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';

	let active = $state(false);
	let command = $state('');
	let inputRef: HTMLInputElement | undefined = $state();

	function handleKeydown(e: KeyboardEvent) {
		// Global toggle with ':'
		if (e.key === ':' && document.activeElement !== inputRef) {
			e.preventDefault();
			active = true;
			command = '';
			setTimeout(() => inputRef?.focus(), 0);
		} else if (e.key === 'Escape' && active) {
			active = false;
			inputRef?.blur();
		}
	}

	function handleToggleEvent() {
		active = true;
		command = '';
		setTimeout(() => inputRef?.focus(), 0);
	}

	function executeCommand(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			const val = command.trim().toLowerCase();
			if (val === 'q') {
				active = false;
			} else if (val.startsWith('e ')) {
				const dest = val.split(' ')[1];
				if (['stack', 'architecture', 'projects', 'experience', 'contact'].includes(dest)) {
					goto(`/#${dest}`);
				} else if (['about', 'blog'].includes(dest)) {
					goto(`/${dest}`);
				}
				active = false;
			}
			command = '';
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		window.addEventListener('neovim-toggle', handleToggleEvent as EventListener);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('keydown', handleKeydown);
			window.removeEventListener('neovim-toggle', handleToggleEvent as EventListener);
		}
	});
</script>

<div
	class="fixed bottom-0 left-0 w-full bg-[#141414] border-t border-outline-variant p-2 items-center font-code-block text-primary z-50 {active
		? 'flex'
		: 'hidden'}"
>
	<span>:</span>
	<input
		bind:this={inputRef}
		bind:value={command}
		onkeydown={executeCommand}
		class="bg-transparent border-none outline-none text-primary ml-1 w-full"
		type="text"
		aria-label="Neovim Command Bar"
	/>
</div>
