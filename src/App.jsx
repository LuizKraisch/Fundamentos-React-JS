import './App.css'
import React from 'react'

import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Comp from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'

export default props =>
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>
        <br></br>
        <div className="Cards">
            <Card titulo="#9 - Comunicação Direta" color="#679b9b">
                <DiretaPai />
            </Card>

            <Card titulo="#8 - Renderização Condicional" color="#28df99">
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{}} />
                <br></br>
                <ParOuImpar numero={20} />
            </Card>

            <Card titulo="#7 - Desafio: Repetição" color="#ff9a76">
                <ListaProdutos />
            </Card>

            <Card titulo="#6 - Repetição" color="#821752">
                <ListaAlunos />
            </Card>

            <Card titulo="#5 - Componente com Filhos" color="#a37eba">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#4 - Desafio: Aleatório" color="#347FC4">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="#3 - Fragmentos" color="#F05365">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Parâmetros" color="#FFB400">
                <ComParametro
                    titulo="Sistema de Notas"
                    aluno="Luís Claúdio"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#9BC53D">
                <Comp />
            </Card>
        </div>
    </div>

//Números é entre colchete!
//Função Arrow tem um return implícito.
//Se não usar props pode-se colocar um _.