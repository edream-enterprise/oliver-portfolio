import { loadProjects } from '$lib/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const projects = loadProjects();

	return { projects };
};
