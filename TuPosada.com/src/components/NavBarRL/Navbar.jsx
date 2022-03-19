import {React,useContext} from 'react'
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { auth, facebookProvider } from "../../utils/firebase-config";
import "./stylesNav.css";

export default function Navbar() {
  const { user,setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await auth.signOut();
    
    setUser(null);
    
  };

  const sacar = async ()=>{
    await setUser();
  }

  return (
    <div> 
          {!user? (
                  <div className='barra1'>  {/* Contenedor del NavBar para resgitro y login */}
                              <ul className='Lista1'>{/* Links al register y login*/}
                                  <li className='lh'><a   href={"/reg"}> Registrate</a></li>
                                  <li className='lh'><a   href={'/login'}> Iniciar Sesión</a> </li>
                              </ul>
                  </div>
                    ):(
                  <div className='barra2'>  {/* Contenedor del NavBar con Imagen del usuario, boton perfil, y boton*/}
                              <ul className='Lista1'>{/* Links al register y login*/}
                                  <li className='lh'><a>Foto de perfil</a></li>
                                  <li className='lh'><a>Nombre del usuario</a></li>
                                  <li className='lh'><a href={"/user-profile"}> Ver Perfil</a></li>
                                  <li className='lh'><a onClick={handleLogout}>Cerrar sesion</a></li>
                              </ul>
                  </div>
                  )
        }
    </div>
  )
}
