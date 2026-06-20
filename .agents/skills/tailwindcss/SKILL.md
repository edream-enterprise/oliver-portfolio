---
name: tailwindcss
description: Best practices for styling with Tailwind CSS.
---
# Tailwind CSS Best Practices

- Prioritize utility-first classes for styling components directly in HTML/Svelte templates.
- Group related classes logically (e.g., layout first, then spacing, typography, colors, effects).
- Avoid creating custom CSS classes (`.my-class`) unless absolutely necessary or dealing with highly complex animations.
- Ensure responsive design by utilizing Tailwind's breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`).
- Utilize Tailwind's configuration (`tailwind.config.js` or `app.css` depending on v3/v4) to define brand colors and custom theme extensions.
- Support Dark Mode gracefully using the `dark:` variant.
