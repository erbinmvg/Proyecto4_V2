
import { Routes, Route } from 'react-router-dom';



import './App.css';
import {HomeView} from "./vistas/HomeView"
import {ReservaView} from "./vistas/ReservaView"
import {RegistroView} from "./vistas/RegistroView"
import {DetalleView} from "./vistas/DetalleView"
import { MuiNavbar } from "./componentes/MuiNavbar";
import { Footer } from "./componentes/Footer"



function App() {

 

  return  (
      <>
      <MuiNavbar />
    <Routes>
      <Route path="/" element={<HomeView />} />      
      <Route path="/reserva" element={<ReservaView  />} /> 
      <Route path="/registro" element={<RegistroView  />} />      
      <Route path="/lista-reserva" element={<DetalleView  />} />      
    </Routes>
      <Footer />
      </>
  )
  
}

export default App;
