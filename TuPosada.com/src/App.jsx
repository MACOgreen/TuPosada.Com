import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Reg from "./pages/registro"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Elementos para el Routing
import Home from './pages/homePage';
import Login from './pages/logIn';

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
        </Switch>
      </div>
    </Router>
  )
}

export default App
