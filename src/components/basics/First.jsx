import React from 'react' //Precisa do import por conta do JSX

export default function Primeiro() {
    const msg = 'Seja bem vindo(a)!'
    return (
        <div>
            <h2>Primeiro Componente!</h2>
            <p>{ msg }</p>
        </div>
    )
}