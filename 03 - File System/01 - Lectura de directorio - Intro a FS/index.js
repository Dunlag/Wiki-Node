// Importa el módulo 'fs' para trabajar con el sistema de archivos (de forma síncrona y con callbacks).
const fs = require('fs');
// Importa el módulo 'fs/promises' para trabajar con el sistema de archivos usando promesas (asíncrono).
const fsPromise = require('fs/promises');

// **Síncrono (bloqueante):**
// Lee el contenido del directorio './Wiki-Node' de forma síncrona.  Esto significa que el programa se detiene aquí hasta que la operación se complete.
const files = fs.readdirSync('./Wiki-Node');
console.log(`SYNC`, files); // Imprime el array con los nombres de los archivos y directorios.

// **Asíncrono con callback:**
// Lee el contenido del directorio '../Wiki-node' de forma asíncrona usando un callback.  El programa continúa ejecutándose mientras se realiza la lectura del directorio.
fs.readdir('../Wiki-node', (err, files) => {
    // 'err' contendrá un error si ocurre alguno.
    console.log(err); // Imprime el error (si lo hay).
    console.log(`ASYNC`, files); // Imprime el array con los nombres de los archivos y directorios (si no hubo error).
});

// **Asíncrono con promesas:**
// Lee el contenido del directorio '../wiki-node' de forma asíncrona usando promesas.
fsPromise.readdir('../wiki-node')
    .then(files => console.log('PROMISE', files)) // Si la operación tiene éxito, 'files' contendrá el array con los nombres.
    .catch(err => console.log(err)); // Si ocurre un error, 'err' contendrá el error.

// **Async/await (también asíncrono):**
// Esta es otra forma de trabajar con promesas de manera más legible usando async/await.
(async () => {
    // La palabra clave 'await' pausa la ejecución de la función asíncrona hasta que la promesa se resuelva (o rechace).
    const filesP = await fsPromise.readdir('../wiki-node');
    console.log(filesP); // Imprime el array con los nombres de los archivos y directorios.
})(); // Se invoca la función asíncrona inmediatamente.