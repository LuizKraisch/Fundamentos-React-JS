import React from 'react'
import alunos from '../../data/alunos'

export default props => {

    const alunosJS = ( 
        <li>
            <b>{alunos[0].id})</b> {alunos[0].nome} - {alunos[0].nota}
        </li>
    );
    
    const alunosJSX = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                <b>{aluno.id})</b> {aluno.nome} - {aluno.nota}
            </li>
        )
    })

    //Exemplo com map que permite a captura de todos os dados mais facilmente, com a conersão em JSX.
    
    //O atributo key permite que o React encontre com ais facilidade o componente em caso de uma atuaçização nos valores, poupando processamento.

    return (
        <div>
            <ul style={{ listStyle: "none"}}>
                {alunosJSX}
                <br></br>
                {alunosJS}
            </ul>
        </div>
    )
}