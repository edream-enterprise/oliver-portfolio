/**
 * Shared blog types and loading utilities.
 * Single source of truth for all blog-related data loading.
 */

export interface BlogPostMeta {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	tags?: string[];
	coverImage?: string;
	draft?: boolean;
	language?: string;
	canonicalUrl?: string;
}

/**
 * Load all published blog posts, sorted by date descending.
 * Filters out drafts in production.
 */
export function loadBlogPosts(options?: { limit?: number }): BlogPostMeta[] {
	const modules = import.meta.glob('/src/lib/content/blog/*.md', { eager: true });
	const isDev = import.meta.env.DEV;

	const posts: BlogPostMeta[] = Object.entries(modules)
		.map(([path, module]) => {
			const slug = path.split('/').pop()?.replace('.md', '') ?? '';
			const raw = (
				module as {
					metadata: Omit<BlogPostMeta, 'slug'>;
				}
			).metadata;

			return {
				slug,
				title: raw.title ?? '',
				date: raw.date ?? '',
				excerpt: raw.excerpt ?? '',
				tags: raw.tags ?? [],
				coverImage: raw.coverImage,
				draft: raw.draft ?? false,
				language: raw.language ?? 'en',
				canonicalUrl: raw.canonicalUrl
			} satisfies BlogPostMeta;
		})
		.filter((post) => isDev || !post.draft);

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	if (options?.limit !== undefined) {
		return posts.slice(0, options.limit);
	}

	return posts;
}
