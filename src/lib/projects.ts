/**
 * Shared project types and loading utilities.
 * Single source of truth for all project-related data loading.
 */

import type { Component } from 'svelte';

export const PROJECT_LANGUAGES = ['en', 'es'] as const;
export type ProjectLanguage = (typeof PROJECT_LANGUAGES)[number];

export interface ProjectMeta {
	title: string;
	slug: string;
	description: string;
	tags?: string[];
	repoUrl?: string;
	demoUrl?: string;
	order: number;
	featured?: boolean;
	draft?: boolean;
	language: ProjectLanguage;
}

export interface ProjectVariant extends ProjectMeta {
	content: Component;
}

type ProjectMarkdownModule = {
	default: Component;
	metadata: Partial<Omit<ProjectMeta, 'slug' | 'language' | 'order'>> & {
		slug?: string;
		language?: string;
		order?: number | string;
	};
};

const DEFAULT_LANGUAGE: ProjectLanguage = 'en';

function isProjectLanguage(language: string | undefined): language is ProjectLanguage {
	return PROJECT_LANGUAGES.includes(language as ProjectLanguage);
}

function getFileSlug(path: string): string {
	const filename = path.split('/').pop()?.replace(/\.md$/, '') ?? '';
	return filename.replace(/\.(en|es)$/, '');
}

function getLanguage(path: string, language: string | undefined): ProjectLanguage {
	if (isProjectLanguage(language)) {
		return language;
	}

	const fileLanguage = path.match(/\.(en|es)\.md$/)?.[1];
	if (isProjectLanguage(fileLanguage)) {
		return fileLanguage;
	}

	return DEFAULT_LANGUAGE;
}

function getOrder(order: number | string | undefined): number {
	if (typeof order === 'number') {
		return order;
	}

	if (typeof order === 'string') {
		const parsedOrder = Number.parseInt(order, 10);
		return Number.isNaN(parsedOrder) ? 0 : parsedOrder;
	}

	return 0;
}

function readProject(path: string, module: unknown): ProjectVariant {
	const fileSlug = getFileSlug(path);
	const project = module as ProjectMarkdownModule;
	const raw = project.metadata;

	return {
		content: project.default,
		slug: raw.slug ?? fileSlug,
		title: raw.title ?? '',
		description: raw.description ?? '',
		tags: raw.tags ?? [],
		repoUrl: raw.repoUrl,
		demoUrl: raw.demoUrl,
		order: getOrder(raw.order),
		featured: raw.featured ?? true,
		draft: raw.draft ?? false,
		language: getLanguage(path, raw.language)
	};
}

function toProjectMeta(project: ProjectVariant): ProjectMeta {
	return {
		slug: project.slug,
		title: project.title,
		description: project.description,
		tags: project.tags,
		repoUrl: project.repoUrl,
		demoUrl: project.demoUrl,
		order: project.order,
		featured: project.featured,
		draft: project.draft,
		language: project.language
	};
}

function sortByOrder<T extends Pick<ProjectMeta, 'order' | 'title'>>(projects: T[]): T[] {
	return [...projects].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function loadProjects(options?: { featuredOnly?: boolean; limit?: number }): ProjectMeta[] {
	const modules = import.meta.glob('/src/lib/content/projects/*.md', { eager: true });
	const isDev = import.meta.env.DEV;

	const projects = Object.entries(modules)
		.map(([path, module]) => readProject(path, module))
		.map(toProjectMeta)
		.filter((project) => isDev || !project.draft)
		.filter((project) => !options?.featuredOnly || project.featured);

	const sortedProjects = sortByOrder(projects);

	if (options?.limit !== undefined) {
		return sortedProjects.slice(0, options.limit);
	}

	return sortedProjects;
}

export function getLocalizedProjects(
	projects: ProjectMeta[],
	language: ProjectLanguage,
	options?: { featuredOnly?: boolean; limit?: number }
): ProjectMeta[] {
	const groupedProjects = new Map<string, ProjectMeta[]>();

	for (const project of projects) {
		const variants = groupedProjects.get(project.slug) ?? [];
		variants.push(project);
		groupedProjects.set(project.slug, variants);
	}

	const localizedProjects = [...groupedProjects.values()].map(
		(variants) =>
			variants.find((project) => project.language === language) ??
			variants.find((project) => project.language === DEFAULT_LANGUAGE) ??
			variants[0]
	);

	const sortedProjects = sortByOrder(
		localizedProjects.filter((project) => !options?.featuredOnly || project.featured)
	);

	if (options?.limit !== undefined) {
		return sortedProjects.slice(0, options.limit);
	}

	return sortedProjects;
}
