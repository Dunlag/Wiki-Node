const express = require('express')
const app = express()
const port = 3000

app.get("/hello", (req,res)=>{
    res.status(200).send({"msg": "Hola Morty"})
})

app.listen(port, () =>{
    console.log("servidor del API REST esta funcionando en http://localhost:3000");
    
})