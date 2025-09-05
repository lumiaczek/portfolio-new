import { MAIL_DB_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async ({fetch}) => {


    const response = await fetch(`${MAIL_DB_URL}/views.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'  
        }
    });

    let data = await response.json();        
    
    console.log(data);


    data++;
    
    await fetch(`${MAIL_DB_URL}/views.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });


    return {};
}) satisfies PageServerLoad;