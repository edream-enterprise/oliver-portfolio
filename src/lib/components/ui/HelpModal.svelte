<script lang="ts">
	import { globalState, toggleHelpModal } from '$lib/state.svelte';
</script>

{#if globalState.helpModalOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center backdrop-blur-sm"
		onclick={toggleHelpModal}
	>
		<div
			class="bg-surface border border-outline-variant p-6 max-w-lg w-full shadow-2xl relative font-code-block"
			onclick={(e) => e.stopPropagation()}
		>
			<button
				class="absolute top-2 right-2 text-on-surface-variant hover:text-error"
				onclick={toggleHelpModal}
				aria-label="Close help"
			>
				<span class="material-symbols-outlined">close</span>
			</button>

			<h2 class="text-primary font-bold text-lg mb-4 border-b border-outline-variant pb-2">Neovim Command Palette</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-4 gap-y-4 text-sm text-on-surface">
				<div class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0">:e [route]</div>
				<div class="text-on-surface-variant">Navega a diferentes secciones del portafolio. Ejemplo: <code>:e projects</code>, <code>:e blog</code>.</div>
				
				<div class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0">:colorscheme [theme]</div>
				<div class="text-on-surface-variant">Cambia la paleta de colores global. Ejemplo: <code>:colorscheme dracula</code>.</div>

				<div class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0">:q</div>
				<div class="text-on-surface-variant">Cierra la consola de comandos interactiva.</div>

				<div class="text-secondary font-bold border-b md:border-b-0 border-outline-variant pb-1 md:pb-0">:help</div>
				<div class="text-on-surface-variant">Muestra este menú de ayuda en pantalla.</div>
			</div>
		</div>
	</div>
{/if}
