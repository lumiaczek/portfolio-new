import {MAIL_DB_URL} from '$env/static/private';

import type { PageServerLoad } from './$types';

export const load = (async ({fetch}) => {

    let posts;

    const response = await fetch(`${MAIL_DB_URL}/posts.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'  
        }
    });

    const data = await response.json();
    if (response.ok) {
				if (data === null) {
					posts = [];
					return;
				}
				if (data && typeof data === 'object' && !Array.isArray(data)) {
					posts = Object.entries(data)
						.map(([id, post]) => ({
							id,
							...(typeof post === 'object' && post !== null ? post : {})
						}))
						.reverse();
				} else {
					posts = Array.isArray(data) ? data.slice().reverse() : data;
				}
			} else {
				console.error('Failed to fetch mails');
			}


    if (!response.ok) {
        console.error('Error fetching posts:', data);
        return {};
    }
    return {posts};
}) satisfies PageServerLoad;


