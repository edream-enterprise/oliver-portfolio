# `plan.md`

Este documento define la hoja de ruta para el desarrollo del portafolio utilizando SvelteKit, Tailwind CSS y buenas prácticas de ingeniería de software.

## Fase 1: Inicialización y Configuración Base (El "Bare Metal")

El objetivo aquí es preparar el entorno de desarrollo con todas las herramientas de calidad de código y diseño.

* **Paso 1: Scaffolding de SvelteKit**
* Inicializar el proyecto con `npm create svelte@latest`.
* Seleccionar *Skeleton project*.
* Habilitar **TypeScript** (recomendado para proyectos a largo plazo) o JSDoc.
* Añadir **ESLint** y **Prettier** durante la configuración para asegurar la calidad del código desde el día 1.


* **Paso 2: Instalación de Tailwind CSS**
* Integrar Tailwind CSS, PostCSS y Autoprefixer.
* Migrar la configuración del `<script id="tailwind-config">` del prototipo HTML al archivo `tailwind.config.js` (colores personalizados como `on-primary-container`, `surface-container`, tipografías, etc.).


* **Paso 3: Configuración de Assets Globales**
* Importar las fuentes *JetBrains Mono* e *Inter* en `app.html` o vía `@font-face` en un archivo CSS global.
* Trasladar los estilos globales base (como `.pane-border`, `.btn-primary`, fondo oscuro) al archivo `src/app.css`.


* **Paso 4: Configuración de Markdown (MDsveX)**
* Instalar y configurar `mdsvex` en `svelte.config.js`. Esto permitirá escribir los blogs y la biografía en formato `.md` o `.svx` y renderizarlos como componentes Svelte, ideal para la temática CLI.



## Fase 2: Componentes Core y Layout (El "Window Manager")

Crear la estructura maestra que se repetirá en todas las páginas.

* **Paso 1: Layout Principal (`src/routes/+layout.svelte`)**
* Implementar el envoltorio global.
* Crear e integrar el componente `<Header/>` (TopNavBar simulando Waybar).
* Crear e integrar el componente `<Footer/>`.
* Configurar `<slot />` para inyectar el contenido de las páginas.


* **Paso 2: Componente de Comandos Neovim (`<NeovimCmd/>`)**
* Extraer la barra de comandos interactiva de la parte inferior a un componente global para que sea accesible desde cualquier ruta.
* Implementar la lógica de teclado (capturar `:` y `Escape`) mediante Svelte actions o event listeners integrados en el ciclo de vida del componente (`onMount`).


* **Paso 3: Sistema de Diseño Atómico (UI Elements)**
* Crear componentes reutilizables: `<ButtonPrimary/>`, `<ButtonSecondary/>`, `<PaneCard/>` (para las tarjetas con brillo).



## Fase 3: Página Principal (Index - `/`)

Migrar el HTML monolítico a componentes modulares dentro de la ruta raíz.

* **Paso 1: Configurar `src/routes/+page.svelte**`
* Dividir el contenido en componentes semánticos dentro de `src/lib/components/home/`:
* `<HeroSection/>` (Incluye la lógica inicial del Arte ASCII).
* `<ArchitectureSection/>`
* `<ProfileSnippet/>` (Versión resumida que enlaza a `/about`).
* `<ExperienceSection/>`
* `<ProjectsSection/>`
* `<StackSection/>` (Archivos JSON simulados).
* `<BlogSnippet/>` (Muestra solo los últimos 2-3 artículos).
* `<ContactSection/>`





## Fase 4: Rutas y Páginas Adicionales

Desarrollar las páginas completas que se solicitaron, manteniendo la estética de la terminal.

* **Paso 1: Página de Biografía (`src/routes/about/+page.svelte`)**
* Crear la vista `/about` (`cat bio_completa.md`).
* Estructurar la biografía completa combinando componentes de diseño con contenido renderizado a través de MDsveX.


* **Paso 2: Índice del Blog (`src/routes/blog/+page.svelte`)**
* Crear la vista `/blog` (`ls -l /var/log/todas_las_notas`).
* Implementar una función en `+page.server.ts` (o `+page.ts`) para leer todos los archivos `.md` del directorio de blogs y generar un array con los metadatos (título, fecha, extracto) para mostrarlos en una lista.


* **Paso 3: Entradas Individuales del Blog (`src/routes/blog/[slug]/+page.svelte`)**
* Configurar el enrutamiento dinámico `[slug]`.
* Renderizar dinámicamente el contenido del archivo markdown correspondiente basado en la URL.
* Añadir estilos tipográficos (`@tailwindcss/typography`) adaptados al tema oscuro/terminal para que el contenido de los artículos sea legible.



## Fase 5: Interactividad y Scripts (El "Shell")

Migrar los scripts *vanilla* de la parte inferior del HTML a la reactividad de Svelte.

* **Paso 1: Rotación de Arte ASCII**
* Crear un store de Svelte (`writable`) o usar estado local en el `<HeroSection/>` para manejar el array de strings de ASCII art y el `setInterval`.
* Asegurar que el intervalo se destruya correctamente en el `onDestroy` para evitar fugas de memoria.


* **Paso 2: Lógica de Comandos del Neovim Bar**
* Mapear los comandos de navegación (ej. `:e stack`, `:e projects`) para que interactúen con el enrutador de SvelteKit (`goto`) en lugar de hacer scroll tradicional si el usuario está en otra página, o hacer scroll suave si ya está en la raíz.



## Fase 6: Optimización y Despliegue

Preparar el portafolio para producción.

* **Paso 1: Linting y Formateo**
* Ejecutar `npm run lint` y `npm run format`.
* Asegurar que no haya errores de accesibilidad (a11y), SvelteKit es estricto con esto (ej. inputs sin *labels* asociadas de forma correcta).


* **Paso 2: SEO y Metadatos**
* Añadir el componente `<svelte:head>` en el `+layout.svelte` y páginas individuales dinámicas (blogs) para configurar los títulos, descripciones y Open Graph tags.


* **Paso 3: Adaptador de SvelteKit**
* Elegir y configurar el adaptador adecuado según dónde vayas a alojar el portafolio (ej. `@sveltejs/adapter-static` si solo necesitas un sitio estático para GitHub Pages o Netlify, o `@sveltejs/adapter-node` si correrá en tu propio servidor Alma Linux con Podman).



---

¿Qué adaptador de SvelteKit tienes en mente utilizar para el despliegue de esta arquitectura (ej. Node, Static, Cloudflare)?
