import './Card.css'
import React from 'react'

export default props => {
    const cardStyle = {
        backgroundColor: props.color || '#347FC4',
        borderColor: props.color ||  '#347FC4',
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title"><b>{props.titulo}</b></div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}