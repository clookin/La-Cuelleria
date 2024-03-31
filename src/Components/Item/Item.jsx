import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt=""/>
        <strong>{props.name}</strong>
      <div className='item-info'>
        <p>Precio: ${props.newPrice}</p>
        <button>Ver Producto</button>
      </div>
    </div>
  )
}

export default Item