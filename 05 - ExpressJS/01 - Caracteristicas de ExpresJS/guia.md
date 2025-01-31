# Express.js: Introducción y Configuración Básica

## Instalación de Express.js

Para comenzar un proyecto con Express.js, sigue estos pasos:

1. **Inicializa un proyecto Node.js**
   ```sh
   npm init -y
   ```
   Esto generará un archivo `package.json` con la configuración predeterminada.

2. **Instala Express.js**
   ```sh
   npm install express dotenv
   ```
   - `express`: Framework minimalista para Node.js.
   - `dotenv`: Permite cargar variables de entorno desde un archivo `.env`.

3. **Instala Nodemon (para desarrollo)**
   ```sh
   npm install --save-dev nodemon
   ```
   Nodemon reinicia automáticamente el servidor cuando se detectan cambios en el código.

4. **Configurar scripts en `package.json`**
   Modifica `package.json` para incluir los scripts de inicio:
   ```json
   {
     "name": "05---expressjs",
     "version": "1.0.0",
     "main": "index.js",
     "scripts": {
       "start": "node index.js",
       "dev": "nodemon index.js"
     },
     "dependencies": {
       "dotenv": "^16.4.7",
       "express": "^4.21.2"
     }
   }
   ```

## Creación del Servidor con Express.js

En el archivo `index.js`, agrega lo siguiente:

```js
const express = require('express');

// Configuración de variables de entorno
require('dotenv').config();

const app = express();

// Ruta GET: Lista de contactos
app.get('/contactos', (req, res) => {
    res.send('Lista de contactos');
});

// Ruta POST: Crear nuevo usuario
app.post('/usuarios/nuevo', (req, res) => {
    res.send('Nuevo usuario');
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT);
});
```

## Configuración de Variables de Entorno

Crea un archivo `.env` y define el puerto del servidor:
```env
PORT=3333
```

## Prueba con REST Client

Crea un archivo `peticiones.rest` con las siguientes peticiones para probar el servidor:

```
GET http://localhost:3333/contactos

###

POST http://localhost:3333/usuarios/nuevo
```

### Ejecución del Servidor
Para iniciar el servidor en modo desarrollo con Nodemon:
```sh
npm run dev
```
Para iniciar el servidor normalmente:
```sh
npm start
```

Con esto, habrás configurado un servidor básico con Express.js, rutas y variables de entorno. 🚀

