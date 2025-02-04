# Uso de Parámetros Variables en la URL en Express

## Introducción
En esta parte del proyecto, hemos aprendido a manejar parámetros en la URL, lo que nos permite capturar valores dinámicos como identificadores de productos. Esto es útil para recuperar información específica según un ID pasado en la ruta.

## Modificación del archivo `products.js`

Hemos añadido una nueva ruta `GET` que acepta un parámetro variable en la URL. El archivo `products.js` ahora queda de la siguiente manera:

```javascript
const router = require('express').Router();

router.get('/', (req, res) => {
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
    res.send('Gestión de los datos del formulario');
});

module.exports = router;
```

## Importancia del Orden de las Rutas

El orden en el que definimos nuestras rutas en Express es crucial para evitar errores de enrutamiento. Si colocamos la ruta con el parámetro `:productId` antes de la ruta `/new`, la petición `GET /products/new` será interpretada como una petición a `/:productId`, devolviendo un mensaje incorrecto.

Para evitar este problema:
1. **Definir primero las rutas específicas**, como `/new`.
2. **Definir después las rutas con parámetros variables**, como `/:productId`.
3. **Alternativamente**, se pueden manejar con condicionales dentro de la ruta con parámetros.

## Archivo `peticiones.rest`
Para probar las rutas, hemos creado un archivo `peticiones.rest` con las siguientes solicitudes:

```
GET http://localhost:3000/products

###
GET http://localhost:3000/products/8891

###
GET http://localhost:3000/products/new

###
POST http://localhost:3000/products/create
```

## Conclusión
El manejo de parámetros en la URL nos permite obtener datos dinámicos de una forma sencilla. Tener en cuenta el orden de las rutas es fundamental para evitar errores inesperados y asegurar un correcto funcionamiento del enrutamiento en Express.

