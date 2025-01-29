// Importa la función 'log' del módulo 'console' para poder usar console.log de forma más abreviada.
const { log } = require('console');
// Importa el módulo 'http' para crear un servidor HTTP.
const http = require('http');

// Crea un servidor HTTP con el método createServer. 
// Este método recibe una función como argumento, que se ejecutará cada vez que el servidor reciba una petición.
const server = http.createServer((req, res) =>{
    // 'req' es un objeto que representa la petición del cliente (navegador, etc.). Contiene información como el método (GET, POST, etc.), la URL y las cabeceras.
    console.log('Metodo', req.method); // Imprime en la consola el método de la petición (GET, POST, etc.).
    console.log('Url', req.url); // Imprime en la consola la URL solicitada.
    console.log('Header', req.headers); // Imprime en la consola las cabeceras de la petición.

    // 'res' es un objeto que representa la respuesta que se va a enviar al cliente.
    res.end('hola server'); // Envía la respuesta al cliente con el mensaje 'hola server'.  res.end() indica que la respuesta ha terminado.
});

// Inicia el servidor y lo pone a escuchar en el puerto 3000.
// Esto significa que el servidor estará esperando peticiones en la dirección http://localhost:3000.
server.listen(3000);