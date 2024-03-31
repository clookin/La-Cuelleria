import React, { useState } from "react";
import "./Cualidades.css";
import textil from '../Assets/textiles (1).png'
import textil2 from '../Assets/textil-compositione.png'
import textil3 from '../Assets/textil-respirable.png'
import textil4 from '../Assets/textil-diferencial.png'
const Cualidades = () => {
  const[display,setDisplay]= useState("none");
  const handleMouseEnter = ()=>{
    setDisplay("contenedor-display");
  }
  const handleMouseLeave = ()=>{
    setDisplay( "none")
  }
  return (
    <>
      <section className="section-textil" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="textil-titulo" >
        <p>Razones que nos hacen la mejor marca de cuellos de bogota</p>
        <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className={display}>
        <div className="textil-contenedor">
          <img src={textil2} alt="Icono refencia de nuestras telas" />
          <p>
            Nuestras telas son ligeras, suaves y hipoalergenicas, material 100% 
            <strong> nacional</strong>
          </p>
        </div>
        <div className="textil-contenedor">
          <img src={textil3} alt="Icono refencia de nuestras telas" />
          <p>
            No limitan la <strong> respiracion</strong> y evitan la <strong>polucion</strong> del aire
          </p>
        </div>
        <div className="textil-contenedor">
          <img src={textil} alt="Icono refencia de nuestras telas" />
          <p>
            Su material es duradero y conserva su forma por un largo tiempo
          </p>
        </div>
        <div className="textil-contenedor">
          <img src={textil4} alt="Icono refencia de nuestras telas" />
          <p>
          Disenios <strong>unicos</strong>  y <strong>personalizables</strong>
          </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default Cualidades;
