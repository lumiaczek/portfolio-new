import { MAIL_DB_URL } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {

    const response = await fetch(`${MAIL_DB_URL}/views.json`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'  
				}
			});

	const data = await response.json();    

     return new Response(JSON.stringify(data), {
        status: 200,    
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const DELETE: RequestHandler = async () => {

    const response = await fetch(`${MAIL_DB_URL}/views.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'  
        }
    });

    let data = await response.json();        

    data = 0;
    
    await fetch(`${MAIL_DB_URL}/views.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
  

     return new Response(JSON.stringify(data), {
        status: 200,    
        headers: {
            'Content-Type': 'application/json'
        }
    });
};