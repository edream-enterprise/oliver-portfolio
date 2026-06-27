import { loadBlogPosts } from '$lib/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const latestPosts = loadBlogPosts({ limit: 2 });
	return { latestPosts };
};
