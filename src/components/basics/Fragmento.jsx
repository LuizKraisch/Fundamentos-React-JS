import React from 'react'

export default function Fragmento(props) {
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )
}

//React.Fragment permite que não seja necessário o uso de divs para componentes adjacentes. Pode-se usar simplesmente <> e </>.