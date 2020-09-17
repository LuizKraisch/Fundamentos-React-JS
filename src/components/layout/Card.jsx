import './Card.css'
import React from 'react'

export default props => {
    return (
        <div className="Card">
            <div className="Title"><b>{props.titulo}</b></div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}