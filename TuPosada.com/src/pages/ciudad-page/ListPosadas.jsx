import  React from 'react'
import { useEffect } from 'react/cjs/react.development'
import UserContextProvider from '../../context/UserContext'
import { db } from '../../utils/firebase-config'


function ListPosadas(props) {
    const [posadas, setPosadas] = React.useState([])
    
    useEffect(() => {
        
        const fetchPosadas = async () => {
            const posadasCollection = await db.collection('posadas').get()
            setPosadas(posadasCollection.docs.map(doc => {
                return doc.data()
            }))    
        }
        
        fetchPosadas()
    }, [])
    
    
    return (
        <ul>
            {posadas.filter(posada => {
                    if (props.query === '') {
                        return posada;
                    } else if (posada.nombre.toLowerCase().includes(props.query.toLowerCase())) {
                        return posada;
                    }
                }).map((posada) => (
                    
                    <li key={Math.random().toString(16).slice(2)}>
                        
                        <img src={posada.imagen1}></img>
                        <h1>{posada.nombre}</h1>   
                        
                        
                    </li>
                    
               
            ))}
        </ul>
    )
}

export default ListPosadas