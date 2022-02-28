import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Reg from "./pages/register/registro"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Elementos para el Routing
import Home from './pages/home/homePage';
import Login from './pages/login/logIn';
import Search from './pages/search-page/search-page';
import Error from "./pages/404/404";
function App() {
  

  return (
    <Router>
      <div className="App">
        <Routes>  {/*  Contiene las vistas del sitio web con sus rutas. */}
          <Route exact path="/" element={<Home/>} /> {/* Mostrar la vista del home page */}
             
          <Route exact path="/reg" element={<Reg/>}/> {/* Mostrar la vista del registro */}
              
          <Route exact path="/login" element={<Login/>}/>{/* Mostrar la vista del Login */}

          <Route exact path="/search-page" element={<Search/>} />{/* Mostrar la vista de la busqueda de alojamientos */}
          
          <Route exact path="*" element={<Error/>}/>  {/* Mostrar la vista de pagina de error */}

        </Routes>
      </div>
    </Router>
  )
}

export default App
