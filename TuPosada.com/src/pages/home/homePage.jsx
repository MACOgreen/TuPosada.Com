import { useState } from 'react'
import './stylesH.css';
import logo from "./tuposadasinfondo.png";
import Carousel from './posadasHome/carousel/Carousel';
import React, { Component } from 'react';

function Home(){


    return(
        <div className='Home'>
            
            
                

            {/* Barras de navegación del home page. Parte de más arriba. Parte 1 del Desktop 1 del figma */}
            < img className='ima' src={logo}/>
            <div className='NavbarRyL'>  {/* Contenedor del NavBar para resgitro y login */}
                <ul className='Lista1'>{/* Links al register y login*/}
                    <li className='lh'><a   href={"/reg"}> Registrate</a></li>
                    <li className='lh'><a   href={'/login'}> Iniciar Sesión</a> </li>
                </ul>
            </div>
            <br></br>
            <br></br>
            <br></br>
            
            <Carousel/>
                
            <div className='NavbarByI'>  {/* Contenedor del NavBar para busqueda y informacion */}
                <ul className='Lista2'>{/* Links al busqueda y informacion*/}
                    <li className='lh' id='segLis' ><a  className='a2'  href={"/search-page"}> Busqueda de destino</a></li>
                    <li className='lh'  id='segLis'><a   className='a2' href={'/login'}> Acerca de nosotros</a> </li>
                </ul>
            </div>

            <br></br>
            

            {/* Slideshow mostrando algunas posadas .Parte 2 del Desktop 1 del figma */}
            
            {/*
            <div class="slideshow-container">

            
                <div class="mySlides fade">
                    
                    <img className='imagenPosada' src={posada1}/>
                    <div class="text">Informacion 1</div>
                </div>

                <div class="mySlides fade">
                    
                    <img className='imagenPosada' src=""/>
                    <div class="text">Informacion 2</div>
                </div>

                <div class="mySlides fade">
                    
                    <img className='imagenPosada' src=""/>
                    <div class="text">Informacion 3</div>
                </div>

                
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>

            </div>
                 */}
                </div>
    )
}

export default Home