// Importa el módulo 'fs/promises' para trabajar con el sistema de archivos usando promesas (asíncrono).
const fs = require("fs/promises");

// Define una función asíncrona llamada accionFicheros.
async function accionFicheros() {
    try {
        // Intenta realizar las siguientes operaciones.

        // Añade el texto "\n\nAutor: Fernando" al final del archivo "blog.md".
        // Si el archivo no existe, se crea.  \n\n inserta dos saltos de línea.
        await fs.appendFile("blog.md", "\n\nAutor: Fernando");

        // Lee el contenido del archivo "blog.md" y lo guarda en la variable 'data'.
        // "utf-8" especifica la codificación del archivo.
        const data = await fs.readFile("blog.md", "utf-8");

        // Imprime el contenido del archivo en la consola.
        console.log(data);

    } catch (err) {
        // Si ocurre algún error durante las operaciones anteriores (por ejemplo, si el archivo no se puede leer o escribir),
        // este bloque 'catch' captura el error y lo imprime en la consola.
        console.log(err);
    }
}

// Llama a la función asíncrona accionFicheros para que se ejecute.
accionFicheros();