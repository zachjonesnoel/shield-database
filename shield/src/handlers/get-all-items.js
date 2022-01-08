
const http = require('http'); 

const defaultOptions = {
    host: 'https://data.mongodb-api.com/app/data-whpzf/endpoint/data/beta/action',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'mxzhlSO4Z3HgTIWTXISFi6wzHg1zA7Roqur71KuIwXrn0eL3mov4VjgEQcCjCWUg'
    },
}

const post = (path, payload) => new Promise((resolve, reject) => {
    const options = { ...defaultOptions, path, method: 'POST' };
    const req = http.request(options, res => {
        let buffer = "";
        res.on('data', chunk => buffer += chunk)
        res.on('end', () => resolve(JSON.parse(buffer)))
    });
    req.on('error', e => reject(e.message));
    req.write(JSON.stringify(payload));
    req.end();
})
var data = JSON.stringify({
    "collection": "shield_agents",
    "database": "shield_database",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
                  

exports.getAllItemsHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    let items = await post("/findOne", {
        "collection": "shield_agents",
        "database": "shield_database",
        "dataSource": "Cluster0",
        "projection": {
            "_id": 1
        }
    });
   
    const response = {
        statusCode: 200,
        body: JSON.stringify(items)
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
