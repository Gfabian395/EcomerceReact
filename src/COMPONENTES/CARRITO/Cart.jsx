import React, { useContext } from 'react';
import { CartContext } from '../CONTEXTO/CartContext'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {
    const { cart, setCart, vaciarCart } = useContext(CartContext)

    return (
        <div className="contenedor-carrito">
            {cart.map(e => {
                return (
                    <CartItem key={e.id} producto={e} />
                )
            })}
            <button className="botón-vaciar" onClick={vaciarCart}>Vaciar carrito</button>
            <Link className="enlace-checkout" to='/checkout'>Terminar Compra</Link>
        </div>
    )
}