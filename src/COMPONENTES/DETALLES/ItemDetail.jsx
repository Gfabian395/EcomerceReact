import React, { useContext } from 'react';
import { CartContext } from '../CONTEXTO/CartContext';
import { ItemCount } from '../CONTADOR/ItemCount';
import './ItemDetail.css'

export const ItemDetail = ({ prod }) => {
    const { cart, addToCart } = useContext(CartContext)

    const handleAddToCart = (cant) => {
        const prodConCantidad = { ...prod, cantidad: cant }
        addToCart(prodConCantidad)
    }


    return (
        <div className='tarjeta-detalle'>

            <h3 className='nombre-producto'>{prod.nombre}</h3>
            <img className='imagen-producto' src={prod.imagen} alt="" />
            <p className='precio-producto'>{prod.precio}</p>
            <p className='detalle-producto'>{prod.detalle}</p>
            <ItemCount handleAddToCart={handleAddToCart} />
        </div>
    )
}