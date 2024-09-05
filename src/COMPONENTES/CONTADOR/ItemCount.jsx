import React, {useEffect,useState} from 'react';
import {Button} from '../BOTON/Button'
import { ItemList } from '../PRODUCTOS/ItemList';
import './ItemCount.css'

export const ItemCount = ({handleAddToCart}) => {
  const [count, setCount] = useState(1)

  const restar = () => {
      setCount(count - 1)
  }

  const sumar = () => {
      setCount(count + 1)
  }

  return (
      <div className='contenedor-contador'>
          <Button color="red" funcion={restar}> - </Button>
          <p className="contador">{count}</p>
          <Button color="green" funcion={sumar}> + </Button>
          <button className="botón-agregar" onClick={() => handleAddToCart(count)}> Agregar al Carrito </button>
      </div>
  )
}