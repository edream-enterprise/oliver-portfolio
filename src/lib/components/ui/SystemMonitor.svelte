<script lang="ts">
	import { globalState, toggleSystemMonitor } from '$lib/state.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { _ } from 'svelte-i18n';

	let uptime = $state(0);
	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		const startTime = Date.now();
		interval = setInterval(() => {
			uptime = Math.floor((Date.now() - startTime) / 1000);
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	function formatUptime(seconds: number) {
		const m = Math.floor(seconds / 60);
		const s = seconds % 60;
		return `${m}m ${s}s`;
	}
</script>

<svelte:window onkeydown={(e) => { if (e.key === 'Escape') globalState.systemMonitorOpen = false; }} />

{#if globalState.systemMonitorOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center backdrop-blur-sm"
		onclick={toggleSystemMonitor}
	>
		<div
			class="bg-surface border border-outline-variant p-6 max-w-lg w-full flex gap-6 shadow-2xl relative font-code-block"
			onclick={(e) => e.stopPropagation()}
		>
			<button
				class="absolute top-2 right-2 text-on-surface-variant hover:text-error cursor-pointer select-none"
				onclick={toggleSystemMonitor}
				aria-label={$_('systemInfo.close')}
			>
				<span class="material-symbols-outlined">close</span>
			</button>

			<div class="flex-shrink-0 text-primary flex items-center justify-center p-2">
				<pre class="text-[10px] leading-[1.1] font-bold">
   ⣠⠤⠤⠤⠤⣤⣀    ⢳⣦⣤⡴⠂ 
   ⣿⣀⣀⣂  ⠉⠙⠲⢤⣤⣤⠞⠉   
   ⣙⠦⣄⡉⠙⠒⠶⠶⠶⠚⢋⣡⡴⢚⠁  
   ⢿⡓⢦⣉⠛⠒⠶⠶⠖⠚⣋⡥⢞⣿   
   ⠘⢿⠲⣌⡙⠓⠒⠒⠒⠛⣩⠴⣻⠏   
    ⠈⠳⢦⣉⠛⠓⠒⠛⣋⣡⠞⠁    
       ⠈⠉⠛⠛⠋⠉       
				</pre>
			</div>

			<div class="flex-col justify-center flex flex-1 gap-1 text-sm">
				<div class="text-primary font-bold border-b border-outline-variant pb-1 mb-2">
					oliver@almalinux
				</div>
				<div><span class="text-secondary font-bold">{$_('systemInfo.os')}</span> SvelteKit 5</div>
				<div><span class="text-secondary font-bold">{$_('systemInfo.wm')}</span> TailwindCSS 4</div>
				<div><span class="text-secondary font-bold">{$_('systemInfo.shell')}</span> TypeScript</div>
				<div><span class="text-secondary font-bold">{$_('systemInfo.terminal')}</span> Zsh + Oh My Zsh</div>
				<div><span class="text-secondary font-bold">{$_('systemInfo.uptime')}</span> {formatUptime(uptime)}</div>
				<div>
					<span class="text-secondary font-bold">{$_('systemInfo.memory')}</span> 120MB / 16384MB
				</div>
				<div>
					<span class="text-secondary font-bold">{$_('systemInfo.themes')}</span> 3 {$_('systemInfo.loaded')} ... 1 {$_('systemInfo.encrypted')}
				</div>

				<div class="flex gap-1 mt-3">
					<div class="w-4 h-4 bg-background"></div>
					<div class="w-4 h-4 bg-surface"></div>
					<div class="w-4 h-4 bg-primary"></div>
					<div class="w-4 h-4 bg-secondary"></div>
					<div class="w-4 h-4 bg-tertiary"></div>
					<div class="w-4 h-4 bg-error"></div>
				</div>
			</div>
		</div>
	</div>
{/if}
