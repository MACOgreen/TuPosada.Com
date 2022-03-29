import  React from 'react'
import { useEffect } from 'react/cjs/react.development'
import UserContextProvider from '../../context/UserContext'
import { db } from '../../utils/firebase-config'
import { useNavigate,Link } from "react-router-dom";

function List(props) {
    const [destinos, setDestinos] = React.useState([])
    const navigate = useNavigate();
    const ThemeContext = React.createContext();
    useEffect(() => {
        
        const fetchDestinos = async () => {
            const destinosCollection = await db.collection('destinos').get()
            setDestinos(destinosCollection.docs.map(doc => {
                return doc.data()
            }))    
        }
        
        fetchDestinos()
    }, [])
    
    
    return (
        <ul>
            {destinos.filter(destino => {
                    if (props.query === '') {
                        return destino;
                    } else if (destino.nombre_ciudad.toLowerCase().includes(props.query.toLowerCase())) {
                        return destino;
                    }
                }).map((destino) => (
                    
                    <li key={Math.random().toString(16).slice(2)}   onClick={() =>
                        
                        navigate("/ciudad-page")
                      }>
                        
                        <img src={destino.urlImagen}></img>
                        <h1>{destino.nombre_ciudad}</h1>   
                        
                        
                    </li>
                    
               
            ))}
        </ul>
    )
}

export default List