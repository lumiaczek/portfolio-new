import { MAIL_DB_URL } from '$env/static/private';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { title, content, description, published} = await request.json();

	if (!title || !content || !description) {
		return json({ error: 'Brak wymaganych pól.' }, { status: 400 });
	}

	const newPost = {
        title,
        description,
        content,
        published,
        date: new Date().toLocaleString()
    };

    const req = await fetch(`${MAIL_DB_URL}/posts.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });
    if (!req.ok) {
        return json({ error: 'Błąd podczas tworzenia posta.' }, { status: 500 });
    }
    const data = await req.json();
    return json({ success: true, data }, { status: 200 });

};

export const PUT: RequestHandler = async ({ request }) => {
    const { id, title, content, description, published } = await request.json();
    if (!id || !title || !content || !description) {
        return json({ error: 'Brak wymaganych pól.' }, { status: 400 });
    }
    const updatedPost = {
        title,
        description,
        content,
        published,
        date: new Date().toLocaleString()
    };
    const req = await fetch(`${MAIL_DB_URL}/posts/${id}.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
    });
    if (!req.ok) {
        return json({ error: 'Błąd podczas aktualizacji posta.' }, { status: 500 });
    }
    const data = await req.json();
    return json({ success: true, data }, { status: 200 });
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


    const response = await fetch(`${MAIL_DB_URL}/posts/${id}.json`, {
        method: 'DELETE',
    });
    

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error deleting posts:', errorData);
        return new Response(JSON.stringify({ error: 'Failed to delete post' }), {
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