import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
function RegistrarUsuarioEquipo(){
    //Hooks
    const[nombre,setNombre]=useState('')
    const[correo,setCorreo]=useState('')
    const[contrasenia,setContrasenia]=useState('')
    function agregarUsuario(){
        var usuarioEquipo ={
            nombre,
            correo,
            contrasenia,
            idusuario: uniquid()
        }
        console.log(usuarioEquipo)

        axios.post('/api/usuarioequipo/registrarusuarioequipo',usuarioEquipo)
        .then(res=>{
            //alert(res.data)
            Swal.fire('El Usuario se creó de manera Exitosa!')
        })
        .then(err=>{console.log(err)})
    }
    return(
        <div className="container" >
            <div>
                <h2 className="mt-4">RegistrarUsuarioEquipo</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
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
                    <button onClick={agregarUsuario} className="btn btn-success">Registrar</button>
                </div>
            </div>
            
        </div>
    )
}
export default RegistrarUsuarioEquipo