import { LOGIN, PASSWORD, SECRET_KEY } from '$env/static/private';
import jwt from 'jsonwebtoken';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { login, password } = await request.json();

	// Check if the login and password match the environment variables
    if (login === LOGIN && password === PASSWORD) {

        const token = jwt.sign({
            login: LOGIN,
            role: 'admin'
        }, SECRET_KEY, {
            expiresIn: '1h' // Token
        });

        return new Response(JSON.stringify({ success: true, token }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), {
        status: 401,
        headers: {
            'Content-Type': 'application/json'
        }
    });


};