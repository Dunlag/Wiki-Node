const http =require('http');
const fs = require('fs');

http.createServer((req, res) =>{
    if(req.method === 'GET'){
        //RETORNAR FORMULARIO
        res.writeHead(200,{'content-type' : 'text/html'});
        fs.createReadStream('./public/formulario.html', 'utf-8').pipe(res)
    }else if (req.method==='POST'){
        //GESTIONAR EL VALOR DEL FORMULARIO
        let body = '';
        req.on('data', chunk =>{
            body += chunk;
        })

        req.on('end', () =>{
            res.end(body);
        });
    }
}).listen(3000);