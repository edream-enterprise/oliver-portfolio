# General Agent Rules for Oliver's Portfolio

This document outlines the core instructions and constraints the agent must follow when working on the `oliver-portfolio` project.

## 1. Project Context & Aesthetic
- **Theme**: The application is a portfolio designed to look like a "Tiling Window Manager" and terminal (Antigravity CLI Portfolio).
- **Core Stack**: SvelteKit, Tailwind CSS, TypeScript, and MDsveX (for rendering markdown blogs/bio).
- **Architecture**: Emphasize high componentization. Build modular UI elements (like `<PaneCard/>`, `<NeovimCmd/>`, `<ButtonPrimary/>`) under `src/lib/components/` and reuse them across routes.

## 2. Version Control (Git)
- **Language**: All commit messages **MUST** be written strictly in **English**.
- **Gitmoji**: All commit messages **MUST** start with a valid [gitmoji](https://gitmoji.dev/) that represents the type of change (e.g., `✨` for features, `🐛` for fixes, `♻️` for refactors, `📝` for docs).

## 3. SvelteKit & Frontend Practices
- **Reactivity**: Prefer Svelte 5 syntax and Runes (`$state`, `$derived`, `$effect`, `$props`) whenever possible.
- **Routing**: Respect the file-based routing convention (`+page.svelte`, `+layout.svelte`, `+server.ts`). Keep server-side logic in `.server.ts` files.
- **Accessibility**: Never ignore SvelteKit's a11y warnings. Ensure proper aria attributes, labels, and semantic HTML for the terminal UI components.

## 4. Styling (Tailwind CSS)
- **Utility-First**: Use Tailwind utility classes directly in the markup. Avoid writing custom CSS classes unless handling highly specific or complex animations.
- **Theming**: Adhere to the established dark mode/terminal color scheme defined in `tailwind.config.js` (e.g., using properties like `surface-container`, `pane-border`).

## 5. TypeScript (Quality & Safety)
- **Strict Typing**: Maintain strict type-safety (`"strict": true`). Absolutely avoid using `any`; use `unknown` or well-defined interfaces.
- **Svelte Script Tags**: Ensure all `<script>` tags in `.svelte` files include the `lang="ts"` attribute.
