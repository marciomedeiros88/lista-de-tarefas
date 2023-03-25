import { useState, useEffect, useRef } from 'react'
import { React } from 'react'
import logo from "./assets/img/logo.svg"

import './index.css'

function Topo (){
    
    return(
        <>
        <nav>
        <div className='logoTopo'><img src={logo} alt="Logo DNC" className='logo'></img></div>
        <div className='tituloTopo'><h1>Lista de Tarefas</h1></div>
        </nav>
        </>
    )

}

export default Topo