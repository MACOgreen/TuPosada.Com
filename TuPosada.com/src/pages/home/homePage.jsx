import { useState } from 'react'
import './stylesH.css';
import img from "./svg-1.svg";
import Carousel from './posadasHome/carousel/Carousel';
import React, { Component } from 'react';

function Home(){


    return(
        <div className='Home'>
            <Carousel />
            <div className='wrapper' id='destinos'>
                <div className='column1'>
                    <div className='textwrapper'>
                        <div className='topline'>Explora nuestros destinos</div>
                        <div className='heading'>Explora gran variedad de posadas</div>
                        <div className='subtitle'>Nuestra base de datos posee una gran variedad de destinos y posadas para planear el mejor viaje</div>
                        <div className='btnwrap'>
                            <a className='btn' href='/search-page'>Buscar Destinos</a>
                        </div>
                    </div>
                </div>
                <div className='column2'>
                    <div className='imgwrap'>
                        <img className='img' src={img}/>
                    </div>
                </div>
            </div> 

            <div className='wrapper2' id='about-us'>
                <div className='column4'>
                    <div className='imgwrap'>
                        <img className='img' src={img}/>
                    </div>
                </div>
                <div className='column3'>
                    <div className='textwrapper'>
                        <div className='topline2'>Acerca de Nosotros</div>
                        <div className='heading2'>Descubre más acerca de TuPosada.com</div>
                        <div className='subtitle2'>TuPosada.com es una plataforma la cual te ofrece una gran variedad de posadas en el territorio venezolano</div>
                        <div className='btnwrap'>
                            <a className='btn' href='/search-page'>Descubre más</a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home
