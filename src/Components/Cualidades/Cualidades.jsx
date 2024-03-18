import React, { useState } from "react";
import "./Cualidades.css";
import textil from '../Assets/textiles (1).png'
import textil2 from '../Assets/textil-compositione.png'
import textil3 from '../Assets/textil-respirable.png'
import textil4 from '../Assets/textil-diferencial.png'
const Cualidades = () => {
  const[display,setDisplay]= useState('false');
  const handleMouseEnter = ()=>{
    setDisplay(true);
  }
  const handleMouseLeave = ()=>{
    setDisplay(false)
  }
  return (
    <>
      <section className="section-textil"onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="textil-titulo" >
        <p>Razones que nos hacen la mejor marca de cuellos de bogota</p>
        <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div className={display ? "contenedor-display": "none"}>
        <div className="textil-contenedor">
          <img src={textil2} alt="" />
          <p>
            Nuestras telas son ligeras, suaves y hipoalergenicas, material 100%
            nacional
          </p>
        </div>
        <div className="textil-contenedor">
          <img src={textil3} alt="" />
          <p>
            Telas son ligeras, suaves y hipoalergenicas, material 100%
            nacional
          </p>
        </div>
        <div className="textil-contenedor">
          <img src={textil} alt="" />
          <p>
            Disenios unicos y personalizables
          </p>
        </div>
        <div className="textil-contenedor">
          <img src={textil4} alt="" />
          <p>
            Materiales ligeros, suaves y hipoalergenicos, 100%
            nacionales
          </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default Cualidades;
