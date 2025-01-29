// Importa el módulo 'readline' para interactuar con la entrada y salida estándar (la consola).
const readline = require('readline');
// Importa el módulo 'fs' para trabajar con el sistema de archivos.
const fs = require('fs');

// Crea una interfaz de readline para leer desde la entrada estándar (teclado) y escribir en la salida estándar (consola).
const rl = readline.createInterface(process.stdin, process.stdout);

// Pregunta al usuario "¿Cómo te llamas?" y ejecuta la función callback cuando el usuario responde.
rl.question('Como te llamas?', (answer) => {

    // Crea un stream de escritura para un archivo con el nombre proporcionado por el usuario.
    // El archivo se creará en el directorio actual.
    const stream = fs.createWriteStream(`./${answer}.md`);

    // Establece el mensaje que se mostrará al usuario en cada pregunta.
    rl.setPrompt('que quieres decir?, (exit para salir)');
    // Muestra el mensaje (prompt) al usuario.
    rl.prompt();

    // Escucha el evento 'line'. Este evento se emite cuando el usuario escribe una línea y presiona Enter.
    rl.on('line', (data) => {
        // Convierte la entrada del usuario a minúsculas y elimina los espacios en blanco al principio y al final.
        if (data.toLowerCase().trim() === 'exit') {
            // Si el usuario escribe "exit", cierra el stream de escritura y la interfaz readline.
            stream.close();
            rl.close();
        } else {
            // Si el usuario no escribe "exit", escribe la línea en el archivo y añade un salto de línea.
            stream.write(`${data}\n`);
            // Vuelve a mostrar el mensaje (prompt) al usuario para que pueda escribir la siguiente línea.
            rl.prompt();
        }
    });
});

// Escucha el evento 'close'. Este evento se emite cuando la interfaz readline se cierra (normalmente cuando el usuario escribe "exit").
rl.on('close', () => {
    console.log('se termina la escritura');
});