import React, { useState } from "react";
import productos from "../Components/Assets/all_product";
import Item from "../Components/Item/Item";
import './CSS/Productos.css'
const Productos = () => {
  const [valor, setValor] = useState('todos');

  const handleChange = (e)=>{
    setValor(e.target.value);
  }
  return (
    <>
      <main className="main-productos">
        <section className="productos_seccion-filtro">
          <div className="seccion-filtro">
            <div>
              <h5>Estos son nuestos productos, puedes filtrar segun lo que estes buscando</h5>
            </div>
            <select name="select" id="select" onChange={handleChange}>
              <option value="todos">todos</option>
              <option value="men" >Hombre</option>
              <option value="women">Mujer</option>
              <option value="kid">ninio</option>
            </select>
          </div>
        </section>
        <section className="productos_seccion-productos">
          {/* {productos.map((item, i) => {
            if (item.category === valor || valor === 'todos') {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  newPrice={item.new_price}
                />
              );
            } else {
              console.log("nosirvo");
            }
          })} */}
          {productos.filter(item => item.category === valor || valor === 'todos').map((item) => (
  <Item
    key={item.id}
    id={item.id}
    name={item.name}
    image={item.image}
    newPrice={item.new_price}
  />
))}
        </section>
      </main>
    </>
  );
};

export default Productos;
