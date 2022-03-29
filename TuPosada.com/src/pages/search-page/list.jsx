import  React from 'react'
import { useEffect } from 'react/cjs/react.development'
import UserContextProvider from '../../context/UserContext'
import { db } from '../../utils/firebase-config'
import { useNavigate,Link } from "react-router-dom";


function List(props) {
    const [destinos, setDestinos] = React.useState([])
    
    const navigate = useNavigate();
    const ThemeContext = React.createContext();

    function trans(d){
        localStorage.setItem("destino",d)
        navigate("/ciudad-page");
    }

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
            <li onClick={()=>localStorage.setItem("destino","caracas")} >
                <img src="https://firebasestorage.googleapis.com/v0/b/tuposada-com.appspot.com/o/Caracas.jpg?alt=media&token=b25afe91-076a-4ce8-ae8b-735956512c9c"></img>
                <h1 onClick={trans}>Caracas</h1>       
            </li>

            <li onClick={()=>localStorage.setItem("destino","losroques")} >
                <img src="https://firebasestorage.googleapis.com/v0/b/tuposada-com.appspot.com/o/EstadoMeridaVenezuela.jpg?alt=media&token=551b3d6e-0a99-4d7e-894b-1e5d8029afbe"></img>
                <h1 onClick={trans}>Los roques</h1>       
            </li>


            <li onClick={()=>localStorage.setItem("destino","maracaibo")} >
                <img src="https://firebasestorage.googleapis.com/v0/b/tuposada-com.appspot.com/o/descarga.jpg?alt=media&token=98982faa-4836-4cb7-803d-6b1a0a4ad7d2"></img>
                <h1 onClick={trans}>Maracaibo</h1>       
            </li>

            <li onClick={()=>localStorage.setItem("destino","merida")} >
                <img src="https://firebasestorage.googleapis.com/v0/b/tuposada-com.appspot.com/o/Caracas.jpg?alt=media&token=b25afe91-076a-4ce8-ae8b-735956512c9c"></img>
                <h1 onClick={trans}>Merida</h1>       
            </li>

            <li onClick={()=>localStorage.setItem("destino","valencia")} >
                <img src="https://firebasestorage.googleapis.com/v0/b/tuposada-com.appspot.com/o/valencia-venezuela-1-1024x579.jpg?alt=media&token=8c47b86c-afca-4a23-bc89-fe025068f2b6"></img>
                <h1 onClick={trans}>Valencia</h1>       
            </li>

            <li onClick={()=>localStorage.setItem("destino","margarita")} >
                <img src="https://firebasestorage.googleapis.com/v0/b/tuposada-com.appspot.com/o/descarga%20(1).jpg?alt=media&token=8dd5a659-7f3e-4e19-9490-33985ef04b94"></img>
                <h1 onClick={trans}>Margarita</h1>       
            </li>
            
        </ul>
    )
}

export default List