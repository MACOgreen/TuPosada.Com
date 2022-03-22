import {React,useContext} from 'react'
import { UserContext } from "../../context/UserContext";
import { useNavigate,Link } from "react-router-dom";
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
                              {/*<img src={user.img}></img>*/}
                              <ul className='Lista1'>{/* Links al register y login*/}
                                  <li className='lh'><img className='imgPerfil' src={user.img}></img></li>
                                  <li className='lh'><a>{user.name}</a></li>
                                  <li className='lh'><a href={"/user-profile"}> Ver Perfil</a></li>
                                  <li className='lh'><a onClick={handleLogout}>Cerrar sesion</a></li>
                              </ul>
                  </div>
                  )
        }
    </div>
  )
}
