import { React, useState } from "react";
import Data from "./mock_data.json";
import "./stylesSearch.css";
import List from "./list";
import {app} from "../../utils/firebase-config";
function Search() {

  const [query, setQuery] = useState("");

  const onFileChange = (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    fileRef.put(file)
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
  
      <div className="search-page">
      
      <div className="search">
        <input id="search-bar" placeholder="Busque su destino, posada o alojamiento" onChange={event => setQuery(event.target.value)}/>
      
          

      </div>

      <div id="back-image">
        
      </div>
      <div id="resultados-de-busqueda">
        <List query= {query}/>
      </div>
      
    </div>
  
    

    
  );
}

export default Search;