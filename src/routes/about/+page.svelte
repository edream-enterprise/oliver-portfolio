<script lang="ts">
	import PaneCard from '$lib/components/ui/PaneCard.svelte';

	const timeline = [
		{
			date: '2026',
			title: 'BARE_METAL_MASTERY',
			body: 'Replaced traditional desktop environments with Hyprland and Waybar. Fast, minimalist, and entirely terminal-driven.'
		},
		{
			date: '2025',
			title: 'PRODUCTIVITY_OVERRIDE',
			body: 'The definitive shift. Moved to Fedora. More importantly, I left VSCode behind and fully embraced Neovim to maximize productivity.'
		},
		{
			date: '2024',
			title: 'SUCCESSFUL_MIGRATION',
			body: 'The turning point. Gave Linux another try with Mint, then Pop!_OS. The experience was seamless, and I finally made it my daily driver.'
		},
		{
			date: '2023',
			title: 'KERNEL_PANIC_AND_ROLLBACK',
			body: 'The first leap. Tried Manjaro as my main OS. I struggled with dependencies, feared the terminal, and eventually retreated back to Windows.'
		},
		{
			date: '2022',
			title: 'DEV_ENVIRONMENT_START',
			body: '"Hello, World." Officially started my path as a developer. Windows and VSCode were my ultimate comfort zone.'
		},
		{
			date: '2021',
			title: 'VIRTUALIZATION_TEST',
			body: 'The seed of curiosity. I virtualized my first Ubuntu instance and got my first glimpse into the Linux ecosystem.'
		},
		{
			date: '2015',
			title: 'SYSTEM_INIT',
			body: 'My first PC. I was a standard Windows user, completely unaware of the broader tech world and programming.'
		}
	];
</script>

<svelte:head>
	<title>About | Oliver's Portfolio</title>
	<meta name="description" content="Oliver's complete biography" />
</svelte:head>

<div class="flex flex-col gap-12 pb-12 w-full max-w-4xl mx-auto">
	<!-- Component 1: Terminal Output (The Introduction) -->
	<section>
		<div class="mb-4 flex items-center gap-2">
			<span class="material-symbols-outlined text-primary" aria-hidden="true">terminal</span>
			<h1 class="font-headline-lg text-primary">/usr/bin/whoami</h1>
		</div>
		<PaneCard class="overflow-x-auto text-sm md:text-base">
			<div class="font-code-block flex items-center gap-2 mb-6">
				<span class="text-primary font-bold">oliver@almalinux:~$</span>
				<span class="text-on-surface-variant">whoami --verbose --human</span>
			</div>
			<div class="font-code-block space-y-6 text-on-surface-variant whitespace-pre-wrap">
				<div>
					<span class="text-primary font-bold">[ USER_INFO ]</span>
Name: Oliver Alejandro Erazo Reyes 
Role: Full Stack Web Developer 
Status:
					<span class="text-secondary font-bold">Running</span>, fueled by curiosity and terminal efficiency.
				</div>

				<div>
					<span class="text-primary font-bold">[ ABOUT ]</span>
					I am a software engineer passionate about building efficient, adaptable, and scalable solutions. My approach bridges the gap between robust backend architectures and seamless user experiences. 

When I am not configuring servers, writing code, or optimizing my Neovim environment, you will probably find me running—a physical discipline that gives me the focus and balance needed to tackle the next technical challenge.
				</div>
			</div>
		</PaneCard>
	</section>

	<!-- Component 2: The Timeline Log (The Journey) -->
	<section>
		<div class="mb-4 flex items-center gap-2">
			<h2 class="font-headline-md text-primary">📂 /var/log/sys_evolution.log</h2>
		</div>
		<PaneCard>
			<div class="border-l border-outline-variant ml-3 space-y-8 py-2">
				{#each timeline as item}
					<div
						class="relative pl-6 before:absolute before:-left-[5px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-primary before:rounded-none"
					>
						<div class="font-code-block text-secondary text-sm mb-1">[ {item.date} ]</div>
						<h3 class="text-primary font-headline-md uppercase mb-2">
							{item.title}
						</h3>
						<p class="font-body-md text-on-surface-variant">
							{item.body}
						</p>
					</div>
				{/each}
			</div>
		</PaneCard>
	</section>

	<!-- Component 3: Configuration File (Philosophy) -->
	<section>
		<div class="mb-4 flex items-center gap-2">
			<h2 class="font-headline-md text-primary">⚙️ ~/.config/mindset.conf</h2>
		</div>
		<PaneCard class="overflow-x-auto text-sm md:text-base">
			<pre class="font-code-block leading-relaxed"><code class="text-on-surface-variant"
					><span class="text-secondary opacity-80"
						># ---------------------------------------------------------
# CORE PHILOSOPHY
# ---------------------------------------------------------
# Simplicity is the ultimate sophistication. I strongly 
# believe in the UNIX philosophy: write programs that do 
# one thing and do it well. </span>

UNIX_PHILOSOPHY=<span class="text-primary">true</span>
DRIVEN_BY=<span class="text-primary">"Efficiency and Open Source"</span>
DISTRACTIONS=<span class="text-primary">0</span>

<span class="text-secondary opacity-80"
						># ---------------------------------------------------------
# ARCHITECTURE APPROACH
# ---------------------------------------------------------
# I aim for code that is not just functional, but efficient, 
# maintainable, and built on solid architectures. I thrive 
# in the terminal because it strips away distractions, 
# allowing me to focus entirely on problem-solving.</span
					>

<span class="text-secondary">export</span> WORKFLOW=<span class="text-primary"
						>"Terminal-driven"</span
					></code
				></pre>
		</PaneCard>
	</section>
</div>
