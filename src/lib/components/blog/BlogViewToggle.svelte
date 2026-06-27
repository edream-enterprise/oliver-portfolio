<script lang="ts">
	const STORAGE_KEY = 'blog-view-mode';

	type ViewMode = 'terminal' | 'preview';

	function getInitialMode(): ViewMode {
		if (typeof localStorage !== 'undefined') {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored === 'terminal' || stored === 'preview') return stored;
		}
		return 'terminal';
	}

	let mode = $state<ViewMode>(getInitialMode());

	function setMode(value: ViewMode) {
		mode = value;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, value);
		}
	}

	let { onchange }: { onchange?: (mode: ViewMode) => void } = $props();

	$effect(() => {
		onchange?.(mode);
	});
</script>

<div
	class="font-code-block border-outline-variant flex items-center gap-0 border text-xs"
	role="group"
	aria-label="Blog view mode"
>
	<button
		id="blog-view-terminal"
		class="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 uppercase transition-all duration-150 {mode ===
		'terminal'
			? 'bg-primary-container text-white'
			: 'text-on-surface-variant hover:text-on-surface'}"
		onclick={() => setMode('terminal')}
		aria-pressed={mode === 'terminal'}
	>
		<span class="material-symbols-outlined text-[13px]" aria-hidden="true">terminal</span>
		terminal
	</button>
	<button
		id="blog-view-preview"
		class="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 uppercase transition-all duration-150 {mode ===
		'preview'
			? 'bg-secondary-container text-white'
			: 'text-on-surface-variant hover:text-on-surface'}"
		onclick={() => setMode('preview')}
		aria-pressed={mode === 'preview'}
	>
		<span class="material-symbols-outlined text-[13px]" aria-hidden="true">article</span>
		preview
	</button>
</div>
