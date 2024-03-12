import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu,setMenu] = useState("inicio");

  return (
    <div className='navbar '>
      <div className='nav_logo'>
        <ul className="nav-menu nav-menu-l">
          <li className='nav-menu-li' onClick={()=> {setMenu("inicio")}}><Link className='link' to='/'>Inicio</Link>{menu==="inicio"?<hr className='nav-li-hr'/>:<></>}</li>
          <li className='nav-menu-li' onClick={()=> {setMenu("productos")}}><Link className='link' to='/productos'>Productos</Link>{menu==="productos"?<hr className='nav-li-hr'/>:<></>}</li>
        </ul>
        <div className='nav-img'>
          <Link to={"/"}><img src={logo} alt=""/></Link>
        </div>
        <ul className="nav-menu nav-menu-r">
          <li className='nav-menu-li' onClick={()=> {setMenu("nosotros")}}><Link className='link' to='/nosotros'>Nosotros</Link>{menu==="nosotros"?<hr className='nav-li-hr'/>:<></>}</li>
          <li className='nav-menu-li' onClick={()=> {setMenu("contacto")}}><Link className='link' to='/contacto'>Contacto</Link>{menu==="contacto"?<hr className='nav-li-hr'/>:<></>}</li>
        </ul>
        <div>
        <img src={cart_icon} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Navbar