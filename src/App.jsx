import React from 'react'

import Comp from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'

export default props =>
    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>
        <br></br>
        <Card titulo="Desafio - Aleatório">
            <Aleatorio min={1} max={100}/>
        </Card>

        <Card titulo="Fragmentos">
            <Fragmento />
        </Card>

        <Card titulo="Parâmetros">
            <ComParametro
                titulo="Sistema de Notas"
                aluno="Luís Claúdio"
                nota={9.3}
            />
        </Card>

        <Card titulo="Primeiro Componente">
            <Comp />
        </Card>
    </div>

//Números é entre colchete!
//Função Arrow tem um return implícito.
//Se não usar props pode-se colocar um _.