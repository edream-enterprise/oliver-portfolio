import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob('/src/lib/content/blog/*.md', { eager: true });

	const posts = Object.entries(modules).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.md', '');
		const metadata = (module as any).metadata;
		return {
			slug,
			...metadata
		};
	});

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
