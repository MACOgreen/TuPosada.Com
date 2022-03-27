import React from 'react'
import "./perfilStyle.css"
import Carousel from './carousel2/Carousel'
import { UserContext } from "../../context/UserContext";
import { useState,useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import {db}  from "../../utils/firebase-config";
import {useEffect} from "react/cjs/react.development";


export default function Perfil() {
  const { user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [posada, setPosada] = useState({}); //Contenedor 
  

  const traerPosada= async ()=>{

    //const NomPosada=user["posada"];//sujeto a cambio.
    const NomPosada="Casa de las trinitarias";
    var i =0;

    const posRef =db.collection("posadas");
    const response= await posRef.get();
    //console.log(response.docs[i].data());
    while(true){
      if(response.docs[i].data().nombre== NomPosada){
        break;
      }
      i+=1;
    }
    //console.log(response.docs[i].data());
    setPosada(response.docs[i].data());
  }

  //Verifica que haya un usuario logeado
  const verificar=()=>{
      if(user==null || user==""){
        alert("Para realizar una reserva primero debe iniciar sesión.O registrarse si no se encuentra en el sistema.");
        navigate("/login");
      }
      else{//Aqui se redirige a la vista de realizar reserva
            

      }
  }

  //Verificar habitaciones disponibles
  const dispoHa=(habitaciones)=>{
    //const Nhabitaciones= JSON.parse(habitaciones);
    //console.log(Nhabitaciones);
  }
  useEffect(()=>{  // Me permite programa para que lo que este entre {} se ejecute apenas iniciar la vista
    
    traerPosada();
    //console.log(posada.descripcion);
   },[])
  return (
    <div className='info'>
        <h1 className='Tposada'> {posada.nombre} </h1>
        <Carousel imagen1={posada.imagen1} imagen2={posada.imagen2} imagen3={posada.imagen3}/>
        <h2 className='Tposada'>Descripcion de la posada  {posada.nombre}  </h2>

        <div className='ParrafoDescrip'>{posada.descripcion}
        </div>

        <h2 className='Tposada' >Servicios</h2>

        <div className='ParrafoServ'>{posada.servicios}
        </div>
        
        <h2 className='Tposada' >Habitaciones disponibles</h2>
        <div className="pr">{dispoHa(posada.habitaciones)} </div>

        <button className='bo' onClick={verificar}>Realizar reserva</button>
        
    </div>
  )
}




