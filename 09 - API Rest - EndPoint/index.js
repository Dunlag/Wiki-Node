require("dotenv").config(); // Cargamos las variables de entorno desde el archivo .env
const mongoose = require("mongoose"); // Importamos Mongoose para manejar la base de datos
const app = require("./app"); // Importamos la aplicación Express
const port = 3000; // Definimos el puerto en el que correrá el servidor

const urlMongoDB = process.env.MONGODB_URI; // Obtenemos la URL de conexión a MongoDB desde las variables de entorno

const conectarDB = async () => {
    try {
        await mongoose.connect(urlMongoDB); // Intentamos conectar a la base de datos
        console.log("✅ Conectado a MongoDB correctamente");

        // Una vez conectados a la base de datos, iniciamos el servidor
        app.listen(port, () => {
            console.log(`🚀 Servidor del API REST funcionando en http://localhost:${port}`);
        });
    } catch (error) {
        console.error("❌ Error al conectar a la base de datos:", error); // Capturamos y mostramos cualquier error de conexión
    }
};

conectarDB(); // Llamamos a la función para conectar a la base de datos
