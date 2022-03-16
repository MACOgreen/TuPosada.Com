import {React,useContext} from 'react'
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase-config";
import "./stylesNav.css";

export default function Navbar() {
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    await auth.signOut();
  };

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
                                  <li className='lh'>Foto de perfil</li>
                                  <li className='lh'>Nombre del usuario</li>
                                  <li className='lh'><a   href={"/user-profile"}> Ver Perfil</a></li>
                                  <li className='lh'> 
                                      <div>
                                        <button type="button">
                                          Cerrar sesion
                                        </button>
                                      </div>
                                  </li>
                              </ul>
                  </div>
                  )
        }
    </div>
  )
}
