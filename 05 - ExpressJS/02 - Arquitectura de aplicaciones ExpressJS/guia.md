# Guía para Crear una Aplicación con Express Generator

## 1. Instalación Global de Express Generator
Para facilitar la creación de proyectos con Express, instalamos el generador de aplicaciones de forma global:

```sh
npm install -g express-generator
```

## 2. Creación de una Aplicación con Express Generator
Generamos un nuevo proyecto llamado `PrimeraApp` usando el siguiente comando:

```sh
express --no-view --git PrimeraApp
```

Explicación de los flags utilizados:
- `--no-view`: No se incluye ninguna plantilla de motor de vistas.
- `--git`: Genera un archivo `.gitignore` para evitar subir archivos innecesarios a un repositorio.

A continuación, entramos en el directorio del proyecto:

```sh
cd PrimeraApp
```

## 3. Instalación de Dependencias
Ejecutamos el siguiente comando para instalar todas las dependencias del proyecto:

```sh
npm install
```

## 4. Configuración del `package.json`
Editamos el archivo `package.json` para agregar el comando `dev` con `nodemon`, lo que nos permite reiniciar automáticamente el servidor cuando se detectan cambios.

```json
{
  "name": "primeraapp",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "^4.21.2",
    "http-errors": "~1.6.3",
    "jade": "^0.29.0",
    "morgan": "~1.9.1"
  }
}
```

## 5. Revisión del Archivo `www`
El archivo `bin/www` es el punto de entrada del servidor. Se encarga de crear el servidor HTTP y manejar errores.

```js
#!/usr/bin/env node

var app = require('../app');
var debug = require('debug')('primeraapp:server');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requiere privilegios elevados');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' ya está en uso');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'puerto ' + addr.port;
  debug('Escuchando en ' + bind);
}
```

## 6. Revisión del Archivo `app.js`
El archivo `app.js` define la aplicación Express y su configuración básica:

```js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Captura de errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```

## 7. Iniciar la Aplicación
Finalmente, iniciamos la aplicación con:

```sh
npm run dev
```

Luego, abrimos el navegador y accedemos a:

```
http://localhost:3000
```

Con esto, hemos configurado y lanzado nuestro primer servidor Express utilizando `express-generator`. 🎉

