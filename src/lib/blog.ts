/**
 * Shared blog types and loading utilities.
 * Single source of truth for all blog-related data loading.
 */

import type { Component } from 'svelte';

export const BLOG_LANGUAGES = ['en', 'es'] as const;
export type BlogLanguage = (typeof BLOG_LANGUAGES)[number];

export interface BlogPostMeta {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	tags?: string[];
	coverImage?: string;
	draft?: boolean;
	language: BlogLanguage;
	canonicalUrl?: string;
}

export interface BlogPostVariant extends BlogPostMeta {
	content: Component;
}

type BlogPostMarkdownModule = {
	default: Component;
	metadata: Partial<Omit<BlogPostMeta, 'slug' | 'language'>> & {
		slug?: string;
		language?: string;
	};
};

const DEFAULT_LANGUAGE: BlogLanguage = 'en';

function isBlogLanguage(language: string | undefined): language is BlogLanguage {
	return BLOG_LANGUAGES.includes(language as BlogLanguage);
}

function getFileSlug(path: string): string {
	const filename = path.split('/').pop()?.replace(/\.md$/, '') ?? '';
	return filename.replace(/\.(en|es)$/, '');
}

function getLanguage(path: string, language: string | undefined): BlogLanguage {
	if (isBlogLanguage(language)) {
		return language;
	}

	const fileLanguage = path.match(/\.(en|es)\.md$/)?.[1];
	if (isBlogLanguage(fileLanguage)) {
		return fileLanguage;
	}

	return DEFAULT_LANGUAGE;
}

function readBlogPost(path: string, module: unknown): BlogPostVariant {
	const fileSlug = getFileSlug(path);
	const post = module as BlogPostMarkdownModule;
	const raw = post.metadata;

	return {
		content: post.default,
		slug: raw.slug ?? fileSlug,
		title: raw.title ?? '',
		date: raw.date ?? '',
		excerpt: raw.excerpt ?? '',
		tags: raw.tags ?? [],
		coverImage: raw.coverImage,
		draft: raw.draft ?? false,
		language: getLanguage(path, raw.language),
		canonicalUrl: raw.canonicalUrl
	};
}

function toBlogPostMeta(post: BlogPostVariant): BlogPostMeta {
	return {
		slug: post.slug,
		title: post.title,
		date: post.date,
		excerpt: post.excerpt,
		tags: post.tags,
		coverImage: post.coverImage,
		draft: post.draft,
		language: post.language,
		canonicalUrl: post.canonicalUrl
	};
}

function sortByDateDesc<T extends Pick<BlogPostMeta, 'date'>>(posts: T[]): T[] {
	return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Load all published blog posts, sorted by date descending.
 * Filters out drafts in production.
 */
export function loadBlogPosts(options?: { limit?: number }): BlogPostMeta[] {
	const modules = import.meta.glob('/src/lib/content/blog/*.md', { eager: true });
	const isDev = import.meta.env.DEV;

	const posts = Object.entries(modules)
		.map(([path, module]) => readBlogPost(path, module))
		.map(toBlogPostMeta)
		.filter((post) => isDev || !post.draft);

	const sortedPosts = sortByDateDesc(posts);

	if (options?.limit !== undefined) {
		return sortedPosts.slice(0, options.limit);
	}

	return sortedPosts;
}

export function getLocalizedBlogPosts(
	posts: BlogPostMeta[],
	language: BlogLanguage,
	options?: { limit?: number }
): BlogPostMeta[] {
	const groupedPosts = new Map<string, BlogPostMeta[]>();

	for (const post of posts) {
		const variants = groupedPosts.get(post.slug) ?? [];
		variants.push(post);
		groupedPosts.set(post.slug, variants);
	}

	const localizedPosts = [...groupedPosts.values()].map(
		(variants) =>
			variants.find((post) => post.language === language) ??
			variants.find((post) => post.language === DEFAULT_LANGUAGE) ??
			variants[0]
	);

	const sortedPosts = sortByDateDesc(localizedPosts);

	if (options?.limit !== undefined) {
		return sortedPosts.slice(0, options.limit);
	}

	return sortedPosts;
}

export function loadBlogPostVariants(slug: string): BlogPostVariant[] {
	const modules = import.meta.glob('/src/lib/content/blog/*.md', { eager: true });
	const isDev = import.meta.env.DEV;

	return Object.entries(modules)
		.map(([path, module]) => readBlogPost(path, module))
		.filter((post) => post.slug === slug)
		.filter((post) => isDev || !post.draft)
		.sort((a, b) => BLOG_LANGUAGES.indexOf(a.language) - BLOG_LANGUAGES.indexOf(b.language));
}
