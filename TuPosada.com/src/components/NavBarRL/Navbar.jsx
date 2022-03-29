import {React,useContext} from 'react'
import { UserContext } from "../../context/UserContext";
import { useNavigate,Link } from "react-router-dom";
import logo from './tuposada.comlogo.png';
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
          <a class='active' href="/"><img className='logo' src={logo} alt=" " /></a>
          <a href="#destinos">Buscar Destinos</a>
          <a href="#feedback">Feedback</a>
          <a href="#about-us">About Us</a>
          <a className='signup' href="/reg">Registrate</a>
          <a className='login' href="/login">Iniciar Sesion</a>
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
            <a href="/"><img className='logo' src={logo} alt=" " /></a>
            <a href="#destinos">Buscar Destinos</a>
            <a href="#feedback">Feedback</a>
            <a href="#about-us">About Us</a>
            <a href='#'>{user.name}</a>
            <a href="/user-profile">Ver Perfil</a>
            <a className='sign-out' href="#" onClick={handleLogout}>Cerrar Sesion</a>
        </div>
        </nav>
      )
    }
    {/* Este es el navBar que aparece cuando inicia sesion un admin.*/}
    return(
      <nav className="navbar">
        <div class="topnav">
            <a class="active" href="/"><img className='logo' src={logo} alt=" " /></a>
            <a href="/registrar-destino-basico">registro Destinos</a>
            <a href="/registrar-posadas">Registro Posadas</a>
            <a href="#feedback">Feedback</a>
            <a href="#about-us">About Us</a>
            <a href='#'>{user.name}</a>
            <a href="/user-profile">Ver Perfil</a>
            <a href="#" className='sign-out' onClick={handleLogout}>Cerrar Sesion</a>
        </div>
        </nav>
    )

  }


  
}
