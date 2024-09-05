import './App.css'
import { ItemDetailContainer } from './COMPONENTES/DETALLES/ItemDetailContainer'
import { NavBar } from './COMPONENTES/NAVEGACION/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from './COMPONENTES/CARRITO/Cart'
import { CartContextProvider } from './COMPONENTES/CONTEXTO/CartContext'
import { useContext } from 'react'
import { ThemeContext } from './COMPONENTES/TEMAS/ThemeContext'
import { Checkout } from './COMPONENTES/LOGIN/Checkout'
import { ItemListContainer } from './COMPONENTES/PRODUCTOS/ItemListContainer'
import './App.css'

export function App() {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <>
      <CartContextProvider>

        <div className={darkTheme ? "oscuro" : "luz"}>

          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="hola" />} />
              <Route path='/categoria/:categoria' element={<ItemListContainer greeting="hola" />} />
              <Route path='/detalle/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1 className="error-pagina">Ey! te perdiste, volve al inicio y compra!</h1>} />
            </Routes>

          </BrowserRouter>
        </div>
      </CartContextProvider>
    </>
  )
}
