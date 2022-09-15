import React from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'
function Equipo({usuarioEquipo}){
    const navegar= useNavigate()
    //Funcion para borrar usuario
    function borrarusuario(idusuario){
        axios.post('/api/usuarioequipo/borrarusuario',{idusuario: idusuario}).then(res =>{
            console.log(res.data)
            alert(res.data)
            navegar(0)
        }).catch(err =>{
            console.log(err)
        })

    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <ul className="list-group">
                        <li className="list-group-item">{usuarioEquipo.idusuario}</li>
                        <li className="list-group-item">{usuarioEquipo.nombre}</li>
                        <li className="list-group-item">{usuarioEquipo.correo}</li>
                        <li className="list-group-item">{usuarioEquipo.contrasenia}</li>
                    </ul>
                    <Link to={`/editarusuarioequipo/${usuarioEquipo.idusuario}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarusuario(usuarioEquipo.idusuario)}}>Elimimar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
            
        </div>
    )
}
export default Equipo