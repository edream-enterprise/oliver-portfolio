<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { resolve } from '$app/paths';
	import PaneCard from '$lib/components/ui/PaneCard.svelte';
	import ButtonPrimary from '$lib/components/ui/ButtonPrimary.svelte';
</script>

<section class="py-16" id="contact">
	<div class="mb-8 flex items-center gap-2">
		<span class="material-symbols-outlined text-primary" aria-hidden="true">mail</span>
		<h2 class="font-headline-md text-lg sm:text-2xl text-primary break-all">{$_('contact.title')}</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
		<PaneCard variant="none" class="flex flex-col">
			<div class="font-code-block text-secondary mb-6 opacity-80">
				{$_('contact.echo')}
			</div>
			<form class="flex flex-col gap-4 font-code-block">
				<div class="flex flex-col gap-2">
					<label class="text-primary" for="nombre">{$_('contact.form.name')}</label>
					<input
						class="bg-background pane-border text-on-surface p-2 outline-none focus:border-primary transition-colors"
						id="nombre"
						type="text"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label class="text-primary" for="email">{$_('contact.form.email')}</label>
					<input
						class="bg-background pane-border text-on-surface p-2 outline-none focus:border-primary transition-colors"
						id="email"
						type="email"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label class="text-primary" for="mensaje">{$_('contact.form.message')}</label>
					<textarea
						class="bg-background pane-border text-on-surface p-2 outline-none focus:border-primary transition-colors h-32 resize-none"
						id="mensaje"></textarea>
				</div>
				<ButtonPrimary type="button" class="mt-2 w-full sm:w-auto self-stretch sm:self-start">
					{$_('contact.form.submit')}
				</ButtonPrimary>
			</form>
		</PaneCard>
		<PaneCard variant="none" class="flex flex-col gap-4 font-code-block">
			<h3 class="text-primary font-bold">{$_('contact.network.title')}</h3>
			<div class="text-on-surface-variant text-sm">
				<p><span class="text-secondary">&gt;</span> {$_('contact.network.ping')}</p>
				<p>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.01ms</p>
			</div>
			<div class="border-t border-outline-variant my-2"></div>
			<div class="flex flex-col gap-2 text-sm">
				<div class="flex flex-col sm:flex-row sm:justify-between gap-1">
					<span class="text-primary flex-shrink-0">{$_('contact.network.github')}</span>
					<a class="text-secondary hover:underline break-all" href="https://github.com/10Oliver"
						>{$_('contact.network.githubUrl')}</a
					>
				</div>
				<div class="flex flex-col sm:flex-row sm:justify-between gap-1">
					<span class="text-primary flex-shrink-0">{$_('contact.network.linkedin')}</span>
					<a class="text-secondary hover:underline break-all" href="https://linkedin.com/in/oliver-erazo"
						>{$_('contact.network.linkedinUrl')}</a
					>
				</div>
				<div class="flex flex-col sm:flex-row sm:justify-between gap-1">
					<span class="text-primary flex-shrink-0">{$_('contact.network.cv')}</span>
					<a href={resolve('/about')} class="text-secondary hover:underline break-all">
						{$_('contact.network.cvUrl')}
					</a>
				</div>
			</div>
			<div class="border-t border-outline-variant my-2"></div>
			<div class="text-sm space-y-1">
				<p>
					<span class="text-primary">{$_('contact.info.location')}</span>
					{$_('contact.info.locationValue')}
				</p>
				<p>
					<span class="text-primary">{$_('contact.info.uptime')}</span>
					{$_('contact.info.uptimeValue')}
				</p>
				<p>
					<span class="text-primary">{$_('contact.info.status')}</span>
					<span class="text-secondary">{$_('contact.info.statusValue')}</span>
					{$_('contact.info.statusAccepting')}
				</p>
			</div>
			<div class="mt-auto pt-4 opacity-30 text-[10px] break-all leading-tight">
				<p>-----BEGIN PGP PUBLIC KEY BLOCK-----</p>
				<p>mQENBF2X1zABCADf9z8v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x</p>
				<p>2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v</p>
				<p>7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z</p>
			</div>
		</PaneCard>
	</div>
</section>
