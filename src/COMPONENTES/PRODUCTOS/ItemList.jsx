import React from 'react';
import { Item } from '../PRODUCTOS/Item'
import './ItemList.css'

export const ItemList = ({ items }) => {

    return (
        <div className='lista-items'>
            {items?.map((e) => {
                return (
                    <div className='item' key={e.id}>
                        <Item producto={e} />
                    </div>
                )
            })}
        </div>
    )
}