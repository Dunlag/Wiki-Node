/** @type {import("mongoose").Model<any>} */
const Task = require("../models/task");

// Función para crear una nueva tarea
async function createTask(req, res) {
    console.log("Creando nuestra primera tarea"); // Log para verificar que la función se ejecuta
    console.log(req.body); // Muestra en consola los datos recibidos en el cuerpo de la petición
    
    const task = new Task(); // Se crea una nueva instancia del modelo Task
    const params = req.body; // Se obtienen los datos enviados en la petición

    // Se asignan los valores de la petición a la nueva tarea
    task.title = params.title;
    task.description = params.description;

    try {
        // Se guarda la tarea en la base de datos
        const taskStore = await task.save();

        if (!taskStore) {
            res.status(400).send({ msg: "No se ha guardado la tarea" }); // Error si no se guarda correctamente
        } else {
            res.status(200).send({ task: taskStore }); // Respuesta con la tarea guardada
        }
    } catch (error) {
        res.status(500).send(error); // Error del servidor
    }
}

// Función para obtener todas las tareas no completadas
async function getTasks(req, res) {
    console.log("Obteniendo tareas"); // Log para depuración
    try {
        // Se obtienen las tareas no completadas, ordenadas por fecha de creación descendente
        const tasks = await Task.find({ completed: false }).sort({ created_at: -1 });

        if (!tasks) {
            res.status(400).send({ msg: "Error al obtener las tareas" });
        } else {
            res.status(200).send(tasks);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

// Función para obtener una tarea específica por su ID
async function getTask(req, res) {
    console.log("Mostrando una tarea en específico");
    
    const idTask = req.params.id; // Se obtiene el ID de la tarea desde los parámetros de la URL
    console.log(idTask);

    try {
        const task = await Task.findById(idTask); // Se busca la tarea en la base de datos por su ID

        if (!task) {
            res.status(400).send({ msg: "No se ha encontrado la tarea" });
        } else {
            res.status(200).send(task);
        }
    } catch (error) {
        res.status(500).send({ msg: "Error en el servidor", error });
    }
}

// Función para actualizar una tarea por su ID
async function updateTask(req, res) {
    console.log("Ejecutando update");
    
    const idTask = req.params.id; // Se obtiene el ID de la tarea desde los parámetros de la URL
    const params = req.body; // Se obtienen los datos a actualizar

    console.log('idTask', idTask);
    console.log('params', params);
    
    try {
        // Se actualiza la tarea en la base de datos con los nuevos valores
        const task = await Task.findByIdAndUpdate(idTask, params);

        if (!task) {
            res.status(400).send({ msg: "No se ha podido actualizar la tarea" });
        } else {
            res.status(200).send({ msg: "Actualización completada" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

// Función para eliminar una tarea por su ID
async function deleteTask(req, res) {
    console.log("Haciendo delete");
    
    const idTask = req.params.id; // Se obtiene el ID de la tarea desde los parámetros de la URL

    try {
        // Se busca y elimina la tarea en la base de datos
        const task = await Task.findByIdAndDelete(idTask);

        if (!task) {
            res.status(400).send({ msg: "La tarea no se ha podido eliminar" });
        } else {
            res.status(200).send({ msg: "La tarea se ha eliminado" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

// Exportamos las funciones para que puedan ser usadas en otros archivos
module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
};
