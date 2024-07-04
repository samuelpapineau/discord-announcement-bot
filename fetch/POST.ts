import json from '../example/example-data.json';


import * as http from 'http';

// Function to send POST request
async function sendPostRequest() {
    const postData = JSON.stringify({json});

    const options = {
        hostname: 'localhost',
        port: 5000,
        path: '/data',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const req = http.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log('Response from server:', responseData);
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    // Write data to request body
    req.write(postData);
    req.end();
}

// Call the function to send the POST request
sendPostRequest();