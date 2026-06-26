---
name: sveltekit
description: Guidelines and best practices for developing with SvelteKit.
---
# SvelteKit Best Practices

- Use Svelte 5 syntax and Runes (`$state`, `$derived`, `$effect`, `$props`) where appropriate.
- Follow SvelteKit file-based routing patterns (e.g., `+page.svelte`, `+layout.svelte`, `+server.ts`, `+page.ts`).
- Keep components small, focused, and reusable.
- Prefer server-side data fetching using `+page.server.ts` or `+layout.server.ts` for data that requires security or should not be exposed to the client.
- Use SvelteKit's built-in `$app/navigation` and `$app/stores` for programmatic navigation and state.
- Handle form actions using SvelteKit's `use:enhance` in forms for progressive enhancement.
- Ensure proper accessibility (a11y) rules in custom components.
