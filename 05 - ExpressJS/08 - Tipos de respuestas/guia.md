# Tipos de Respuestas en Express

En esta sección, exploraremos los diferentes tipos de respuestas que podemos enviar desde nuestras rutas en Express. 

## Importancia de una única respuesta por petición

Cada petición HTTP que recibe nuestro servidor debe tener una única respuesta. Intentar enviar más de una respuesta generará un error. Por ejemplo, el siguiente código es incorrecto:

```js
router.get('/', (req,res) => {
    console.log(req.query);
    const {page, limit} = req.query;
    console.log(page,limit);
    console.log('CurrDate', req.currentDay);
    res.send('Recuperamos todos los productos');
    res.end('Otra respuesta'); // ❌ Esto generará un error
});
```

El método `res.send()` ya envía una respuesta y finaliza el ciclo de la petición. Si intentamos llamar a `res.end()` después, Express generará un error.

## Enviando respuestas con códigos de estado

Podemos modificar la respuesta para incluir un código de estado HTTP. Por ejemplo, en lugar de enviar un código 200 por defecto, podemos indicar un error 503:

```js
router.get('/', (req,res) => {
    res.status(503).send('Recuperamos todos los productos');
});
```

Esto indica que el servicio no está disponible temporalmente.

## Enviar JSON como respuesta

También podemos responder con un objeto JSON utilizando `res.json()`. Esto es útil cuando nuestra API necesita enviar datos estructurados al cliente.

Ejemplo:

```js
router.get('/new', (req,res) => {
    res.json({uno: 'uno', dos: 'dos'});
});
```

Si hacemos una petición `GET` a esta ruta usando `peticiones.rest`:

```
###
GET http://localhost:3000/products/new
```

Recibiremos la siguiente respuesta en formato JSON:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 25
ETag: W/"19-ht1gJnXa3bUX8ZWOEOexO9GBaDI"
Date: Tue, 04 Feb 2025 11:49:46 GMT
Connection: close

{
  "uno": "uno",
  "dos": "dos"
}
```

El encabezado `Content-Type: application/json` nos confirma que la respuesta es de tipo JSON.

## Enviar archivos como respuesta

También podemos permitir la descarga de archivos desde nuestro servidor con `res.download()`:

```js
router.get('/download', (req,res) => {
    res.download('./files/imagenes/1.zip');
});
```

Cuando el cliente accede a esta ruta, el navegador le pedirá descargar el archivo `1.zip`.

## Posibles usos de los diferentes tipos de respuesta

Cada tipo de respuesta en Express tiene aplicaciones específicas:

- `res.send()`: Para enviar respuestas en texto o HTML a los clientes.
- `res.status().send()`: Para controlar el estado de la respuesta y manejar errores correctamente.
- `res.json()`: Para construir APIs RESTful que devuelvan datos estructurados.
- `res.download()`: Para permitir la descarga de archivos desde el servidor.

Comprender cuándo usar cada tipo de respuesta nos ayuda a crear aplicaciones más eficientes y mejor estructuradas.