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
			
			<div class="flex flex-col gap-4 text-sm text-on-surface">
				<div>
					<span class="text-secondary font-bold">:e [route]</span>
					<p class="text-on-surface-variant mt-1">Navega a diferentes secciones del portafolio. Ejemplo: <code>:e projects</code>, <code>:e blog</code>, <code>:e stack</code>.</p>
				</div>
				
				<div>
					<span class="text-secondary font-bold">:colorscheme [theme]</span>
					<p class="text-on-surface-variant mt-1">Cambia la paleta de colores global. Ejemplo: <code>:colorscheme dracula</code>, <code>:colorscheme gruvbox</code>.</p>
				</div>

				<div>
					<span class="text-secondary font-bold">:q</span>
					<p class="text-on-surface-variant mt-1">Cierra la consola de comandos interactiva.</p>
				</div>

				<div>
					<span class="text-secondary font-bold">:help</span>
					<p class="text-on-surface-variant mt-1">Muestra este menú de ayuda en pantalla.</p>
				</div>
			</div>
		</div>
	</div>
{/if}
