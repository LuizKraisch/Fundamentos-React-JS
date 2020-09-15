import React from 'react'

export default function ComParametro(props) {
    //params são as infos da tag CP do inex.js. O nome params poderia ser qualquer um, o comum é props.
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p><b>{ props.aluno }</b> tem nota <b>{ props.nota }</b> e foi <b>{ status }</b></p>
        </div>
    )
}