# Creación de aplicaciones con Socket.io en Express

## Instalación de Socket.io

Para agregar la librería `socket.io` a nuestro proyecto, primero debemos instalarla a través de `npm`:

```sh
npm install socket.io
```

## Configuración del servidor con Socket.io

Dentro de nuestro proyecto Express, modificamos el archivo `www` (renombrado a `www.js` para que `nodemon` detecte los cambios) y agregamos la configuración de `socket.io`.

### Estructura básica del servidor con WebSockets

```javascript
const http = require('http');
const app = require('../app');

/**
 * Crear el servidor HTTP.
 */
var server = http.createServer(app);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Se ha conectado un nuevo cliente');
  
  // Notificar a todos menos al nuevo cliente
  socket.broadcast.emit('mensaje_chat', {
    usuario: 'INFO',
    mensaje: 'Se ha conectado un nuevo usuario'
  });
  
  // Enviar la cantidad de clientes conectados
  io.emit('num_clientes', io.engine.clientsCount);

  // Manejo de mensajes del chat
  socket.on('mensaje_chat', (data) => {
    io.emit('mensaje_chat', data);
  });

  // Manejo de desconexión de un cliente
  socket.on('disconnect', () => {
    io.emit('num_clientes', io.engine.clientsCount);
    io.emit('mensaje_chat', {
      usuario: 'INFO',
      mensaje: 'Se ha desconectado un cliente'
    });
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```

## Integración con Pug en el Frontend

En el archivo `index.pug`, creamos la estructura del chat:

```pug
extends layout

block content
  h1= title
  he#numClientes
  ul#mensajes

  div
    label Nombre
    input#inputUsuario(type="text")
  div
    label Mensaje
    input#inputMensaje(type="text")
  button#btnEnviar Enviar

  script(src="/socket.io/socket.io.js")
  script.
    const socket = io();

    const inputUsuario = document.getElementById('inputUsuario')
    const inputMensaje = document.getElementById('inputMensaje')
    const btnEnviar = document.getElementById('btnEnviar')
    const mensajes = document.getElementById('mensajes')
    const numClientes = document.getElementById('numClientes')

    btnEnviar.addEventListener('click', ()=>{
      socket.emit('mensaje_chat', {
        usuario: inputUsuario.value,
        mensaje: inputMensaje.value
      });
    });

    socket.on('mensaje_chat', data =>{
      const li = document.createElement('li');
      li.innerText = `${data.usuario} : ${data.mensaje}`;
      mensajes.append(li);
    });

    socket.on('num_clientes', num =>{
      numClientes.innerText = `Clientes conectados: ${num}`;
    });
```

## Pruebas y resultados

Para probar la aplicación:

1. Abrimos el servidor con `npm run dev` como hemos configurado en package.json:
   ```sh
   npm run dev
   ```
2. Accedemos a `http://localhost:3000` en diferentes navegadores o pestañas.
3. Observamos los mensajes en el chat y cómo el número de clientes conectados cambia en tiempo real.
4. Al escribir un mensaje en una pestaña, se refleja en todas las demás.
5. Al cerrar una pestaña, se muestra el mensaje de desconexión y se actualiza el número de clientes.

## Explicación de Socket.io y sus usos

Socket.io es una librería que facilita la comunicación en tiempo real entre clientes y servidores mediante WebSockets. Algunos de sus usos incluyen:

- **Chats en tiempo real** (como el que hemos implementado).
- **Notificaciones en vivo** en aplicaciones web.
- **Actualizaciones en tiempo real** en paneles de control o dashboards.
- **Juegos multijugador** donde es crucial la comunicación entre clientes.
- **Colaboración en documentos en vivo** (como Google Docs).

Con esto hemos construido una aplicación de chat básica y hemos explorado los conceptos fundamentales de Socket.io en Express. 🚀

