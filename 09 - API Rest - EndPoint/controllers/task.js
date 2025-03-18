/** @type {import("mongoose").Model<any>} */
const Task = require("../models/task");

async function createTask(req,res){
    console.log("Creando nuestra primera tarea"); //buena practica crear primero de todo un log para ver si funciona todo 
    console.log(req.body);
    
    const task = new Task()
    const params = req.body;

    task.title = params.title
    task.description = params.description

    try {
        const taskStore = await task.save()

        if(!taskStore){
            res.status(400).send({msg: "No se ha guardado la tarea"})
        }else{
            res.status(200).send({task: taskStore})
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

async function getTasks(req,res){
    console.log("Obteniendo tareas");
    try {
        const tasks = await Task.find({completed: false}).sort({created_at: -1});

        if(!tasks){
            res.status(400).send({msg: "error al obtener las tareas"})
        }else{
            res.status(200).send(tasks)
        }
    } catch (error) {
        res.status(500).send(error)
    }
    
}

async function getTask(req, res) {
    console.log("Mostrando una tarea en específico");

    const idTask = req.params.id;
    console.log(idTask);

    try {
        const task = await Task.findById(idTask); // ← Corrección aquí

        if (!task) {
            res.status(400).send({ msg: "No se ha encontrado la tarea" });
        } else {
            res.status(200).send(task);
        }

    } catch (error) {
        res.status(500).send({ msg: "Error en el servidor", error });
    }
}

async function updateTask(req,res) {
    console.log("ejecutando update");
    
    const idTask = req.params.id;
    const params = req.body;

    console.log('idTask', idTask);
    console.log('params', params);
    
    try {
        const task = await Task.findByIdAndUpdate(idTask, params)

        if(!task){
            res.status(400).send({msg: "no se ha podido actualizar la tarea"})
        }else{
            res.status(200).send({msg: "actualizacion completada"})
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

async function deleteTask(req,res) {
    console.log("haciendo delete");
    
    const idTask = req.params.id

    try {
        const task = await Task.findByIdAndDelete(idTask)

        if(!task){
            res.status(400).send({msg: "la tarea no se ha podido eliminar"})
        }else{
            res.status(200).send({msg: "la tarea se ha eliminado"})
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}