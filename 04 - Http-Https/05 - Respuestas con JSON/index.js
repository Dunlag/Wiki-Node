const http = require('http');

const data = require('./public/productos.json')

http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type' : 'application/json'});
    res.end(JSON.stringify(data));
}) .listen(3000);

