import {MAIL_DB_URL} from '$env/static/private';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async ({fetch, params}) => {

    const response = await fetch(`${MAIL_DB_URL}/posts/${params.slug}.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'  
        }
    });
    const post = await response.json();

    if (post === null) {
        error(404, 'Post not found');
    }

    if (!response.ok) {
        console.error('Error fetching posts:', post);
        return {};
    }
    return {post};

}) satisfies PageServerLoad;