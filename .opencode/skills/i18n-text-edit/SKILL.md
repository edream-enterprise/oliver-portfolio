---
name: i18n-text-edit
description: Use when editing, adding, or removing text content in Svelte components, pages, or any UI-facing files in the Oliver Portfolio project. Ensures all text changes are made in both English (en.json) and Spanish (es.json) locale files.
---

# i18n Text Editing Skill

This skill ensures that all text edits in the Oliver Portfolio project are properly internationalized.

## When to use

Use this skill when:
- Adding new text content to any `.svelte` file
- Modifying existing text in components
- Creating new pages with text content
- Updating labels, descriptions, or any user-facing text

## Rules

### 1. Never hardcode text in components

**Wrong:**
```svelte
<h1>Hello World</h1>
<p>This is a description</p>
```

**Correct:**
```svelte
<script>
	import { _ } from 'svelte-i18n';
</script>

<h1>{$_('section.title')}</h1>
<p>{$_('section.description')}</p>
```

### 2. Always update both locale files

When adding or modifying text, you MUST update both:
- `src/lib/i18n/en.json`
- `src/lib/i18n/es.json`

### 3. Locale file structure

Follow the existing structure in the locale files:
```json
{
	"section": {
		"subsection": {
			"key": "Text value"
		}
	}
}
```

### 4. Translation keys naming convention

- Use lowercase with dots: `section.subsection.key`
- Be descriptive: `contact.form.submit` instead of `btn1`
- Group related keys under the same namespace

### 5. Edit workflow

When editing text:

1. Identify the current text in the component
2. Find or create the appropriate key in locale files
3. Add/update the key in BOTH `en.json` and `es.json`
4. Replace the hardcoded text with `$_('key.path')`
5. Import `{ _ }` from 'svelte-i18n' if not already imported

### 6. Example: Adding new text

**Step 1:** Add to `en.json`:
```json
{
	"newSection": {
		"title": "New Feature",
		"description": "This is a new feature description"
	}
}
```

**Step 2:** Add to `es.json`:
```json
{
	"newSection": {
		"title": "Nueva Funcionalidad",
		"description": "Esta es una descripción de la nueva funcionalidad"
	}
}
```

**Step 3:** Use in component:
```svelte
<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section>
	<h2>{$_('newSection.title')}</h2>
	<p>{$_('newSection.description')}</p>
</section>
```

## Checklist before committing

- [ ] All new text uses `$_('key')` syntax
- [ ] All keys exist in `en.json`
- [ ] All keys exist in `es.json`
- [ ] Translations are accurate and contextually appropriate
- [ ] No hardcoded text remains in `.svelte` files (except technical values like code examples)
