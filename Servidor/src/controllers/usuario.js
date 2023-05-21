const Usuario = require('../models/Usuario');

exports.getAllUsuarios = async(req, res) =>{
    try {
        const usuario = await Usuario.find();
        res.send(usuario);
    } catch{
        res.status(404).send({error: "Lista no encontrada"})
    }
}

exports.createUsuario = async(req, res) =>{
    try{
        const usuario = new Usuario(req.body);
        usuario.estado = 1
        usuario.is_Admin = false        
        usuario.is_anfitrion = false
        await usuario.save();
        res.send(usuario);
    } catch{
        res.status(404).send({error: "Error"})
    }
}

exports.deleteUsuario = async(req, res) => {
    try{
        const estado = await Usuario.findById(req.params.id);
        estado.estado = 2
        estado.save();
        res.send(estado);
    }catch{
        res.status(404).send({error: "No se pudo completar la accion"})
    }
}