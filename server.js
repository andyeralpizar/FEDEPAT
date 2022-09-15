const express = require('express')
const app = express()

//Importar conexion mongoDB
const archivoBD= require('./conexion')

//Importar del archivo de rutas y modelo usuario
const rutausuario=require('./rutas/usuarioEquipo')

//importar body parser

const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuarioEquipo', rutausuario)

app.get('/', (req,res)=>{
    res.end('Bienvenido, Servidor Corriendo')
})

//Configurar server basico
app.listen(5000,function(){
    console.log('Servidor Corriendo Correctamente')
})