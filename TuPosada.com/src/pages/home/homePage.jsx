import { useState } from 'react'
import './stylesH.css';
import logo from "./tuposadasinfondo.png";
import Carousel from './posadasHome/carousel/Carousel';
import React, { Component } from 'react';

function Home(){


    return(
        <div className='Home'>
            
            
                

           
            
            <br></br>
            <br></br>
            <br></br>
             
            
                
            

            <br></br>
            <br></br>
            <br></br>
            <Carousel/>

            {/* <div className='NavbarByI'>  
                <ul className='Lista2'>
                    <li className='lh2' id='segLis' ><a  className='a2'  href={"/search-page"}> Busqueda de destino</a></li>
                    <li className='lh2'  id='segLis'><a   className='a2' href={'/login'}> Acerca de nosotros</a> </li>
                </ul>
            </div>  */}

            
                </div>
    )
}

export default Home