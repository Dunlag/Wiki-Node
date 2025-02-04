# Uso de Query Parameters en Express

## ¿Qué son los Query Parameters?
Los **Query Parameters** (o "parámetros de consulta") son pares clave-valor que se envían en la URL después del signo de interrogación (`?`). Se utilizan para enviar información adicional a la solicitud HTTP sin afectar la estructura de la URL principal.

Un ejemplo de URL con Query Parameters:
```sh
GET http://localhost:3000/products?page=3&limit=10
```
En este caso:
- `page=3` indica que queremos obtener la página 3 de los productos.
- `limit=10` indica que queremos un límite de 10 productos por página.

Los Query Parameters siempre van después del signo `?`, y si hay más de uno, se separan con `&`.

---

## Modificación del código en Express
En el archivo `products.js`, hemos modificado la ruta GET `/products` para que pueda recibir Query Parameters:

```javascript
const router = require('express').Router();

router.get('/', (req,res) =>{
    console.log(req.query); // Muestra todos los Query Params recibidos
    const { page, limit } = req.query;
    console.log(page, limit); // Muestra valores específicos de los Query Params
    
    res.send('Recuperamos todos los productos');
});
```

### Explicación del código:
1. `req.query` es un objeto que contiene todos los Query Parameters enviados en la URL.
2. Desestructuramos `page` y `limit` desde `req.query` para obtener sus valores de manera directa.
3. Imprimimos `req.query` en la consola para ver todos los parámetros recibidos.
4. Imprimimos `page` y `limit` de manera individual para confirmar que se han recibido correctamente.
5. Finalmente, enviamos una respuesta simple confirmando la operación.

---

## Ejemplo de Peticiones REST
En nuestro archivo `peticiones.rest` agregamos la siguiente petición:

```sh
GET http://localhost:3000/products?page=3&limit=10
```

### Salida esperada en la consola:
Si ejecutamos esta petición, la consola de Node.js mostrará:

```sh
{ page: '3', limit: '10' }
3 10
```

Notas:
- Los valores de `req.query` siempre llegan como strings, por lo que si los queremos tratar como números, hay que convertirlos con `parseInt()`.

Ejemplo de conversión:
```javascript
const pageNumber = parseInt(page, 10);
const limitNumber = parseInt(limit, 10);
```

---

## ¿Para qué se pueden usar los Query Parameters?
Los Query Parameters son útiles para:
- **Paginación**: Definir `page` y `limit` para mostrar resultados por partes.
- **Ordenación**: Enviar un parámetro `sort=asc` o `sort=desc` para ordenar resultados.
- **Filtrado**: Enviar parámetros como `category=electronics` para filtrar productos.
- **Búsquedas**: Pasar un `search=keyword` para realizar búsquedas en los datos.

---

## Conclusión
Los Query Parameters son una herramienta poderosa para enviar datos en las peticiones GET sin modificar la estructura de la URL. En Express, podemos acceder a ellos usando `req.query` y manipularlos según nuestras necesidades.

Siempre es recomendable validar y convertir los valores antes de usarlos en operaciones sensibles, como consultas a bases de datos.

