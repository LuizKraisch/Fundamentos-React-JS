import './index.css'
import ReactDOM from'react-dom'
import React from 'react'

import Comp from './components/basics/First.jsx'
import ComParametro from './components/basics/ComParametro.jsx'

ReactDOM.render(
    <div>
        <Comp />
        <br></br>
        <ComParametro 
            titulo="Sistema de Notas"
            aluno="Luís Claúdio"
            nota={9.3} />
    </div>, 
    document.getElementById('root')
)

//Números entre conchete!