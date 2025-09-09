import type { PageServerLoad } from './$types';
import { MAIL_DB_URL, TINYMCE_API_KEY } from '$env/static/private';

export const load = (async ({url, fetch}) => {

    let mode = 'create';

    if(url.searchParams.get('id')){
        mode = 'edit';

            const response = await fetch(`${MAIL_DB_URL}/posts/${url.searchParams.get('id')}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'  
            }
        });
        const post = await response.json();

        post.id = url.searchParams.get('id');

        if (post === null) {
            mode = 'post-error';
            return {TINYMCE_API_KEY, mode};
        }

        return {TINYMCE_API_KEY, post, mode};
    } else {
        mode = 'create';
        return {TINYMCE_API_KEY, mode};
    }


}) satisfies PageServerLoad;