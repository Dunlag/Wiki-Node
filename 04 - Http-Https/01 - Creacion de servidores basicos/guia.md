# HTTP & HTTPS en Node.js

## 1. Creación de Servidores Básicos en Node.js

Node.js proporciona el módulo `http` para crear servidores web sin necesidad de librerías externas.

### 1.1 Configuración del Proyecto

Primero, inicializamos un nuevo proyecto con `npm`:
```sh
npm init -y
```
Esto generará un `package.json` con valores por defecto.

### 1.2 Creación del Servidor HTTP

A continuación, creamos un archivo `index.js` y añadimos el siguiente código:

```js
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Método:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    
    res.end('Hola server');
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
```

### 1.3 Prueba de Peticiones con REST Client

Para probar nuestro servidor, podemos usar la extensión **REST Client** en VS Code.

1. Instalamos la extensión **REST Client** desde la tienda de extensiones.
2. Creamos un archivo `peticiones.rest` con el siguiente contenido:

```http
GET http://localhost:3000

###

PUT http://localhost:3000/users/edit
```

3. Ejecutamos el servidor:
```sh
node index.js
```
4. Hacemos clic en **Send Request** dentro del archivo `peticiones.rest` y observamos la respuesta del servidor.

### 1.4 Explicación del Código

- `http.createServer()` crea un servidor HTTP en Node.js.
- `req.method`: Muestra el método HTTP de la petición (`GET`, `POST`, `PUT`, etc.).
- `req.url`: Muestra la URL a la que se hace la petición.
- `req.headers`: Muestra los headers de la petición.
- `res.end('Hola server');`: Responde con un mensaje de texto.
- `server.listen(3000)`: El servidor escucha en el puerto 3000.

### 1.5 Conclusión

Esta es la base para crear servidores HTTP en Node.js, permitiéndonos manejar peticiones y respuestas de manera sencilla. En próximas secciones, exploraremos más funcionalidades como manejo de rutas y respuestas JSON.

