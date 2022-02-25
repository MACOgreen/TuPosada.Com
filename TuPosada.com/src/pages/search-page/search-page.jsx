import { React, useState } from "react";
import Data from "./mock_data.json";
import "./stylesSearch.css";
import List from "./list";

function Search() {

    const [query, setQuery] = useState("");

  return (
    <div className="search-page">
      <h1>tuposada search</h1>
      <div className="search">
        <input placeholder="Busque su destino, posada o alojamiento" onChange={event => setQuery(event.target.value)}/>
      
       

      </div>

      
      <List query= {query}/>
     
   
    </div>
  );
}

export default Search;