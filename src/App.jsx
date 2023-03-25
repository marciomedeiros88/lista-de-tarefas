import { useState, useEffect, useRef } from 'react'

import CardPlanejamento from './CardPlanejamento'
import CardAFazer from './CardAFazer'
import CardFazendo from './CardFazendo'
import CardFeito from './CardFeito'
import Topo from './Topo'

import './index.css'

function App() {


  return(
    
    <>
    <main className='mainTopo'>
    <Topo/>
    </main>
    <main className='mainCards'>
    <CardPlanejamento/>
    <CardAFazer/>
    <CardFazendo/>
    <CardFeito/>
    </main>
    </>
  )
}

export default App
