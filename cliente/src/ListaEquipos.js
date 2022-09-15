import axios from 'axios'
import React, { useEffect,useState} from 'react'
import Equipo from './Equipo'
function ListaEquipos(){

    const[datausuarios,setdatausuario]=useState([])
    
    useEffect(()=>{
        axios.get('api/usuarioequipo/optenerusuariosequipo').then(res=>{
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    //mapear lista de usuariosequipo en objeto usuarioequipo
    const listausuarios=datausuarios.map(usuarioEquipo=>{
        return(
            <div>
                <Equipo usuarioEquipo={usuarioEquipo}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Funciona Lista</h2>
            {listausuarios}
        </div>
    )
}

export default ListaEquipos