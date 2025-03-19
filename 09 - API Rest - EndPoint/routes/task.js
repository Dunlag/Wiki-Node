const express = require("express"); // Importamos Express
const TaskController = require("../controllers/task"); // Importamos el controlador de tareas

const api = express.Router(); // Creamos un enrutador de Express

// Definimos las rutas para manejar las tareas, cada una conectada con su función en el controlador
api.post("/task", TaskController.createTask); // Crear una nueva tarea
api.get("/task", TaskController.getTasks); // Obtener todas las tareas
api.get("/task/:id", TaskController.getTask); // Obtener una tarea específica por su ID
api.put("/task/:id", TaskController.updateTask); // Actualizar una tarea por su ID
api.delete("/task/:id", TaskController.deleteTask); // Eliminar una tarea por su ID

module.exports = api; // Exportamos el enrutador para usarlo en otros archivos
