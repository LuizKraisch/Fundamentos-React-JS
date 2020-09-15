import './index.css'
import ReactDOM from'react-dom'
import React from 'react'

import Comp from './components/basics/First.jsx'
import ComParametro from './components/basics/ComParametro.jsx'

ReactDOM.render(
    <div>
        <Comp />
        <ComParametro 
            titulo="Segundo Componente"
            subtitulo="Exemplo de Subtítulo" />
    </div>, 
    document.getElementById('root')
)