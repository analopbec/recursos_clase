const express = require("express"); // importando express
const app = express(); // creando una instancia de express

const data = require("./data.json") // importando el archivo data.json
const misfns = require("./funciones"); // importando el archivo funciones.js

app.use(express.json()); // middleware para parsear el cuerpo de la solicitud como JSON

const PORT = process.env.PORT ?? 3001; // asignando el puerto a una variable, si no existe la variable de entorno PORT, se asigna 3001







app.listen(PORT, () => { //escuchar en el puerto 3001 
    console.log(`servidor escuchando en el puerto ${PORT}`); 
    }   
);
