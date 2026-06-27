import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { loadBlogPostVariants } from '$lib/blog';

export const load: PageLoad = async ({ params }) => {
	const variants = loadBlogPostVariants(params.slug);

	if (variants.length === 0) {
		error(404, `Could not find ${params.slug}`);
	}

	return { variants };
};
