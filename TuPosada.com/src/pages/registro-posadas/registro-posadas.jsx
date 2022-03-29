import React from 'react';
import './registro-posadas.css'
import {db}  from "../../utils/firebase-config";
import { useForm } from "react-hook-form";
import firebase from 'firebase';
import { app } from '../../utils/firebase-config';
import {useEffect} from "react/cjs/react.development";
import { useState,useContext} from "react";
export default function  RegistrarPosadas() {
    const{register,handleSubmit, formState: { errors }}=useForm();
    const [pos, setPos]= useState([]);

    const posadas = async ()=>{
        const posRef =db.collection("posadas"); 
        const response= await posRef.get();
        
        setPos(response.docs);
    }
    
      
    const onSubmit = (e) => {
        db.collection("posadas").doc(e.id).set(e);
        alert("Posada registrada con exito.");
      }

    useEffect(()=>{  
        posadas();
        
      
    },[])

    return(
        <div className='posadas-container'>
            <div className='posadas-wrapper'>
                <div className='posadas-text'>Registro de Posadas</div>
                <form className='posadas-form' onSubmit={handleSubmit((data)=>{onSubmit(data)})}>
                    <input className='nombre' type='text' {... register("nombre",{required:"Un correo electronico es necesario"})} placeholder='Nombre de la Posada' />
                    <input className='ubicacion' type='text' {... register("ubicacion",{required:"Un correo electronico es necesario"})} placeholder='Ubicacion de la Posada' />
                    <input className='image' type='text'  {... register("imagen1",{required:"Un correo electronico es necesario"})}   placeholder='url de imagen1' ></input>
                    <input className='image' type='text'  {... register("imagen2",{required:"Un correo electronico es necesario"})}     placeholder='url dImagen2' ></input>
                    <input className='image' type='text'  {... register("imagen3",{required:"Un correo electronico es necesario"})}   placeholder='url de Imagen3' ></input>
                    <textarea className='descripcion' type='text'  {... register("descripcion",{required:"Un correo electronico es necesario"})}   placeholder='Descripcion' />
                    <textarea className='servicios' type='text'   {... register("servicios",{required:"Un correo electronico es necesario"})} placeholder='Servicios' />
                    <input className='nombre' type='text' {... register("id")} placeholder='ID (solo para editar)' />
                    <button className='button' type='submit'>Submit</button>
                </form>
            </div>

            <div className='posadas-wrapper'>
              
                <h1 className='tituloLista'>Lista de posadas en el sistema</h1>
                {pos.map((posada)=>(
                    <div>
                    <h2 className='tituloNombre'>Nombre de posada:  {posada.data().nombre}</h2>
                    <h2 className='tituloId'> ID  en el sistema: {posada.id}</h2>
                    </div>
                ))}
            

            </div>
        </div>
    )
}