
import { Routes, Route } from 'react-router-dom';



import './App.css';
import {HomeView} from "./vistas/HomeView"
import {ReservaView} from "./vistas/ReservaView"
import {RegistroView} from "./vistas/RegistroView"




function App() {

 

  return  (
    
    <Routes>

      <Route path="/" element={<HomeView />} />      
      <Route path="/reserva" element={<ReservaView  />} /> 
      <Route path="/registro" element={<RegistroView  />} />      

    </Routes>
  )
  
}

export default App;
