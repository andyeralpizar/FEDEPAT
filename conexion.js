const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fedepat');

const objetobd = mongoose.connection

objetobd.on('connected',()=>{console.log('Se conecto a MongoDB')})
objetobd.on('error',()=>{console.log('Error en la conexion MongoDB')})

module.exports = mongoose
