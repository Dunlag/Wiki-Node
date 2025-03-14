const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

//const urlMongoDB = "mongodb+srv://admin:XkTI39KmYJFLEkTg@fernandodb.sdyqz.mongodb.net/";

const conectarDB = async () => {
    try {
        await mongoose.connect(urlMongoDB);

        console.log("✅ Conectado a MongoDB correctamente");

        app.listen(port, () => {
            console.log(`🚀 Servidor del API REST funcionando en http://localhost:${port}`);
        });

    } catch (error) {
        console.error("❌ Error al conectar a la base de datos:", error);
    }
};

// Llamamos a la función para conectar a la BD
conectarDB();
