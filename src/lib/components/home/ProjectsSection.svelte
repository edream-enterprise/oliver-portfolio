<script lang="ts">
	let scrollContainer: HTMLElement | undefined = $state();

	const scrollLeft = () => {
		if (scrollContainer) {
			const cardWidth = scrollContainer.querySelector('a')?.clientWidth || 380;
			scrollContainer.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' }); // 24px is gap-6
		}
	};

	const scrollRight = () => {
		if (scrollContainer) {
			const cardWidth = scrollContainer.querySelector('a')?.clientWidth || 380;
			scrollContainer.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
		}
	};
</script>

<section class="py-16 border-b border-outline-variant" id="projects">
	<div class="mb-8 flex items-center justify-between">
		<div class="flex items-center gap-2">
			<span class="material-symbols-outlined text-primary" aria-hidden="true">folder_open</span>
			<h2 class="font-headline-md text-primary">/home/projects</h2>
		</div>
		<div class="flex items-center gap-2 hidden sm:flex">
			<button
				class="bg-surface pane-border px-3 py-1 text-primary hover:bg-surface-variant hover:text-secondary transition-colors font-mono focus:outline-none"
				aria-label="Previous projects"
				onclick={scrollLeft}
			>
				{'<'}
			</button>
			<button
				class="bg-surface pane-border px-3 py-1 text-primary hover:bg-surface-variant hover:text-secondary transition-colors font-mono focus:outline-none"
				aria-label="Next projects"
				onclick={scrollRight}
			>
				{'>'}
			</button>
		</div>
	</div>
	<div
		bind:this={scrollContainer}
		class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar"
	>
		<!-- Card 1 -->
		<a
			href="https://github.com/10Oliver/NeoVim-configuration"
			target="_blank"
			rel="noopener noreferrer"
			class="flex flex-col w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start bg-surface pane-border pane-glow-secondary p-6 rounded-none transition-colors hover:border-primary group"
		>
			<h3 class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary">
				NEOVIM CONFIG
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				Minimalist and fast Neovim-based development environment optimized for modern web development
				(Vue, TS, JS). Features LSP, AI autocompletion (Copilot), advanced Git integration, and
				ultra-fast searching.
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Lua]</span
				>
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Markdown]</span
				>
			</div>
		</a>
		<!-- Card 2 -->
		<a
			href="https://github.com/edream-enterprise/oliver-portfolio"
			target="_blank"
			rel="noopener noreferrer"
			class="flex flex-col w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start bg-surface pane-border pane-glow-secondary p-6 rounded-none transition-colors hover:border-primary group"
		>
			<h3 class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary">
				SVELTE PORTFOLIO
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				An interactive personal portfolio featuring a terminal and window manager style, developed
				with SvelteKit; it includes blog posts and a biography in Markdown format.
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Svelte]</span
				>
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Linux]</span
				>
			</div>
		</a>
		<!-- Card 3 -->
		<a
			href="https://github.com/10Oliver/gestion-eventos-comunitarios"
			target="_blank"
			rel="noopener noreferrer"
			class="flex flex-col w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start bg-surface pane-border pane-glow-secondary p-6 rounded-none transition-colors hover:border-primary group"
		>
			<h3 class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary uppercase">
				COMMUNITY EVENTS APP
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				A collaborative mobile application (university project) designed for managing events and
				attendance tracking. Developed using React Native, Expo, and Firebase.
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[React Native]</span
				>
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Firebase]</span
				>
			</div>
		</a>
		<!-- Card 4 -->
		<a
			href="https://github.com/10Oliver/desafio-1-lis"
			target="_blank"
			rel="noopener noreferrer"
			class="flex flex-col w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start bg-surface pane-border pane-glow-secondary p-6 rounded-none transition-colors hover:border-primary group"
		>
			<h3 class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary uppercase">
				PERSONAL FINANCE APP
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				A web application for personal finance management, tracking income and expenses. Developed using Laravel 12 and Blade, featuring custom accounts, categories, charts, and 2FA authentication.
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Laravel]</span
				>
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Blade]</span
				>
			</div>
		</a>
		<!-- Card 5 -->
		<a
			href="https://github.com/10Oliver/vue3-template"
			target="_blank"
			rel="noopener noreferrer"
			class="flex flex-col w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start bg-surface pane-border pane-glow-secondary p-6 rounded-none transition-colors hover:border-primary group"
		>
			<h3 class="font-headline-md text-secondary mb-4 transition-colors group-hover:text-primary uppercase">
				VUE 3 TEMPLATE
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 flex-grow">
				A base template for rapid development of modern web applications using Vue 3 and Vuetify 3. Pre-configured with Pinia for state management and Vue Router.
			</p>
			<div class="flex flex-wrap gap-2 mt-auto">
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Vue 3]</span
				>
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Vuetify]</span
				>
				<span
					class="font-label-sm bg-surface-variant px-2 py-1 text-on-surface-variant border border-outline-variant"
					>[Vite]</span
				>
			</div>
		</a>
	</div>
</section>

<style>
	/* Hide scrollbar for the carousel for a cleaner look */
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.hide-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
