import React from 'react'
import posada from "../perfilPosada/perfil"
import {useEffect} from "react/cjs/react.development";
import {PoContext} from '../../context/posadaContext';
import { useState,useContext} from "react";
import { useForm } from "react-hook-form";


export default function Reservar() {
  const {posada, setPosada} = useContext(PoContext); //Contenedor 

  
  useEffect(()=>{  // Me permite programa para que lo que este entre {} se ejecute apenas iniciar la vista
     console.log(posada);
    
   },[])
  return (
    <div className="Cuadro">




        dfsfsdfsd
    </div>
  )
}
