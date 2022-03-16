import { React, useState } from 'react'

function Imagen_ciudad(props){
    
    let imagen_auxiliar;

    import('TuPosada.com/TuPosada.com/src/pages/search-page/assets/Caracas.jpg')
        .then(( imagen ) => {
           imagen_auxiliar = imagen
        })
        .catch( error => {
            // handle error here
        });
    return (
        <img src= {imagen_auxiliar} alt="imagen">
        
        </img>
    )
}

export default Imagen_ciudad