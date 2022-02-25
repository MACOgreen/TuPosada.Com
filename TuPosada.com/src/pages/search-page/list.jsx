import { React, useState } from 'react'
import data from "./mock_data.json"

function List(props) {
    return (
        <ul>
            {data.filter(posada => {
                    if (props.query === '') {
                    return posada;
                    } else if (posada.posada.toLowerCase().includes(props.query.toLowerCase())) {
                    return posada;
                    }
                }).map((posada) => (
               
                    <li key={posada.id}>
                        <p>Posada: {posada.posada}</p>   
                        <p>Ciudad: {posada.ciudad}</p>  
                        <p>Disponibilidad: {posada.disponibilidad}</p>

                    </li>
                    
               
            ))}
        </ul>
    )
}

export default List