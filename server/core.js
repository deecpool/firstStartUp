const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;
const SERVER_DOMAIN = process.env.SERVER_DOMAIN || 'localhost';

require('./router/loader.js'); 

const Router  = require('./router/router.js');

const server = http.createServer((req, res) => {
    Router.handle(req, res);  
});

server.listen(PORT, SERVER_DOMAIN, () => {
    console.log(`SERVER IS RUNNING ON http://${SERVER_DOMAIN}:${PORT}`);
});
