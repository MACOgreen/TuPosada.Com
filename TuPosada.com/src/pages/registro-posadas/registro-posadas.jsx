import React from 'react';
import './registro-posadas.css'


export default function RegistrarPosadas() {

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
      }

    return(
        <div className='posadas-container'>
            <div className='posadas-wrapper'>
                <div className='posadas-text'>Registro de Posadas</div>
                <form className='posadas-form' onSubmit={onSubmit}>
                    <input className='nombre' type='text' name='posada' placeholder='Nombre de la Posada' />
                    <input className='ubicacion' type='text' name='ubicacion' placeholder='Ubicacion de la Posada' />
                    <input className='image' type='file' placeholder='Imagen1' onChange={onFileChange}></input>
                    <input className='image' type='file' placeholder='Imagen2' onChange={onFileChange}></input>
                    <input className='image' type='file' placeholder='Imagen3' onChange={onFileChange}></input>
                    <textarea className='descripcion' type='text' placeholder='Descripcion' />
                    <textarea className='servicios' type='text' placeholder='Servicios' />
                    <button className='button'>Submit</button>
                </form>
            </div>
        </div>
    )
}