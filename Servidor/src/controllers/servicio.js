const Servicio = require('../models/Servicio');

exports.getAllServicios = async(req, res) =>{
    try {
        const servicio = await Servicio.find();
        res.send(servicio);
    } catch{
        res.status(404).send({error: "Lista no encontrada"});
    }
}

exports.createServicios = async(req, res) =>{
    try{
        const servicio = new Servicio(req.body);
        servicio.estado = 1
        servicio.is_Admin = false        
        servicio.is_anfitrion = false
        await servicio.save();
        res.send(servicio);
    } catch{
        res.status(404).send({error: "Error"})
    }
}

exports.deleteServicios = async(req, res) => {
    try{
        const estado = await Servicio.findById(req.params.id);
        estado.estado = 2
        estado.save();
        res.send(estado);
    }catch{
        res.status(404).send({error: "No se pudo completar la accion"})
    }
}