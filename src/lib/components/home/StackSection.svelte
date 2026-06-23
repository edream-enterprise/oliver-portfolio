<script lang="ts">
</script>

<section class="py-16 border-b border-outline-variant" id="stack">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<!-- Terminal 1 -->
		<div class="flex flex-col">
			<div class="mb-4 flex items-center gap-2">
				<span class="material-symbols-outlined text-primary" aria-hidden="true">code</span>
				<h2 class="font-headline-md text-primary">~/.config/stack/development.json</h2>
			</div>
			<div class="bg-surface-dim pane-border p-6 rounded-none w-full overflow-x-auto flex-grow">
				<pre class="font-code-block text-on-surface-variant"><span class="text-on-surface-variant"
						>&#123;</span
					>
  <span class="text-primary">"languages"</span><span class="text-on-surface-variant">:</span> <span
						class="text-on-surface-variant">[</span
					>
    <span class="text-secondary">"JavaScript"</span><span class="text-on-surface-variant">,</span
					> <span class="text-secondary">"TypeScript"</span><span class="text-on-surface-variant"
						>,</span
					> <span class="text-secondary">"Python"</span><span class="text-on-surface-variant"
						>,</span
					>
    <span class="text-secondary">"PHP"</span><span class="text-on-surface-variant">,</span> <span
						class="text-secondary">"Rust"</span
					>
  <span class="text-on-surface-variant">],</span>
  <span class="text-primary">"frontend_frameworks"</span><span class="text-on-surface-variant"
						>:</span
					> <span class="text-on-surface-variant">[</span>
    <span class="text-secondary">"Vue"</span><span class="text-on-surface-variant">,</span> <span
						class="text-secondary">"Svelte"</span
					><span class="text-on-surface-variant">,</span> <span class="text-secondary">"React"</span
					><span class="text-on-surface-variant">,</span> <span class="text-secondary">"Next"</span
					><span class="text-on-surface-variant">,</span>
    <span class="text-secondary">"Nuxt"</span><span class="text-on-surface-variant">,</span> <span
						class="text-secondary">"SvelteKit"</span
					>
  <span class="text-on-surface-variant">],</span>
  <span class="text-primary">"backend_frameworks"</span><span class="text-on-surface-variant"
						>:</span
					> <span class="text-on-surface-variant">[</span>
    <span class="text-secondary">"Node.js"</span><span class="text-on-surface-variant">,</span
					> <span class="text-secondary">"Express"</span><span class="text-on-surface-variant"
						>,</span
					> <span class="text-secondary">"Nest.js"</span><span class="text-on-surface-variant"
						>,</span
					> <span class="text-secondary">"Laravel"</span><span class="text-on-surface-variant"
						>,</span
					>
    <span class="text-secondary">"FastAPI"</span>
  <span class="text-on-surface-variant">],</span>
  <span class="text-primary">"ui_libraries"</span><span class="text-on-surface-variant">:</span
					> <span class="text-on-surface-variant">[</span>
    <span class="text-secondary">"TailwindCSS"</span><span class="text-on-surface-variant">,</span
					> <span class="text-secondary">"PrimeVue"</span><span class="text-on-surface-variant"
						>,</span
					> <span class="text-secondary">"Vuetify"</span><span class="text-on-surface-variant"
						>,</span
					>
    <span class="text-secondary">"FlowBite"</span>
  <span class="text-on-surface-variant">]</span>
<span class="text-on-surface-variant">&#125;</span></pre>
			</div>
		</div>
		<!-- Terminal 2 -->
		<div class="flex flex-col">
			<div class="mb-4 flex items-center gap-2">
				<span class="material-symbols-outlined text-primary" aria-hidden="true">dns</span>
				<h2 class="font-headline-md text-primary">~/.config/stack/infrastructure.json</h2>
			</div>
			<div class="bg-surface-dim pane-border p-6 rounded-none w-full overflow-x-auto flex-grow">
				<pre class="font-code-block text-on-surface-variant"><span class="text-on-surface-variant"
						>&#123;</span
					>
  <span class="text-primary">"operating_systems"</span><span class="text-on-surface-variant">:</span
					> <span class="text-on-surface-variant">[</span>
    <span class="text-secondary">"Alma Linux"</span><span class="text-on-surface-variant">,</span
					> <span class="text-secondary">"Fedora"</span><span class="text-on-surface-variant"
						>,</span
					> <span class="text-secondary">"Pop!_OS"</span><span class="text-on-surface-variant"
						>,</span
					>
    <span class="text-secondary">"Ubuntu"</span><span class="text-on-surface-variant">,</span> <span
						class="text-secondary">"Manjaro"</span
					>
  <span class="text-on-surface-variant">],</span>
  <span class="text-primary">"platforms_and_cloud"</span><span class="text-on-surface-variant"
						>:</span
					> <span class="text-on-surface-variant">[</span>
    <span class="text-secondary">"AWS"</span><span class="text-on-surface-variant">,</span> <span
						class="text-secondary">"OCI"</span
					><span class="text-on-surface-variant">,</span> <span class="text-secondary"
						>"Podman"</span
					><span class="text-on-surface-variant">,</span> <span class="text-secondary"
						>"Docker"</span
					><span class="text-on-surface-variant">,</span>
    <span class="text-secondary">"Dokploy"</span><span class="text-on-surface-variant">,</span
					> <span class="text-secondary">"Heroku"</span>
  <span class="text-on-surface-variant">],</span>
  <span class="text-primary">"daily_drivers"</span><span class="text-on-surface-variant">:</span
					> <span class="text-on-surface-variant">[</span>
    <span class="text-secondary">"Zsh"</span><span class="text-on-surface-variant">,</span> <span
						class="text-secondary">"NeoVim"</span
					><span class="text-on-surface-variant">,</span> <span class="text-secondary"
						>"Hyprland"</span
					><span class="text-on-surface-variant">,</span>
    <span class="text-secondary">"WayBar"</span><span class="text-on-surface-variant">,</span> <span
						class="text-secondary">"Termius"</span
					>
  <span class="text-on-surface-variant">]</span>
<span class="text-on-surface-variant">&#125;</span></pre>
			</div>
		</div>
	</div>
</section>
