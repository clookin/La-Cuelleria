import React from 'react'
import "./Popular.css";
import dataProduct from '../Assets/data'
import Item from '../Item/Item';
const Popular = () => {
  return (
    <div className='popular'>
        <h2>Los mas vendidos</h2>
        <div className='popular-item'>
          {dataProduct.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price}/>
          })}
        </div>
    </div>
  )
}

export default Popular