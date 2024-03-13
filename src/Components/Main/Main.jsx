import React, { useContext } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../Contexto/MenuContext'
import imagen1 from '../Assets/Cuelleria/Cuelleria-img1 (1).png'
const Main = () => {
  const {setMenu} = useContext(MenuContext);
  return (
    <div className='main'>
      <section className='main-izq'>
        <div className='main-izq-titulo'>
          <h2><div className='giro'>B</div>ienvenido a la Cuelleria</h2>
          <div className='main-izq-subtitulo'>
            <p>La tienda de los mejores cuellos, balaclavas y accesorios de bogota.</p>
            <div className='main-izq-btn'>
              <strong>Quieres conocer nuestros productos</strong>
              <Link to={'/productos'} onClick={()=>setMenu('productos')}><button>Da click aqui!</button></Link>
            </div>
          </div>
        </div>
      </section>
      <section className='main-der'>
        <img src={imagen1} alt="" />
      </section>
    </div>
  )
}

export default Main