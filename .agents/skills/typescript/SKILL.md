---
name: typescript
description: Guidelines for writing robust and type-safe TypeScript code.
---
# TypeScript Best Practices

- Always enforce strict type checking (ensure `"strict": true` in `tsconfig.json`).
- Avoid using the `any` type; prefer `unknown` or define appropriate interfaces/types.
- Use explicit types for function parameters and return types where inference is insufficient.
- Utilize discriminated unions and advanced types for complex domain models and state handling.
- Keep type definitions close to where they are used, or in a dedicated `types.ts` or `interfaces.ts` file if shared widely.
- Ensure proper typing for SvelteKit data load functions using the generated types in `./$types`.
- Use tools like Zod for runtime type validation on API routes and form actions.
