import React from 'react';
import './Button.css'

export const Button = (props) => {
    return (
        <button
            className="botón"
            style={{ backgroundColor: props.color }}
            onClick={props.funcion}
        >
            {props.children}
        </button>
    )
}