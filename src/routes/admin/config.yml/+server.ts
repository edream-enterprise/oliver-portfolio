import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

function yamlValue(value: string): string {
	return JSON.stringify(value);
}

function isEnabled(value: string | undefined): boolean {
	return value === 'true' || value === '1';
}

export const GET: RequestHandler = () => {
	const backendName = env.DECAP_BACKEND_NAME ?? 'github';
	const repo = env.DECAP_REPO ?? 'edream-enterprise/oliver-portfolio';
	const branch = env.DECAP_BRANCH ?? 'main';
	const baseUrl = env.DECAP_BASE_URL;
	const authEndpoint = env.DECAP_AUTH_ENDPOINT;
	const localBackend = isEnabled(env.DECAP_LOCAL_BACKEND);

	const config = `# Decap CMS Configuration
# Generated at runtime so Dokploy environment variables can configure auth.

backend:
  name: ${yamlValue(backendName)}
  repo: ${yamlValue(repo)}
  branch: ${yamlValue(branch)}
${baseUrl ? `  base_url: ${yamlValue(baseUrl)}\n` : ''}${authEndpoint ? `  auth_endpoint: ${yamlValue(authEndpoint)}\n` : ''}
${localBackend ? 'local_backend: true\n' : ''}
media_folder: "static/uploads"
public_folder: "/uploads"

i18n:
  structure: multiple_files
  locales: ["en", "es"]
  default_locale: "en"

collections:
  - name: "blog"
    label: "Blog Posts"
    folder: "src/lib/content/blog"
    create: true
    delete: true
    i18n: true
    slug: "{{slug}}"
    extension: "md"
    format: "frontmatter"
    preview_path: "blog/{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string", required: true,
          i18n: true }
      - { label: "Slug", name: "slug", widget: "string", required: true,
          hint: "Shared URL-friendly identifier, e.g. my-first-post",
          i18n: true }
      - { label: "Date", name: "date", widget: "datetime", format: "YYYY-MM-DD",
          date_format: "YYYY-MM-DD", time_format: false, required: true,
          i18n: true }
      - { label: "Excerpt", name: "excerpt", widget: "text", required: true,
          hint: "Short summary shown in the blog index and meta description.",
          i18n: true }
      - { label: "Cover Image", name: "coverImage", widget: "image", required: false,
          hint: "Optional hero image (stored in /static/uploads/).",
          i18n: true }
      - { label: "Tags", name: "tags", widget: "list", required: false,
          hint: "Comma-separated list of tags, e.g. DevOps, Linux, Neovim",
          i18n: true }
      - { label: "Draft", name: "draft", widget: "boolean", default: false,
          hint: "When enabled, this post is hidden from public pages in production.",
          i18n: true }
      - { label: "Canonical URL", name: "canonicalUrl", widget: "string", required: false,
          hint: "Optional. Overrides the default canonical URL for cross-posted content.",
          i18n: true }
      - { label: "Body", name: "body", widget: "markdown", required: true,
          i18n: true }
`;

	return new Response(config, {
		headers: {
			'Content-Type': 'text/yaml; charset=utf-8',
			'Cache-Control': 'no-store'
		}
	});
};
