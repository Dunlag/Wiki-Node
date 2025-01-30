const http = require('http');
const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const server = http.createServer(async(req, res ) =>{
    if(req.url === '/'){
        const data = await fsPromises.readFile('./public/index.html', 'utf-8');
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    }else if(req.url.match(/.css$/)){
        const cssPath = path.join(__dirname, 'public', req.url)
        const stream = fs.createReadStream(cssPath, 'utf-8');
        res.writeHead(200, {'Content-Type' : 'text/css'});
        stream.pipe(res);
    }else if(req.url.match(/.jpg$/)){
        const jpgPath = path.join(__dirname, 'public', req.url)
        const stream = fs.createReadStream(jpgPath);
        res.writeHead(200, {'Content-Type' : 'image/jpg'});
        stream.pipe(res);
    }else{
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('404 Not Found la pagina');
    }
})

server.listen(3000);