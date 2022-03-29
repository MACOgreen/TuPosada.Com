import { React, useState } from "react";
import {app} from "../../utils/firebase-config";
import ListPosadas from "./ListPosadas";
import "./ciudadStyle.css";

export default function Ciudad(props){
    const [query, setQuery] = useState("");
    console.log(props.ciudad)

    return(
        
       
        <div>
            <div id="descripcion">
                <img src={props.imageurl}></img>
                <h1>{props.ciudad}</h1>
            </div>
            <div className="search">
                <input id="search-bar" placeholder="busca tu posada" onChange={event => setQuery(event.target.value)}/>
            
            </div>
            <div id="resultados-de-busqueda">
                <ListPosadas query= {query} ciudad= {props.ciudad}/>
            </div>
                
        </div>
    );
}