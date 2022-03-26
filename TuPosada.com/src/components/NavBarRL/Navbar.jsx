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
    return (
      <nav class="navbar">
      <div class="topnav">
          <a class="active" href="#home"><img className='ima' src={logo}/></a>
          <a href="#hero">Buscar Destinos</a>
          <a href="#experience">Feedback</a>
          <a href="#about-me">About Us</a>
          <a href="/reg">Registrate</a>
          <a href="/login">Iniciar Sesion</a>
      </div>
  </nav>
    )
  }
  if(user){
    if(!user.administrador){
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
    return(
      <nav className="navbar">
        <div class="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#destinos">Buscar Destinos</a>
            <a href="#feedback">Feedback</a>
            <a href="#about-us">About Us</a>
            <a href='#'>{user.name}</a>
            <a href="/user-profile">Ver Perfil</a>
            <a href="#" onClick={handleLogout}>Cerrar Sesion</a>
        </div>
        </nav>
    )

  }


  
}
