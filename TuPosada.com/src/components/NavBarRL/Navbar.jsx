import {React,useContext} from 'react'
import { UserContext } from "../../context/UserContext";
import { useNavigate,Link } from "react-router-dom";
import logo from './tuposadasinfondo.png';
import { auth, facebookProvider } from "../../utils/firebase-config";
import "./stylesNav.css";

export default function Navbar() {
  const { user,setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    localStorage.clear();
    navigate("/");
    setUser(null);
  };

  const sacar = async ()=>{
    await setUser();
  }

  if(!user){
    // Este es el navBar que aparece por defecto.
    return (
      <nav class="navbar">
      <div class="topnav">
          <a class="active" href="/">Home</a>
          <a href="#destinos">Buscar Destinos</a>
          <a href="#feedback">Feedback</a>
          <a href="#about-me">About Us</a>
          <a href="/reg">Registrate</a>
          <a href="/login">Iniciar Sesion</a>
      </div>
  </nav>
    )
  }
  if(user){
    if(!user.administrador){
      // Este es el navBar que aparece cuando inicia sesion un usuario normal.
      return(
        <nav class="navbar">
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#hero">Buscar Destinos</a>
            <a href="#experience">Feedback</a>
            <a href="#about-me">About Us</a>
            <a href='#'>{user.name}</a>
            <a href="/user-profile">Ver Perfil</a>
            <a href="#" onClick={handleLogout}>Cerrar Sesion</a>
        </div>
        </nav>
      )
    }
    {/* Este es el navBar que aparece cuando inicia sesion un admin.*/}
    return(
      <nav className="navbar">
        <div class="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#destinos">DashBoard Destinos</a>
            <a href="#destinos">DashBoard Posadas</a>
            <a href="#feedback">Feedback</a>
            <a href="#about-us">About Us</a>
            <a href='#'>{user.name}</a>
            <a href="#" onClick={handleLogout}>Cerrar Sesion</a>
        </div>
        </nav>
    )

  }


  
}
