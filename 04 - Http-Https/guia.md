# Guía de HTTP y HTTPS en Node.js

En esta sección aprenderemos a trabajar con servidores HTTP en Node.js, desde la creación de servidores básicos hasta el manejo de archivos estáticos, peticiones POST y respuestas en formato JSON.

## 1. Creación de servidores básicos

Para crear un servidor básico en Node.js, utilizamos el módulo `http`.

```javascript
const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('Metodo', req.method);
    console.log('Url', req.url);
    console.log('Header', req.headers);
    
    res.end('hola server');
});

server.listen(3000);
```

Podemos probar el servidor utilizando la extensión **REST Client** en VS Code, creando un archivo `peticiones.rest`:

```
GET http://localhost:3000

###

PUT http://localhost:3000/users/edit
```

Al ejecutar `node index.js` y hacer peticiones desde el cliente, veremos la respuesta del servidor en la terminal.

---

## 2. Servidores avanzados 01

En esta sección servimos archivos HTML utilizando `fs/promises` para leer archivos de forma asíncrona.

```javascript
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
```

Este código permite servir un archivo `index.html` cuando el usuario accede a la raíz (`/`). Si la URL no coincide, devuelve un error 404.

---

## 3. Servidores avanzados 02

Añadimos la capacidad de servir archivos CSS e imágenes estáticas.

```javascript
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
```

Este servidor ahora puede servir archivos estáticos como hojas de estilo y imágenes.

---

## 4. Peticiones de tipo POST

Aquí implementamos un servidor que maneja peticiones GET y POST para un formulario.

```javascript
const http = require('http');
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
```

Este código devuelve un formulario cuando la petición es GET y procesa los datos cuando la petición es POST.

---

## 5. Respuestas en formato JSON

Podemos utilizar Node.js para servir respuestas en formato JSON sin necesidad de un framework.

```javascript
const http = require('http');
const data = require('./public/productos.json')

http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type' : 'application/json'});
    res.end(JSON.stringify(data));
}) .listen(3000);
```

Aquí, cargamos un archivo JSON y lo enviamos como respuesta a todas las peticiones. Esto es útil para crear una API simple sin necesidad de Express u otros frameworks.

---

Con estas secciones hemos cubierto las bases de la creación de servidores en Node.js utilizando HTTP y HTTPS.

