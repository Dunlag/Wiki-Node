const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async(req, res ) =>{
    if(req.url === '/'){
        const data = await fs.readFile('./public/index.html', 'utf-8');
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    }else{
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('404 Not Found la pagina');
    }
})

server.listen(3000);