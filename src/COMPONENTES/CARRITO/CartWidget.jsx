import React, { useContext } from 'react';
import { CartContext } from '../CONTEXTO/CartContext'
import { Link } from 'react-router-dom';
import './CartWidget.css'

export const CartWidget = () => {
    const { cart } = useContext(CartContext)

    return (
        <Link className="enlace-carrito" to='/cart'>
            <div className="contenedor-widget">
                🛒
                <span className="cantidad-carrito">{cart.length}</span>
            </div>
        </Link>
    )
}