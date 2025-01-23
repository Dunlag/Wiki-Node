# Introducción a Node.js

## ¿Qué es Node.js?
Node.js es un entorno de ejecución de JavaScript basado en el motor V8 de Google Chrome. Permite ejecutar código JavaScript fuera del navegador, lo que lo convierte en una herramienta poderosa para desarrollar aplicaciones del lado del servidor, herramientas de línea de comandos y más.

Características principales:
- **Asincronía y no bloqueo**: Ideal para aplicaciones de red escalables.
- **Eventos**: Utiliza un modelo basado en eventos para manejar operaciones.
- **Módulos**: Usa un sistema modular que facilita la reutilización de código.
- **Multiplataforma**: Compatible con sistemas Windows, macOS y Linux.

---

## Instalación de Node.js

### En Windows
1. Ve a la [página oficial de Node.js](https://nodejs.org).
2. Descarga la versión recomendada (LTS).
3. Ejecuta el instalador y sigue los pasos.
   - Asegúrate de marcar la opción para instalar `npm` (Node Package Manager).
4. Verifica la instalación abriendo una terminal y ejecutando:
   ```bash
   node -v
   npm -v
   ```
   Esto debería mostrar las versiones instaladas.

### En Linux
En sistemas basados en Debian/Ubuntu:
1. Actualiza los paquetes:
   ```bash
   sudo apt update
   sudo apt upgrade
   ```
2. Instala Node.js usando `nvm` (Node Version Manager):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   source ~/.bashrc
   nvm install --lts
   ```
3. Verifica la instalación:
   ```bash
   node -v
   npm -v
   ```

En sistemas basados en Arch Linux:
1. Usa el gestor de paquetes `pacman`:
   ```bash
   sudo pacman -S nodejs npm
   ```

---

## Dependencias, `package.json` y `node_modules`

### `package.json`
El archivo `package.json` es un manifiesto para proyectos Node.js. Contiene información sobre el proyecto, como su nombre, versión, dependencias y scripts.

Ejemplo:
```json
{
  "name": "curso-node",
  "version": "1.0.0",
  "description": "curso node primeras pruebas",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Fernando",
  "license": "ISC",
  "dependencies": {
    "@colors/colors": "^1.6.0",
    "axios": "^1.7.9"
  }
}
```

#### Explicación de los campos principales:
- **name**: Nombre del proyecto.
- **version**: Versión del proyecto.
- **description**: Breve descripción del proyecto.
- **main**: Archivo principal del proyecto.
- **scripts**: Comandos personalizados para ejecutar tareas. Por ejemplo, `npm start` ejecutará el script definido como `start`.
- **dependencies**: Lista de paquetes necesarios para el proyecto.

### Dependencias
Las dependencias son paquetes externos que tu proyecto necesita para funcionar. En este caso:
- `@colors/colors`: Permite cambiar los colores de texto en la consola.
- `axios`: Una biblioteca para realizar solicitudes HTTP.

Para instalar dependencias:
```bash
npm install
```
Esto descargará las dependencias especificadas en `package.json` y las colocará en la carpeta `node_modules`.

### `node_modules`
Esta carpeta contiene todos los paquetes descargados para el proyecto y sus dependencias. Es importante **no modificarla manualmente** y excluirla de los repositorios Git añadiendo `node_modules` al archivo `.gitignore`.

---

## Ejemplo de código

### Archivos
#### `index.js`
```javascript
const colors = require('@colors/colors');
const axios = require('axios');

console.log('hello'.green); // outputs green text

axios.get('https://rickandmortyapi.com/api/character')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Explicación del ejemplo
1. **`require('@colors/colors')`**: Importa el paquete `@colors/colors` para personalizar el texto en la consola.
   - En este caso, imprime el texto `hello` en verde.
2. **`require('axios')`**: Importa la biblioteca `axios` para realizar solicitudes HTTP.
   - Realiza una solicitud GET a la API de Rick and Morty.
   - Si la solicitud tiene éxito, muestra los datos en la consola.
   - Si hay un error, lo captura y lo imprime.

### Cómo ejecutarlo
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el archivo:
   ```bash
   npm start
   ```

