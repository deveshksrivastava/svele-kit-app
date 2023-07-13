// lib/server can be access from anywhere with $
const db = new Map();

export function create({ title, slug, contents }) {
	db.set(slug, { title, slug, contents });
}

export function get(slug) {
	return db.get(slug);
}
