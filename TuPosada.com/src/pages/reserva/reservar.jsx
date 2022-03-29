import React from 'react'
import "./reservarStyles.css"
import posada from "../perfilPosada/perfil"
import {useEffect} from "react/cjs/react.development";
import {PoContext} from '../../context/posadaContext';
import { useState,useContext} from "react";
import { useForm } from "react-hook-form";
import firebase from 'firebase';
import { app } from '../../utils/firebase-config';
import {db,auth}  from "../../utils/firebase-config";
import PayPal from './PayPal';
import { Navigate } from 'react-router-dom';
export default function Reservar() {
  const {posada, setPosada} = useContext(PoContext); //Contenedor 
  const{register,handleSubmit, formState: { errors }}=useForm();

  const actualizar=(disp,string)=>{
     var dict={};
     disp=JSON.stringify(disp);
      dict=posada;
      if(string=='a'){
          dict.dispA=disp;
      }else{
          dict.dispB=disp;
      }
      console.log(dict);
      setPosada(JSON.stringify(dict));
      
      console.log(posada);
      
      db.collection("posadas").doc(posada.undefined).update(posada);
      alert("Fechas disponibles para reserva.");
      //Aqui se redirige a la vista de pago.
      
      //
  }
  const disponibilidad=(data)=>{
        var mes1=1;
        var dia1=1;
        var mes2=1;
        var dia2=1;
        var disp ={};
        console.log("entra disponibilidad.")
        if(data.habitacion.toLowerCase()=="a"){

            mes1=parseInt(data.fLlega.split("-")[1]);
            dia1=parseInt(data.fLlega.split("-")[2]);
             
            mes2=parseInt(data.fSalida.split("-")[1]);
            dia2=parseInt(data.fSalida.split("-")[2]);
            
           
            disp=JSON.parse(posada.dispA);
            console.log(dia1);
            console.log(dia2);
            console.log(disp[mes1][dia1-1]);
            console.log(disp[mes2][dia2-1]);
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
                 actualizar(disp,"a");
                //
            }else{
                
                if(disp[mes1][dia1-1]==0){
                    alert("El dia "+ dia1 +" se encuentra reservado." );
                }
                if(disp[mes2][dia2-1]==0){
                    alert("El dia "+ dia2+" se encuentra reservado." );
                }
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
                 
                actualizar(disp,"b");
                //
            }else{
                
                if(disp[mes1][dia1-1]==0){
                    alert("El dia "+ toString(dia1)+" se encuentra reservado." );
                }
                if(disp[mes2][dia2-1]==0){
                    alert("El dia "+ toString(dia2)+" se encuentra reservado." );
                }
            }
            
        }else{
            alert("Habitacion incorrecta introducida. Por favor introduzca una habitacion valida.")
        }
  }


  const [checkout, setCheckOut] = useState(false);

  
  useEffect(()=>{  // Me permite programa para que lo que este entre {} se ejecute apenas iniciar la vista
    console.log(posada);
   },[])
  return (
    <div className="Cuadro">
        <h1>Reserva </h1>
        <form className='formX' onSubmit={handleSubmit((data)=>{disponibilidad(data),setCheckOut(true) })}>  

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

                {checkout ? (
                    <PayPal/>
                ) : (
                        <button type='submit' className='btnX' >
                            Realizar Reserva
                        </button> 
                )}
            </div>
         </form>
    </div>
  );
}
