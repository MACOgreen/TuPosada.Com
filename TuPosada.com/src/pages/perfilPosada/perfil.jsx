import React from 'react'
import "./perfilStyle.css"
import Carousel from './carousel2/Carousel'
import { UserContext } from "../../context/UserContext";
import { useState,useContext} from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Perfil() {
  const { user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const verificar=()=>{
      if(user==null || user==""){
        alert("Para realizar una reserva primero debe iniciar sesión.O registrarse si no se encuentra en el sistema.");
        navigate("/login");
      }
      else{//Aqui se redirige a la vista de realizar reserva
            

      }
  }
  return (
    <div className='info'>
        <h1 className='Tposada'> Nombre de la posada  </h1>
        <Carousel/>
        <h2 className='Tposada'>Descripcion de la posada "Nombre posada"</h2>

        <div className='ParrafoDescrip'>fddjfhdajfjkadfjksdhjkfshfkjdshjfhdsjkfhjkdsfhdhfjkdsfdshjkfhdksfdsfkdfiiiiiiiii
             fdjfkldjfklsjdklfjdlksjfkldsjfjdlsjflkdjfkldjlkfjdlsjfldsjlkfjdskljflkdsjlkfjlds
             dfdflkdjslkfjdslkfjlkdsjflkdjfjldsfdjlfkdjslkfjksdjfjlksjdflkdjsfjdskljfldsjlfjdl
        </div>

        <h2 className='Tposada' >Servicios</h2>

        <div className='ParrafoServ'>fddjfhdajfjkadfjksdhjkfshfkjdshjfhdsjkfhjkdsfhdhfjkdsfdshjkfhdksfdsfkdfiiiiiiiii
             fdjfkldjfklsjdklfjdlksjfkldsjfjdlsjflkdjfkldjlkfjdlsjfldsjlkfjdskljflkdsjlkfjlds
             dfdflkdjslkfjdslkfjlkdsjflkdjfjldsfdjlfkdjslkfjksdjfjlksjdflkdjsfjdskljfldsjlfjdl
        </div>
        
        <h2 className='Tposada' >Habitaciones disponibles</h2>
        <div className="pr">Aqui va la lista de habitaciones disponibles</div>

        <button className='bo' onClick={verificar}>Realizar reserva</button>
        
    </div>
  )
}




