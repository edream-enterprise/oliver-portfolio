<script lang="ts">
	function toggleNeovim() {
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('neovim-toggle'));
		}
	}
</script>

<footer
	class="w-full py-margin-page px-gutter flex flex-col md:flex-row justify-between items-center gap-4 bg-surface border-t border-outline-variant mt-auto"
>
	<div class="font-label-sm text-on-surface flex gap-6">
		<a
			class="hover:text-secondary transition-colors uppercase"
			href="https://github.com/TuUsuario"
			rel="noopener noreferrer"
			target="_blank">github</a
		>
		<a
			class="hover:text-secondary transition-colors uppercase"
			href="https://linkedin.com/in/TuUsuario"
			rel="noopener noreferrer"
			target="_blank">linkedin</a
		>
		<a class="hover:text-secondary transition-colors uppercase" href="mailto:tu_correo@dominio.com"
			>email</a
		>
		<button
			class="hover:text-primary transition-colors uppercase font-label-sm cursor-pointer relative"
			onclick={toggleNeovim}>nvim</button
		>
	</div>
	<div class="font-code-block text-secondary text-sm">
		v1.9.0-stable [GNU/Linux] © {new Date().getFullYear()} Oliver Erazo.
	</div>
</footer>
