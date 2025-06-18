import { MAIL_DB_URL } from '$env/static/private';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { service, name, email, message } = await request.json();

	if (!service || !name || !email || !message) {
		return json({ error: 'Brak wymaganych pól.' }, { status: 400 });
	}

	const newMail = {
        service,
        name,
        email,
        message,
        date: new Date().toLocaleString()
    };

    const req = await fetch(`${MAIL_DB_URL}/mails.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMail)
    });
    if (!req.ok) {
        return json({ error: 'Błąd podczas wysyłania wiadomości.' }, { status: 500 });
    }
    const data = await req.json();
    return json({ success: true, data }, { status: 200 });

};