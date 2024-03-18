import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
        <strong>{props.name}</strong>
      <img src={props.image} alt=""/>
      <div className='item-info'>
        <p>Precio: ${props.newPrice}</p>
      </div>
    </div>
  )
}

export default Item