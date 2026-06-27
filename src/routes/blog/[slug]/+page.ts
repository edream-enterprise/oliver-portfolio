import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { BlogPostMeta } from '$lib/blog';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../lib/content/blog/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata as BlogPostMeta
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
};
