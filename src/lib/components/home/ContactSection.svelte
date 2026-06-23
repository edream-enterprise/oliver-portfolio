<script lang="ts">
</script>

<section class="py-16" id="contact">
	<div class="mb-8 flex items-center gap-2">
		<span class="material-symbols-outlined text-primary" aria-hidden="true">mail</span>
		<h2 class="font-headline-md text-primary">/usr/bin/contact</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
		<div class="bg-[#141414] pane-border p-6 rounded-none flex flex-col">
			<div class="font-code-block text-secondary mb-6 opacity-80">
				$ echo "Let's build something." &gt; contact.txt
			</div>
			<form class="flex flex-col gap-4 font-code-block">
				<div class="flex flex-col gap-2">
					<label class="text-primary" for="nombre">$NOMBRE</label>
					<input
						class="bg-[#0a0a0a] pane-border text-on-surface p-2 outline-none focus:border-primary transition-colors"
						id="nombre"
						type="text"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label class="text-primary" for="email">$EMAIL</label>
					<input
						class="bg-[#0a0a0a] pane-border text-on-surface p-2 outline-none focus:border-primary transition-colors"
						id="email"
						type="email"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label class="text-primary" for="mensaje">Mensaje: STDIN</label>
					<textarea
						class="bg-[#0a0a0a] pane-border text-on-surface p-2 outline-none focus:border-primary transition-colors h-32 resize-none"
						id="mensaje"></textarea>
				</div>
				<button
					class="btn-primary font-label-sm px-6 py-3 uppercase rounded-none mt-2 self-start"
					type="button"
				>
					[ ./send_message.sh ]
				</button>
			</form>
		</div>
		<div class="bg-[#141414] pane-border p-6 rounded-none flex flex-col gap-4 font-code-block">
			<h3 class="text-primary font-bold">[ NETWORK INTERFACES &amp; SYS_INFO ]</h3>
			<div class="text-on-surface-variant text-sm">
				<p><span class="text-secondary">&gt;</span> ping -c 1 oliver.dev</p>
				<p>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.01ms</p>
			</div>
			<div class="border-t border-outline-variant my-2"></div>
			<div class="flex flex-col gap-2 text-sm">
				<div class="flex justify-between">
					<span class="text-primary">github</span>
					<a class="text-secondary hover:underline" href="https://github.com/10Oliver"
						>-&gt; curl -s api.github.com/users/10Oliver</a
					>
				</div>
				<div class="flex justify-between">
					<span class="text-primary">linkedin</span>
					<a class="text-secondary hover:underline" href="https://linkedin.com/in/oliver-erazo"
						>-&gt; xdg-open linkedin.com/in/oliver-erazo</a
					>
				</div>
        <div class="flex justify-between">
          <span class="text-primary">cv</span>
          <a href="/about" class="text-secondary hover:underline">
            -&gt; cat ~/docs/cv_oliver.md
          </a>
        </div>
			</div>
			<div class="border-t border-outline-variant my-2"></div>
			<div class="text-sm space-y-1">
				<p><span class="text-primary">Location:</span> El Salvador (CST / UTC-6)</p>
				<p><span class="text-primary">Uptime:</span> 99.9%</p>
				<p>
					<span class="text-primary">Status:</span> <span class="text-secondary">200 OK</span> [Accepting
					New Projects]
				</p>
			</div>
			<div class="mt-auto pt-4 opacity-30 text-[10px] break-all leading-tight">
				<p>-----BEGIN PGP PUBLIC KEY BLOCK-----</p>
				<p>mQENBF2X1zABCADf9z8v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x</p>
				<p>2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v</p>
				<p>7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z9v7x2z</p>
			</div>
		</div>
	</div>
</section>
