import  React from 'react'
import { app } from '../../utils/firebase-config'
import { db } from '../../utils/firebase-config'
import './registrar-destino.css'
import {useEffect} from "react/cjs/react.development";
import { useState,useContext} from "react";
//hice esta vista para registrar ciudades y subir su imagen correspondiente en la base de datos
//lo necesitaba para el nombre y la imagen de la ciudad que se muestra en la busqueda de destinos
//sin embargo tal vez algo asi sirve para la vista del admin que registra nuevos destinos y posadas
//lo que hace es subir una imagen en el storage de firebase y crea un doc de destino que guarda el nombre 
//de la ciudad y el url de la imagen para tenerla de referencia para mostrarla en la search-page.jsx

  export default function RegistrarDestino() {
    
    const [fileUrl, setFileUrl] = React.useState();
    const [des, setDes]= useState([]);

    //subir imagen y guardar el url correspondiente en fileUrl para  guardarlo en collections para 
    //que search-page.jsx lo use posteriormente
    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        const fileUrl = await fileRef.getDownloadURL()
        setFileUrl(await fileRef.getDownloadURL())
      }
      
      const onSubmit = (e) => {
        e.preventDefault();
        const ciudad = e.target.ciudad.value;
        db.collection("destinos").doc(ciudad).set({
            nombre_ciudad: ciudad,
            urlImagen: fileUrl
        })
        alert("Destino creado con exito.");
      }

      const destinos = async ()=>{
        const posRef =db.collection("destinos"); 
        const response= await posRef.get();
        
        setDes(response.docs);
    }

    useEffect(()=>{  
         destinos();
    },[])  
    return(
      <div className='registro-container'>
          <div className='registro-wrapper'>
            <div className='registro-text'>Registro de Destinos</div>
            <form className='form' onSubmit={onSubmit}>
                <input className='file'  type="file" onChange={onFileChange}/>
                <input className='ciudad' type="text" name="ciudad" placeholder='Nombre de la ciudad'/>
                <button className='button'>Submit</button>
                
            </form>
          </div>

          <div className='registro-wrapper' >
                <h1 className='tituloDestinos'>Lista de posadas en el sistema</h1>
                {des.map((destino)=>(
                    <div>
                      <h2 className='tituloDes'>Nombre de destino:  {destino.data().nombre_ciudad}</h2>
                    </div>
                ))}
          </div>
        </div>
      )
  }

