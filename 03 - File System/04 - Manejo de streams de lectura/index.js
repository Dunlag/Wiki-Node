// Importa la función 'log' del módulo 'console' (no es necesaria, console.log funciona directamente).
const { log } = require('console');
// Importa el módulo 'fs' para trabajar con el sistema de archivos.
const fs = require('fs');

// Crea un stream de lectura para el archivo 'blog.md', usando la codificación UTF-8.
// Un stream permite leer el archivo en fragmentos (chunks) sin tener que cargar todo el archivo en memoria.
const stream = fs.createReadStream('blog.md', 'utf-8');
// Inicializa una variable para almacenar el contenido del archivo.
let body = '';

// Escucha el evento 'data' una sola vez.  Este evento se emite cuando el stream comienza a leer datos.
stream.once('data', () => {
    console.log('empieza la lectura');
});

// Escucha el evento 'data'. Este evento se emite cada vez que se lee un nuevo fragmento (chunk) del archivo.
stream.on('data', chunk => {
    console.log('Recibo datos...');
    // Añade el fragmento (chunk) actual al cuerpo del texto.
    body += chunk;
});

// Escucha el evento 'end'. Este evento se emite cuando se ha terminado de leer todo el archivo.
stream.on('end', () => {
    console.log(`Body: ${body.length}`); // Imprime la longitud del contenido del archivo.
});