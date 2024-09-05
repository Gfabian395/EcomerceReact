import React, { useState } from 'react';
import { ItemCount } from '../CONTADOR/ItemCount';
import { Button } from '../BOTON/Button';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ producto }) => {
    const [isVisible, setIsVisible] = useState(false);

    const mostrarDetalles = () => {
        setIsVisible(true);
    };

    return (
        <div className='tarjeta'>
            <h3 className='texto-titulo'>{producto.nombre}</h3>
            <img className='imagen-producto' src={producto.imagen} alt="foto del producto" /> 
            <p>${producto.precio}</p>
            <p>{producto.categoria}</p>
            <p className='stock-producto'>Stock: {producto.stock}</p> {/* Mostrar el stock */}
            <Button className='boton-detalles' color="blue" funcion={mostrarDetalles}>
                <Link className='enlace-detalles' to={`/detalle/${producto.id}`}>Ver Detalles </Link>
            </Button>
        </div>
    );
};
