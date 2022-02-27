import { useState } from 'react'
import './stylesH.css';
import logo from "./tuposadalogo.png";

function Home(){


    return(
        <div className='Home'>
                < img className='ima' src={logo}/>
                <div className='NavbarRyL'>  {/* Contenedor del NavBar para resgitro y login */}
                    <ul className='Lista1'>{/* Links al register y login*/}
                        <li><a   href={"/reg"}> Registrate</a></li>
                        <li><a   href={'/login'}> Iniciar Sesión</a> </li>
                    </ul>
                </div>

                <div className='NavbarByI'>  {/* Contenedor del NavBar para busqueda y informacion */}
                    <ul className='Lista2'>{/* Links al busqueda y informacion*/}
                        <li className='li2' ><a  className='a2'  href={"/reg"}> Busqueda de destino</a></li>
                        <li className='li2' ><a   className='a2' href={'/login'}> Acerca de nosotros</a> </li>
                    </ul>
                </div>
                

        </div>


    )
}

export default Home