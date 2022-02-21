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
        <Switch>

          <Route exact path="/" >
            <Home/>
          </Route>

          <Route exact path="/reg" >
            <Reg/>
          </Route>
          
          <Route exact path="/login" >
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
