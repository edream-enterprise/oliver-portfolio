import type { RequestHandler } from './$types';

/**
 * Serve the Decap CMS admin SPA directly as a raw HTML response.
 * Using a server endpoint (instead of +page.svelte) lets us bypass the
 * SvelteKit layout entirely and avoid redirect loops caused by
 * /admin → /admin/ → /admin → …
 */
export const GET: RequestHandler = () => {
	const html = /* html */ `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- The page is served at /admin (no trailing slash) by the SvelteKit endpoint.
         <base> ensures relative URLs (config.yml, etc.) resolve from /admin/ so
         Decap fetches /admin/config.yml from the runtime SvelteKit endpoint. -->
    <base href="/admin/" />
    <title>Content Manager | Oliver's Portfolio</title>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" defer></script>
  </head>
  <body>
    <div id="nc-root"></div>
  </body>
</html>`;

	return new Response(html, {
		headers: { 'Content-Type': 'text/html; charset=utf-8' }
	});
};
