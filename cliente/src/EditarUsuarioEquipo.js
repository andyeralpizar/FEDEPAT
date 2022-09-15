import axios from 'axios'
import React, { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
function EditarUsuarioEquipo(){

    const params=useParams()
    //Hooks
    const[nombre,setNombre]=useState('')
    const[correo,setCorreo]=useState('')
    const[contrasenia,setContrasenia]=useState('')

    useEffect(()=>{
        axios.post('/api/usuarioequipo/optenerdatausuarioequipo',{idusuario: params.idusuario}).then(res =>{
            console.log(res.data[0])
            const datausuario = res.data[0]
            setNombre(datausuario.nombre)
            setCorreo(datausuario.correo)
            setContrasenia(datausuario.contrasenia)
        })
    },[])

    //Funcion de Editar
    function editarUsuario(){
        //nuevo objeto para actualizar el usuario
        const actualizarusuario={
            nombre: nombre,
            correo: correo,
            contrasenia:contrasenia,
            idusuario: params.idusuario
        }
    //hacer la peticion usando axios
    axios.post('/api/usuarioequipo/editarusuario',actualizarusuario)
    .then(res=>{
        console.log(res.data)
        alert(res.data)
    })
    .then(err=>{console.log(err)})
    }
    return(
        <div className="container" >
            <div>
                <h2 className="mt-4">Editar Usuario</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre </label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo</label>
                        <input type="text" className="form-control" value={correo} onChange={(e) => {setCorreo(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contrasenia" className="form-label">Contraseña</label>
                        <input type="text" className="form-control" value={contrasenia} onChange={(e) => {setContrasenia(e.target.value)}}></input>
                    </div>
                    <button onClick={editarUsuario} className="btn btn-success">Actualizar</button>
                </div>
            </div>
            
        </div>
    )
}

export default EditarUsuarioEquipo