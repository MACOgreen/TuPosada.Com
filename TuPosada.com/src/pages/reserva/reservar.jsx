import React from 'react'
import "./reservarStyles.css"
import posada from "../perfilPosada/perfil"
import {useEffect} from "react/cjs/react.development";
import {PoContext} from '../../context/posadaContext';
import { useState,useContext} from "react";
import { useForm } from "react-hook-form";


export default function Reservar() {
  const {posada, setPosada} = useContext(PoContext); //Contenedor 
  const{register,handleSubmit, formState: { errors }}=useForm();

  
  const disponibilidad=(data)=>{
        var mes1=1;
        var dia1=1;
        var mes2=1;
        var dia2=1;
        var disp ={};
        if(data.habitacion.toLowerCase()=="a"){

            mes1=parseInt(data.fLlega.split("-")[1]);
            dia1=parseInt(data.fLlega.split("-")[2]);
             
            mes2=parseInt(data.fSalida.split("-")[1]);
            dia2=parseInt(data.fSalida.split("-")[2]);
            
           
            disp=JSON.parse(posada.dispA);
            if(disp[mes1][dia1-1]==dia1 && disp[mes2][dia2-1]==dia2){
                alert("Disponibilidad confirmada. Puede realizar la reserva.")
                var ini=0;
                var i;
                //Eliminar dias
                 for (i in disp[mes1]){
                     if(mes1==mes2){
                        console.log("hola");
                        if(i>=dia1 &&i<=dia2){
                            disp[mes1][ini-1]=0;
                            
                        }else if(i>dia2){
                            break;
                        }
                    }
                    else if(mes1<mes2){
                        if(i>=dia1){
                            disp[mes1][ini-1]=0;
                        }
                        if(i<=dia2){
                            disp[mes2][ini-1]=0;
                        }

                    }
                    ini+=1;
                 }
                 console.log(disp[mes1]);
                 console.log(disp[mes2]);
                //
            }

        }else if(data.habitacion.toLowerCase()=="b"){

            mes1=parseInt(data.fLlega.split("-")[1]);
            dia1=parseInt(data.fLlega.split("-")[2]);

            mes2=parseInt(data.fSalida.split("-")[1]);
            dia2=parseInt(data.fSalida.split("-")[2]);
            
            
            disp=JSON.parse(posada.dispB);
            console.log(disp);

            if(disp[mes1][dia1-1]==dia1 && disp[mes2][dia2-1]==dia2){
                alert("Disponibilidad confirmada. Puede realizar la reserva.")
                var ini=0;
                var i;
                //Eliminar dias
                if(mes1==mes2){
                    for (i in disp[mes1]){
                        if(i>=dia1 &&i<=dia2){
                            disp[mes1][ini]=0;
                            
                        }else if(i>dia2){
                            break;
                        }
                        ini+=1;
                    }
                } else if( mes1<mes2){
                    for (i in disp[mes1]){
                        if(i>=dia1){
                            disp[mes1][ini]=0;
                        }
                        ini+=1;
                    }
                    ini=0;
                    for (i in disp[mes2]){
                        if(i<=dia2){
                            disp[mes2][ini]=0;
                        }
                        ini+=1;
                    }
                }
                 
                 console.log(disp[mes1]);
                 console.log(disp[mes2]);
                //
            }
            
        }else{
            alert("Habitacion incorrecta introducida. Por favor introduzca una habitacion valida.")
        }
  }
  useEffect(()=>{  // Me permite programa para que lo que este entre {} se ejecute apenas iniciar la vista
     //console.log(posada);
     //console.log(JSON.parse(posada.dispA));
   },[])
  return (
    <div className="Cuadro">
        <h1>Reserva </h1>
        <form className='formX' onSubmit={handleSubmit((data)=>{disponibilidad(data)})}>  

            <div className="form-groupX">
                    <label htmlFor="habitacion">Indique la habitacion de su interes </label>
                    <input type="text" {... register ("habitacion",{required:"Una habitacion es necesaria"})} placeholder="Ingrese una habitacion..." />
                    <p className='mensajeL'>{errors.username?.message}</p>
            </div>

            <div className="form-groupX">
                    <label htmlFor="fLlega">Fecha tentativa de llegada </label>
                    <input type="date" {... register ("fLlega",{required:"Una fecha es necesaria"})} placeholder="Ingrese su fecha de llegada..." />
                    <p className='mensajeL'>{errors.username?.message}</p>
            </div>

            <div className="form-groupX">
                    <label htmlFor="fSalida">Fecha tentativa de salida </label>
                    <input type="date" {... register ("fSalida",{required:"Una fecha es necesaria"})} placeholder="Ingrese su fecha de llegada..." />
                    <p className='mensajeL'>{errors.username?.message}</p>
            </div>
            <div className='footerX'>
                        <button type='submit' className='btnX'>
                            Realizar Reserva
                        </button> 
            </div>
         </form>
    </div>
  )
}
