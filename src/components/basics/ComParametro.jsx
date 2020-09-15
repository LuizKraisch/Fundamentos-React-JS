import React from 'react'

export default function ComParametro(props) {
    //params são as infos da tag CPdo inex.js. O nome params poderia ser qualquer um, o comum é props.
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>{ props.subtitulo }</p>
        </div>
    )
}