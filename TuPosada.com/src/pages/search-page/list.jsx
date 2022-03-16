import  React from 'react'
import data from "./mock_data.json"


//importar todas las imagenes para mostrarlas junto a los resultados de busqueda
//una imagen por cada ciudad "./assets/Caracas.jpg"

function List(props) {
    return (
        <ul>
            {data.filter(ciudad => {
                    if (props.query === '') {
                        return ciudad;
                    } else if (ciudad.ciudad.toLowerCase().includes(props.query.toLowerCase())) {
                        return ciudad;
                    }
                }).map((ciudad) => (
                    
                    <li key={ciudad.ciudad}>
                        
                        
                        <h1>{ciudad.ciudad}</h1>   
                        

                    </li>
                    
               
            ))}
        </ul>
    )
}

export default List