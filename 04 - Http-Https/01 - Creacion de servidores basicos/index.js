const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('Metodo', req.method);
    console.log('Url', req.url);
    console.log('Header', req.headers);
    
    res.end('hola server');
});

server.listen(3000);