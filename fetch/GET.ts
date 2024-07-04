import json from '../example/example-data.json';
import { HOST, PORT } from '../src/config'


import * as http from 'http';

export async function sendGetRequest() {
    const postData = JSON.stringify({ json });

    const options = {
        hostname: HOST,
        port: PORT,
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
    return JSON.parse(postData).json
}