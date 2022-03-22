import { useState } from 'react'
import './stylesH.css';
import logo from "./tuposadasinfondo.png";
import Carousel from './posadasHome/carousel/Carousel';
import React, { Component } from 'react';

function Home(){


    return(
        <div className='Home'>
            
            
                

            
            < img className='ima' src={logo}/>
           
            
            <br></br>
            <br></br>
            <br></br>
             
            
                
            

            <br></br>
            <br></br>
            <br></br>
            <Carousel/>

            
                </div>
    )
}

export default Home