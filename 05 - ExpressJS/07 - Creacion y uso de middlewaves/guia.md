# Uso de Middlewares en Express.js

Los **middlewares** en Express.js son funciones que tienen acceso al objeto de solicitud (**req**), al objeto de respuesta (**res**) y a la función **next()** en el ciclo de solicitud-respuesta. Estas funciones pueden realizar diversas tareas, como:

- Modificar los objetos **req** y **res**.
- Finalizar la solicitud.
- Pasar el control a otro middleware usando **next()**.

## Creación y Uso de Middlewares

En este ejemplo, trabajamos con el archivo `app.js` y añadimos varios **middlewares** antes de definir nuestras rutas.

### Código en `app.js`

```javascript
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs/promises');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

var app = express();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middlewares básicos
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares personalizados

// 1. Registrar la fecha de la petición
app.use((req, res, next) => {
  console.log(new Date());
  req.currentDay = new Date();
  next();
});

// 2. Middleware con restricción aleatoria
app.use((req, res, next) => {
  const randomNum = Math.random();
  if (randomNum > 0.6) {
    res.send('No puedes acceder');
  } else {
    next();
  }
});

// 3. Middleware para registrar las peticiones en un archivo
app.use(async (req, res, next) => {
  await fs.appendFile('./main.log', `Método de la petición: ${req.method} y URL: ${req.url}\n`);
  next();
});

// Definición de rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Manejo de errores 404
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

## Importancia de la Ubicación de los Middlewares

- Los **middlewares de configuración** (`express.json()`, `cookieParser()`, `express.static()`) deben ir al principio para asegurarse de que las solicitudes entrantes sean manejadas correctamente.
- Los **middlewares personalizados** deben ir después de los anteriores y antes de las rutas, para que todas las rutas se beneficien de su funcionalidad.
- El **manejo de errores** (`404` y `error handler`) debe estar al final del archivo, para capturar cualquier solicitud no manejada.

## Uso del Middleware en las Rutas (`products.js`)

```javascript
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.query);
    const { page, limit } = req.query;
    console.log(page, limit);
    console.log('Fecha de la petición:', req.currentDay);
    res.send('Recuperamos todos los productos');
});

router.get('/new', (req, res) => {
    res.send('Formulario para crear productos');
});

router.get('/:productId', (req, res) => {
    console.log(req.params);
    const { productId } = req.params;
    res.send('Recupero el producto con ID: ' + productId);
});

router.post('/create', (req, res) => {
    console.log(req.body);
    const { name, price } = req.body;
    console.log(name, price);
    res.send('Gestión de los datos del formulario');
});

module.exports = router;
```

## Explicación del Middleware de Registro de Peticiones

```javascript
app.use(async (req, res, next) => {
  await fs.appendFile('./main.log', `Método de la petición: ${req.method} y URL: ${req.url}\n`);
  next();
});
```

Este middleware:
- Usa `fs.appendFile` para escribir en un archivo `main.log`.
- Guarda información sobre el método (`GET`, `POST`, etc.) y la URL de la petición.
- Llama a `next()` para que la ejecución continúe con el siguiente middleware o ruta.

## Posibles Usos de los Middlewares

Los **middlewares** en Express.js tienen muchos usos prácticos, como:

- **Autenticación y autorización**: Verificar si el usuario está autenticado antes de permitir el acceso a ciertas rutas.
- **Registro de logs**: Guardar información de las peticiones en archivos o en bases de datos para auditoría.
- **Compresión de respuestas**: Usar librerías como `compression` para reducir el tamaño de las respuestas enviadas al cliente.
- **Protección contra ataques**: Implementar middlewares como `helmet` para mejorar la seguridad de la aplicación.
- **Gestión de errores personalizados**: Capturar errores y devolver respuestas JSON con detalles específicos.

Con esto finaliza la sección de **middlewares** en Express.js. 🚀

