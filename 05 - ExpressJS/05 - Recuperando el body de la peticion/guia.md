# Recuperando el body de la petición en Express

## Introducción
Cuando enviamos datos a un servidor mediante una petición HTTP, estos datos pueden enviarse en diferentes formatos. Uno de los más comunes es JSON (`JavaScript Object Notation`). Para que Express pueda entender y procesar correctamente estos datos, es necesario configurar el `Content-Type` y utilizar `req.body` para recuperar la información enviada en la petición.

---

## Uso del Content-Type
El `Content-Type` es un encabezado HTTP que indica el formato de los datos que se están enviando en el cuerpo de la petición. En este caso, usaremos `application/json` para enviar datos en formato JSON.

Ejemplo de una petición POST en `peticiones.rest`:

```http
POST http://localhost:3000/products/create
Content-Type: application/json

{
    "name": "Laptop",
    "price": 1000,
    "stock": 10,
    "avaliable": true
}
```

### Importancia del Content-Type
Si el `Content-Type` no está correctamente configurado, Express no podrá interpretar los datos correctamente y `req.body` podría ser `undefined`.

---

## Reglas de escritura de JSON
El formato JSON tiene reglas estrictas:
- Debe estar estructurado con `clave: valor`.
- Las claves deben ir siempre entre comillas dobles `""`.
- Los valores pueden ser de tipo:
  - **String**: `"Laptop"`
  - **Number**: `1000`
  - **Boolean**: `true` o `false`
  - **Array**: `["item1", "item2"]`
  - **Objeto**: `{ "marca": "Dell" }`
- No se permiten comentarios dentro de JSON.
- No debe haber comas finales después del último elemento.

Ejemplo válido:

```json
{
    "name": "Laptop",
    "price": 1000,
    "stock": 10,
    "avaliable": true
}
```

Ejemplo incorrecto:

```json
{
    "name": "Laptop",
    "price": 1000,
    "stock": 10,
    "avaliable": true,
}  // ❌ ERROR: No debe haber una coma después del último elemento
```

---

## Recuperando el body de la petición en Express
Para poder leer los datos enviados en una petición POST, primero debemos asegurarnos de que Express pueda procesar JSON. En `app.js`:

```javascript
app.use(express.json());
```

Luego, en `products.js`, podemos manejar la petición POST y recuperar los datos del `body`:

```javascript
const router = require('express').Router();

router.post('/create', (req, res) => {
    console.log(req.body); // Muestra el JSON completo en la consola
    const { name, price } = req.body; // Extrae solo el nombre y el precio
    console.log(name, price); // Muestra en la consola los valores extraídos
    
    res.send('Gestión de los datos del formulario');
});

module.exports = router;
```

---

## Salidas esperadas en la consola
Si enviamos la petición POST con los datos JSON mencionados antes, obtendremos:

**Salida completa del body:**
```bash
{
  name: 'Laptop',
  price: 1000,
  stock: 10,
  avaliable: true
}
```

**Salida de las variables extraídas:**
```bash
Laptop 1000
```

Esto demuestra que podemos acceder a cualquier campo del JSON usando `req.body.campo`.

---

## Conclusión
- `Content-Type` debe coincidir con el tipo de datos enviados.
- JSON debe seguir una estructura correcta.
- Express debe estar configurado para interpretar JSON con `express.json()`.
- `req.body` nos permite acceder a los datos enviados en la petición.

Con esta estructura modular, podemos manejar datos de manera eficiente y estructurada en nuestras rutas de Express. 🚀

