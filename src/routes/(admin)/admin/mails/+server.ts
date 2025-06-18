import {MAIL_DB_URL} from '$env/static/private';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {

    const response = await fetch(`${MAIL_DB_URL}/mails.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'  
        }
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('Error fetching mails:', data);
        return new Response(JSON.stringify({ error: 'Failed to fetch mails' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return new Response(JSON.stringify(data), {
        status: 200,    
        headers: {
            'Content-Type': 'application/json'
        }
    });

    
};

export const DELETE: RequestHandler = async ({ url }) => {
    
    const id = url.searchParams.get('id');


    
    if (!id) {
        return new Response(JSON.stringify({ error: 'ID is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }


    const response = await fetch(`${MAIL_DB_URL}/mails/${id}.json`, {
        method: 'DELETE',
    });
    

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error deleting mail:', errorData);
        return new Response(JSON.stringify({ error: 'Failed to delete mail' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};