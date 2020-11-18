// import { url } from './config';

async function fetchQuery(query) {
    let url = 'http://localhost:5000/api/graphql';

    if (process.env.NODE_ENV === 'production') 
        url = '/api/graphql'

    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query: query})
    }) 
        .then(res => res.json())
        .then(res => {
            return res;
        })
}

export {
    fetchQuery
}