import React from 'react'
import If, { Else } from './If'

export default props => {
    return (
        <div>
            {/* <If test={props.usuario && props.usuario.nome}>
                Bem-vindo, <strong>{props.usuario.nome}</strong>!
            </If>
            <If test={!props.usuario || !props.usuario.nome}>
                Bem-vindo, <strong>Usuário</strong>!
            </If> */}

            <If test={props.usuario && props.usuario.nome}>
                Bem-vindo, <strong>{props.usuario.nome}</strong>!
                <Else>
                    Bem-vindo, <strong>Usuário</strong>!
                </Else>
            </If>
        </div>
    )
}
