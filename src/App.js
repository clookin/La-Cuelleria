import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./Pages/Contacto";
import Nosotros from "./Pages/Nosotros";
import Productos from "./Pages/Productos";
import Inicio from "./Pages/Inicio";
import { MenuProvider } from "./Contexto/MenuContext";
function App() {
  return (
    <div>
      <BrowserRouter>

      <MenuProvider>
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/productos" element={<Productos/>}>
            <Route path=":productId" element={<Productos/>}/>
          </Route>
        </Routes>
      </MenuProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
