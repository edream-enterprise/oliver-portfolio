# Plan: Decap CMS + Rediseño del Blog

  ## Summary

  Implementar Decap CMS para que la sección de blog pase de archivos Markdown gestionados manualmente a un flujo editorial web sobre
  GitHub, manteniendo el sitio principal en SvelteKit con adapter-node y despliegue en Dokploy. La experiencia pública del blog tendrá una
  sola fuente de contenido y dos modos de visualización conmutables: terminal y markdown preview, ambos coherentes con la estética actual
  del portafolio.

  ## Key Changes

  - Fuente de contenido única
      - Mantener los posts en Markdown/MDsveX dentro de src/lib/content/blog/.
      - Estandarizar frontmatter para Decap y render público: title, slug, date, excerpt, coverImage, tags, draft, language, canonicalUrl
        opcional.

      - Hacer que el snippet del home deje de depender de i18n hardcodeado y lea los posts reales igual que /blog.

  - Integración Decap CMS
      - Agregar static/admin/index.html y static/admin/config.yml.
      - Configurar una colección blog apuntando al directorio real de posts.
      - Soportar edición de:
          - título, slug y fecha
          - excerpt/resumen
          - imagen de portada
          - tags
          - estado draft
          - cuerpo Markdown con bloques de código, links e imágenes

      - Agregar carpeta de media para uploads, con rutas públicas consistentes (static/uploads/... o equivalente definido en config).
      - Incluir local_backend para desarrollo local.
      - En producción sobre Dokploy, usar autenticación GitHub OAuth con backend/proxy self-hosted compatible con Decap, desplegado como
        servicio separado o sidecar y expuesto por ruta/subdominio estable.

  - Carga y render del blog
      - Reemplazar la carga actual por una capa única de lectura de posts reutilizable por:
          - home snippet
          - índice /blog
          - post individual /blog/[slug]

      - Filtrar drafts fuera de producción pública.
      - Ordenar por fecha descendente y dejar preparado el modelo para tags y portada.
      - Mantener MDsveX como renderer base; no permitir componentes Svelte arbitrarios en v1.

  - Rediseño de la experiencia pública
      - Mantener el lenguaje visual actual: terminal, paneles, tipografía mono, bordes duros, temas tipo editor.
      - Crear dos vistas conmutables para el blog público usando los mismos datos:
          - terminal: evolución del diseño actual, más denso y utilitario.
          - markdown preview: lectura más editorial, inspirada en preview de editor Markdown, pero con la misma paleta, bordes y chrome
            del sitio.

      - Persistir la preferencia de vista en cliente.
      - Mejoras de UX del índice:
          - cards con mejor jerarquía visual
          - tags visibles
          - portada opcional
          - estado visual claro para hover/focus
          - extractos consistentes

      - Mejoras de UX del post:
          - cabecera con metadatos más clara
          - mejor tipografía para prose y bloques de código
          - navegación de regreso más visible
          - ancho de lectura controlado
          - tratamiento visual consistente de imágenes y enlaces

  - Infraestructura e interfaces públicas
      - Añadir ruta pública /admin.
      - Añadir endpoint o servicio OAuth para Decap accesible desde Dokploy.
      - No cambiar rutas públicas del blog existentes.
      - Añadir una interfaz/tipo compartido BlogPostMeta o equivalente para evitar duplicar forma de metadatos entre loaders y UI.

  ## Design Review

  - Problemas actuales detectados
      - El home muestra posts falsos/hardcodeados y no refleja el contenido real.
      - El índice del blog es funcional pero plano; la jerarquía entre título, fecha y extracto puede mejorar.
      - La vista individual usa prose sobre una caja técnica correcta, pero la lectura larga todavía se siente más “contenedor” que
        “experiencia editorial”.

      - Falta una noción visible de sistema de contenido: tags, portada, borradores y estructura editorial.

  - Dirección propuesta
      - No separar visualmente el blog del portafolio; sí darle una capa de lectura más fuerte.
      - Usar el modo markdown preview como contraste controlado, no como mini-sitio independiente.
      - Mantener la “chrome” del proyecto y variar el interior del contenido, no el marco general.

  ## Test Plan

  - Verificar que /admin carga correctamente en local y en Dokploy.
  - Verificar login OAuth con GitHub en producción.
  - Crear, editar y eliminar un post desde Decap; confirmar que el archivo generado respeta la convención esperada.
  - Verificar upload y render de imágenes.
  - Verificar render de Markdown con:
      - headings
      - links
      - listas
      - bloques de código
      - imagen de portada

  - Verificar que home, índice y detalle consumen la misma fuente real.
  - Verificar que draft: true no aparece públicamente en producción.
  - Verificar que ambas vistas (terminal y markdown preview) muestran el mismo contenido y mantienen URL canónica.
  - Ejecutar npm run check y tratar por separado el error preexistente de window.find en NeovimCmd.svelte para no atribuírselo a la
    integración del CMS.

  - Validar responsive en móvil y desktop para índice, detalle y switch de vista.

  ## Assumptions

  - El despliegue seguirá en Dokploy con adapter-node; no se migra a Netlify.
  - La autenticación de Decap se resolverá con un backend/proxy OAuth self-hosted para GitHub, no con Netlify Identity.
  - V1 soporta Markdown enriquecido, imágenes, links y bloques de código; embeds avanzados o componentes Svelte arbitrarios quedan fuera.
  - Los posts seguirán siendo archivos versionados en Git.
  - La internacionalización del contenido editorial no se expande en esta fase; se deja el esquema listo con language para una fase
    posterior.
