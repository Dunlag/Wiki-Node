# File System

En esta sección exploraremos cómo trabajar con el sistema de archivos en Node.js utilizando el módulo `fs`. Este módulo permite realizar operaciones comunes como lectura, escritura, manipulación de ficheros y manejo de streams, todo de manera eficiente y asíncrona.

---

## 1. Lectura de Directorios

Node.js proporciona dos formas principales de trabajar con directorios:
- Usando `fs` (callbacks).
- Usando `fs/promises` (promesas).

### Ejemplo: Leer el contenido de un directorio

#### Usando `fs`
```javascript
const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) {
        console.error('Error leyendo el directorio:', err);
        return;
    }
    console.log('Archivos en el directorio:', files);
});
```

#### Usando `fs/promises`
```javascript
const fsPromises = require('fs/promises');

(async () => {
    try {
        const files = await fsPromises.readdir('./');
        console.log('Archivos en el directorio:', files);
    } catch (err) {
        console.error('Error leyendo el directorio:', err);
    }
})();
```

---

## 2. Lectura y Escritura de Ficheros

### Leer un fichero
#### Código:
```javascript
const fs = require('fs');

fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error leyendo el archivo:', err);
        return;
    }
    console.log('Contenido del archivo:', data);
});
```

### Escribir en un fichero
#### Código:
```javascript
fs.writeFile('./archivo.txt', 'Contenido nuevo', (err) => {
    if (err) {
        console.error('Error escribiendo en el archivo:', err);
        return;
    }
    console.log('Archivo actualizado con éxito');
});
```

---

## 3. Operaciones Básicas sobre Ficheros

### Renombrar un archivo
#### Código:
```javascript
fs.rename('./archivo.txt', './archivo-renombrado.txt', (err) => {
    if (err) {
        console.error('Error renombrando el archivo:', err);
        return;
    }
    console.log('Archivo renombrado con éxito');
});
```

### Eliminar un archivo
#### Código:
```javascript
fs.unlink('./archivo-renombrado.txt', (err) => {
    if (err) {
        console.error('Error eliminando el archivo:', err);
        return;
    }
    console.log('Archivo eliminado con éxito');
});
```

---

## 4. Streams de Lectura

Los streams permiten leer datos de manera eficiente, especialmente para archivos grandes.

#### Código:
```javascript
const fs = require('fs');

const stream = fs.createReadStream('./archivo-grande.txt', 'utf-8');

stream.on('data', (chunk) => {
    console.log('Nuevo chunk recibido:', chunk);
});

stream.on('end', () => {
    console.log('Lectura completa');
});

stream.on('error', (err) => {
    console.error('Error leyendo el archivo:', err);
});
```

---

## 5. Streams de Escritura (Usando `readline`)

El módulo `readline` permite crear interfaces para manejar entradas de usuario línea por línea.

### Crear una interfaz para escribir datos en un archivo
#### Código:
```javascript
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const writeStream = fs.createWriteStream('./archivo-nuevo.txt');

rl.question('Escribe algo para guardar en el archivo: ', (answer) => {
    writeStream.write(answer + '\n');
    console.log('Texto guardado');
    rl.close();
});

writeStream.on('finish', () => {
    console.log('Escritura completa');
});

writeStream.on('error', (err) => {
    console.error('Error escribiendo en el archivo:', err);
});
```

---

Con estas herramientas, puedes manejar archivos y flujos de datos en Node.js de manera eficiente y estructurada.

