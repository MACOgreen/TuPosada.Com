import { useState } from 'react'
import './App.css'
import Reg from "./pages/register/registro"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Elementos para el Routing
import Home from './pages/home/homePage';
import Login from './pages/login/logIn';
import Search from './pages/search-page/search-page';

function App() {
  

  return (
    <Router>

      <div className="App">
        <Switch>  {/*  Contiene las vistas del sitio web con sus rutas. */}
        
          <Route exact path="/" > 
            <Home/> {/* Mostrar la vista del home page */}

          </Route>

          <Route exact path="/reg" >
            <Reg/>  {/* Mostrar la vista del registro */}
          </Route>
          
          <Route exact path="/login" >
            <Login/> {/* Mostrar la vista del Login */}
          </Route>

          <Route exact path="/search-page" >
            <Search/> {/* Mostrar la vista de la busqueda de alojamientos */}
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App
