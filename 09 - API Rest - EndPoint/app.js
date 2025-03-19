const express = require("express"); // Importamos Express
const app = express(); // Creamos una instancia de Express

// Middleware para permitir el uso de JSON en las peticiones
app.use(express.json());
// Middleware para procesar datos enviados desde formularios en formato URL-encoded
app.use(express.urlencoded({ extended: true }));

// Cargar rutas desde los archivos de rutas
const hello_routes = require("./routes/hello"); // Importamos las rutas de "hello"
const task_routes = require("./routes/task"); // Importamos las rutas de "task"

// Definimos las rutas base para nuestra API
app.use("/api", hello_routes); // Todas las rutas de "hello" estarán bajo "/api"
app.use("/api", task_routes); // Todas las rutas de "task" estarán bajo "/api"

module.exports = app; // Exportamos la instancia de Express para usarla en otros archivos
