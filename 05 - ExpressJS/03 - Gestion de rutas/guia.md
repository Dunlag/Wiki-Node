# Gestión de Rutas en Express.js

## 1. Definir el sistema de rutas
Antes de comenzar a implementar rutas en una aplicación de Express, es recomendable tener claro el sistema de rutas que se va a utilizar. Para ello, se creó un archivo `rutas.md` con la siguiente estructura:

```
GET /productos - Mostrar todos los productos
GET /products/new - Muestra el formulario
POST /products/create

GET /users
GET /users/edit
POST /users/update
```

Esto permite planificar de antemano las rutas necesarias para la aplicación.

## 2. Creación de un sistema de rutas modular

Para mejorar la organización del código, las rutas se modularizan en archivos separados y luego se importan en `app.js`.

### 2.1 Creación del archivo `products.js`
Se creó un archivo `products.js` en la carpeta `routes/` con las siguientes rutas:

```javascript
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Recuperamos todos los productos');
});

router.get('/new', (req, res) => {
    res.send('Formulario para crear productos');
});

router.post('/create', (req, res) => {
    res.send('Gestión de los datos del formulario');
});

module.exports = router;
```

### 2.2 Modificación de `app.js` para usar las rutas de productos
En `app.js`, se importaron las rutas de productos y se añadieron al sistema de rutas de la aplicación:

```javascript
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// Importando las rutas de productos
const productsRouter = require('./routes/products');

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
// Usando el archivo de rutas de productos
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

### 2.3 Modificación de `users.js`
Se modificó `users.js` en la carpeta `routes/` para incluir rutas adicionales:

```javascript
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Lista de usuarios");
});

router.get("/edit", (req, res) => {
  res.send("Formulario de edición");
});

router.post("/update", (req, res) => {
  res.send("Gestión del formulario de edición");
});

module.exports = router;
```

## 3. Pruebas de las rutas con `peticiones.rest`
Para probar las rutas de `products`, se creó el archivo `peticiones.rest`, que permite realizar peticiones HTTP fácilmente:

```
GET http://localhost:3000/products

###
GET http://localhost:3000/products/new

###
POST http://localhost:3000/products/create
```

## 4. Beneficios de modularizar las rutas
- **Mejor organización del código**: Se evita que `app.js` crezca demasiado y se vuelve más fácil de mantener.
- **Escalabilidad**: Se pueden añadir nuevas rutas sin afectar la estructura principal.
- **Reutilización de código**: Se pueden reutilizar las rutas en otros proyectos o módulos de la aplicación.

---
Este método permite estructurar mejor una aplicación Express y simplificar la gestión de rutas mediante la modularización. 🚀

