// export function load() {
// 	return {
// 		title: 'Titanic',
// 		content: '<p>This is content from the server</p>'
// 	};
// }
import { get } from '$lib/server/database';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const post = get(params.slug);

	if (!post) {
		throw error(404);
	}

	return post;
}