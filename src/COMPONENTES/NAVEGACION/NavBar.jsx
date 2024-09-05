import React, { useContext } from 'react';
import { CartWidget } from '../CARRITO/CartWidget';
import { Link } from 'react-router-dom'
import { CartContext } from '../CONTEXTO/CartContext';
import { ThemeContext } from '../TEMAS/ThemeContext';
import './NavBar.css'


export const NavBar = () => {
    const { mensajito } = useContext(CartContext)
    const { darkTheme, setDarkTheme } = useContext(ThemeContext)

    return (
        <nav className='barra-navegacion'>
            <Link to="/">
                <h2 className='titulo'><img src="./oficial.png" alt="" /></h2>
            </Link>
            <CartWidget />

            <Link to='/categoria/COCINAS' className='enlace-categoria' >COCINAS </Link>
            <Link to='/categoria/SMARTPHONES' className='enlace-categoria'> SMARTPHONES </Link>
            <Link to='/categoria/HELADERAS' className='enlace-categoria' >HELADERAS </Link>
            <Link to='/categoria/SMART-TV' className='enlace-categoria' >SMART TV </Link>
            <h3 className='mensaje'>{mensajito}</h3>
            <button className='boton-cambiar-tema' onClick={() => setDarkTheme(!darkTheme)}>cambiar theme</button>
        </nav>
    )
};