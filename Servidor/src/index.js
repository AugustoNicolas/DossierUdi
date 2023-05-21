const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const platoController = require('./controllers/plato')
const usuarioController = require('./controllers/usuario')
const servicioController = require('./controllers/servicio')

mongoose.connect('mongodb://localhost:27017/Dossier',
{useNewUrlParser: true})
.then(() => {
    const app= express();
    app.use(cors());
    app.options('*', cors());
    app.use(express.json());

    app.get("/plato", platoController.getAllPlatos)
    app.post("/plato", platoController.createPlato)
    app.delete("/plato/:id", platoController.deletePlato)

    app.get("/usuario", usuarioController.getAllUsuarios)
    app.post("/usuario", usuarioController.createUsuario)
    app.delete("/usuario/:id", usuarioController.deleteUsuario)

    app.get("/servicio", servicioController.getAllServicios)
    app.post("/servicio", servicioController.createServicios)
    app.delete("/servicio/:id", servicioController.deleteServicios)



    app.listen(8002, () => {
        console.log("Al aireeeeee");
    });
})
.catch(() =>{
    console.log("hubo un error xd")
})