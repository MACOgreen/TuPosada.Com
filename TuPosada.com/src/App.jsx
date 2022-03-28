import { useState } from 'react'
import './App.css'
import Reg from "./pages/register/registro"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Elementos para el Routing
import Home from './pages/home/homePage';
import Login from './pages/login/logIn';
import Search from './pages/search-page/search-page';
import RegistrarDestino from './pages/registrar-destino/registrar-destino-page'
import Error from "./pages/404/404";
import UserContextProvider from "./context/UserContext";
import PosadaContext from './context/posadaContext';
import Perfil from './pages/perfilPosada/perfil';
import UserProfile from './pages/User-Profile/UserProfile';
import Reservar from './pages/reserva/reservar';
import Navbar from './components/NavBarRL/Navbar';

function App() {
  

  return (
    <Router>
      <UserContextProvider> 
      <PosadaContext>
      <div className="App">
      <Navbar/>
        <Routes>  {/*  Contiene las vistas del sitio web con sus rutas. */}

          <Route exact path="/" element={<Home/>} /> {/* Mostrar la vista del home page */}
             
          <Route exact path="/reg" element={<Reg/>}/> {/* Mostrar la vista del registro */}
              
          <Route exact path="/login" element={<Login/>}/>{/* Mostrar la vista del Login */}

          <Route exact path="/search-page" element={<Search/>} />{/* Mostrar la vista de la busqueda de alojamientos */}
          
          
          <Route exact path="/registrar-destino-basico" element={<RegistrarDestino/>} />{/* pagina auxiliar para registrar destino (solo con propositos de desarrollo)*/}

          <Route exact path="*" element={<Error/>}/>  {/* Mostrar la vista de pagina de error */}
          <Route exact path="/user-profile" element={<UserProfile/>}/>  
          <Route exact path="/perPosada" element={<Perfil/>}/>  {/* Vista de perfil de posada */}
          <Route exact path="/reservar" element={<Reservar/>}/>  {/* Vista de perfil de posada */}

        </Routes>
      </div>
      
      </PosadaContext>
      </UserContextProvider>
    </Router>
  )
}

export default App
