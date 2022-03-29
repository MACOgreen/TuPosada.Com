import { React,useEffect} from "react";
import {app} from "../../utils/firebase-config";
import ListPosadas from "./ListPosadas";
import "./ciudadStyle.css";
import {PoContext} from '../../context/posadaContext';
import { useState,useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import {db}  from "../../utils/firebase-config";


import "./stylePage.css";
export default function Ciudad(){
    const destino = localStorage.getItem("destino");
    const {posada, setPosada} = useContext(PoContext); //Contenedor 
    const [arr, setAr]= useState([]);
    const navigate = useNavigate();
    
    
    const traerPosada= async ()=>{
        var a=[];
        const posRef =db.collection("posadas");
         
        const response= await posRef.get();
        
        response.docs.forEach((element)=>{
                
                if(element.data().ubicacion==destino){
                    console.log(element.data().nombre);
                    a.push(element.data().nombre);
                }

        }
            
        )
        setAr(a);
        

    }
    const irse =(nombre)=>{
            setPosada(nombre);
            navigate("/perPosada");

    }

    useEffect(()=>{  
        console.log(destino);
        traerPosada();
    },[])

    return(
        <div>
            <h1 className="enca">{destino.toUpperCase()}</h1>

            <h1 className="subT">Posadas disponibles:</h1>

            <div className="cuadro">
                <h1 className="po" onClick={()=> irse(arr[0])}> {arr[0]} </h1>
            </div>
            <div className="cuadro">
                <h1 className="po" onClick={()=> irse(arr[1])}> {arr[1]} </h1>
            </div>
            
            

                
        </div>
    );
}