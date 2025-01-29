// Importa la función 'log' del módulo 'console' (no es realmente necesaria aquí, ya que console.log funciona directamente).
const { log } = require("console");
// Importa el módulo 'fs/promises' para trabajar con el sistema de archivos usando promesas (asíncrono).
const fs = require("fs/promises");
// Importa el módulo 'fs' para trabajar con el sistema de archivos (incluye métodos síncronos).
const fsSync = require('fs');

// Función asíncrona autoejecutable (IIFE - Immediately Invoked Function Expression).
(async () => {
    try {
        // Intenta realizar las siguientes operaciones.

        // Comprueba si el directorio './config' existe de forma síncrona.
        if (!fsSync.existsSync('./config')) {
            // Si el directorio no existe, créalo de forma asíncrona.
            await fs.mkdir('./config');
        } else {
            // Si el directorio ya existe, imprime un mensaje en la consola.
            console.log('el directorio ya existe');
        }

        // Añade contenido al archivo './config/prueba.md' de forma asíncrona.  Si el archivo no existe, se crea.
        await fs.appendFile('./config/prueba.md', 'contenido de prueba');

    } catch (err) {
        // Si ocurre algún error durante las operaciones anteriores, captura el error e imprime su mensaje en la consola.
        console.log(err.message); // Imprime solo el mensaje del error, no el objeto error completo.
    }
})(); // Ejecuta la función asíncrona inmediatamente.