import React from 'react';
import { useContext } from 'react';
import{CartContext}from '../CONTEXTO/CartContext'
import './CartItem.css'

export const CartItem = ({ producto }) => {
    const { eliminarProducto } = useContext(CartContext)

    return (
        <div className="item-carrito">
            <h3 className="nombre-producto">{producto.nombre}</h3>
            <p className="precio-producto">precio: ${producto.precio}</p>
            <p className="cantidad-producto">Cantidad: {producto.cantidad}</p>
            <img src={producto.imagen} alt="" />
            <button className="botón-eliminar" onClick={() => eliminarProducto(producto.id)}>
                Eliminar producto
            </button>
        </div>
    )
}