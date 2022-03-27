import { useState } from 'react'
import './stylesH.css';
import img from "./svg-1.svg";
import Carousel from './posadasHome/carousel/Carousel';
import React, { Component } from 'react';

function Home(){


    return(
        <div className='Home'>
            <Carousel />
            <div className='wrapper'>
                <div className='column1'>
                    <div className='textwrapper'>
                        <div className='topline'>Explora nuestros destinos</div>
                        <div className='heading'>Explora gran variedad de posadas</div>
                        <div className='Nuestra base de datos posee una gran variedad de destinos y posadas para planear el mejor viaje'></div>
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
        </div>
    )
}

export default Home