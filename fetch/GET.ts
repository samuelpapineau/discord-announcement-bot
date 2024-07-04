import { HOST, PORT } from '../src/config'
import * as http from 'http';

export function sendGetRequest(): Promise<string> {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: HOST,
            port: PORT,
            method: 'GET',
        };

        const req = http.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                console.log('Response from server:', responseData);
                resolve(responseData);
            });
        });

        req.on('error', (e) => {
            console.error(`Problem with request: ${e.message}`);
            reject(e.message);
        });

        req.end();
    });
}
