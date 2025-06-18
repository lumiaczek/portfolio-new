import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const MAILS_PATH = path.resolve('src/lib/mails.json');

export const POST: RequestHandler = async ({ request }) => {
	const { service, name, email, message } = await request.json();

	if (!service || !name || !email || !message) {
		return json({ error: 'Brak wymaganych pól.' }, { status: 400 });
	}

	let mails = [];
	if (fs.existsSync(MAILS_PATH)) {
		try {
			const data = fs.readFileSync(MAILS_PATH, 'utf-8');
			mails = JSON.parse(data);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			mails = [];
		}
	}

	const newMail = { service, name, email, message, date: new Date().toISOString() };
	mails.push(newMail);

	fs.writeFileSync(MAILS_PATH, JSON.stringify(mails, null, 2), 'utf-8');

	return json({ success: true });
};