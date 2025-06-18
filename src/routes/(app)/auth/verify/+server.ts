import { SECRET_KEY } from '$env/static/private';
import jwt from 'jsonwebtoken';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {


    const token = request.headers.get('Authorization')?.split(' ')[1] || ''

    if (!token) {
        return new Response(JSON.stringify({ success: false, message: 'No token provided' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return new Response(JSON.stringify({ success: true, data: decoded }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Token verification failed:', error);
        return new Response(JSON.stringify({ success: false, message: 'Invalid token', }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    


    


};