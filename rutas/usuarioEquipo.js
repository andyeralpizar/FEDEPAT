const express = require('express')
const router = express.Router()

const moongose= require('mongoose')
const eschema = moongose.Schema

const eschemausuario = new eschema({
    nombre: String,
    correo: String,
    contrasenia: String,
    idusuario: String
})

const ModeloUsuario = moongose.model('usuariosequipo',eschemausuario)
module.exports = router
/*
router.get('/ejemplo',(req,res)=>{
    res,end('Saludo carga desde ruta ejemplo')
})*/
//Agregar usuario Equipo
router.post('/registrarusuarioequipo',(req,res)=>{
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia,
        idusuario: req.body.idusuario

    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario Agregado Correctamente')
        }else{
            res.send(err)
        }
    })
})

//Obtener todos los usuarios

router.get('/optenerusuariosequipo', (req,res)=>{
    ModeloUsuario.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Obtener Data de Usuario

router.post('/optenerdatausuarioequipo', (req,res)=>{
    ModeloUsuario.find({idusuario:req.body.idusuario},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Editar Usuario

router.post('/editarusuario', (req,res) => {
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia
    }, (err)=>{
        if(!err){
            res.send('Usuario Actualizado Correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar Usuario

router.post('/borrarusuario', (req,res) => {
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario},(err)=>{
        if(!err){
            res.send('Usuario Borrado Correctamente')
        }else{
            res.send(err)
        }
    })
})