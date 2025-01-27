const { log } = require("console");
const fs = require("fs/promises");
const fsSync = require('fs');


(async()=>{
    try{
        if(!fsSync.existsSync('./config')){
            await fs.mkdir('./config');
        } else {
            console.log('el directorio ya existe');
            
        }

        await fs.appendFile('./config/prueba.md', 'contenido de prueba');
    } catch(err){
        console.log(err.message);
    }
})();
