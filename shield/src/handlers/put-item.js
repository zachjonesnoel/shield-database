var axios = require('axios');

exports.putItemHandler = (event, context, callback) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`put-items only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);
    let collection = ""
    switch (event.pathParameters.type) {
        case "agents": collection = "shield_agents"; break;
        case "locations": collection = "shield_locations"; break;
    }
    let inputJson = {}
    inputJson = JSON.parse(event.body)
    
    let data = JSON.stringify({
        "collection": collection,
        "database": "shield_database",
        "dataSource": "Cluster0",
        "document": inputJson
    })
    let config = {
        method: 'post',
        url: process.env.MONGODB_URL + '/insertOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': process.env.MONGODB_API_KEY
        },
        data: data
    };

    axios(config).then(data => {
        console.info(data);
        // All log statements are written to CloudWatch
        const response = {
            "statusCode": 200,
            "headers": {
                "X-Requested-With": '*',
                "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": 'POST,GET,OPTIONS'
            },
            "body": JSON.stringify(data.data)
        };
        callback(null, response);
    });
}
