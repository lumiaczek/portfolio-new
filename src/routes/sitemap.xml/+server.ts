import type { RequestHandler } from './$types';

const BASE_URL = 'https://danielborowski.pl';
const routes = [
	'',
	'about',
	'about#kwalifikacje',
	'cv',
	'contact',
	'blog'
];

export const GET: RequestHandler = async () => {
	const urls = routes.map(
		(route) => `<url><loc>${BASE_URL}/${route}</loc></url>`
	).join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${urls}
	</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};