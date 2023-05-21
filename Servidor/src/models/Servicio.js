const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UsuarioSchema = mongoose.Schema({
    tematica: String,
    fecha_init: String,
    fecha_fin: String,
    cupos: Number,
    cupos_disponibles: Number,
    estado: Number,
    usuario_creador : {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    foto: Array,
    reservas: Array,
    menu: Array,


})

module.exports = mongoose.model("Usuario", UsuarioSchema, "Usuario")