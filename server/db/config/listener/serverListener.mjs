//node modules
import * as http from 'node:http'
import * as dotenv from  'dotenv'
dotenv.config()

//dotenv
const SERVER_PORT = process.env.SERVER_PORT
const SERVER_DOMAIN = process.env.SERVER_DOMAIN


//request
import { requestHandler } from '../requestHandler/requestHandler.mjs';

const server = http.createServer(requestHandler)

export const startServer = () => {
    server.listen(SERVER_PORT, () => {
        console.log(`Server running on http://${SERVER_DOMAIN}:${SERVER_PORT}`);
    })
}