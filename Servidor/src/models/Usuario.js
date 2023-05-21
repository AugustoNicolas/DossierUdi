const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    cell: String,
    is_Admin: Boolean,
    is_anfitrion: Boolean,
    estado: Number
})

module.exports = mongoose.model("Usuario", UsuarioSchema, "Usuario")