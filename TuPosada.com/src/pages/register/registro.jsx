import React from 'react';
import { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import './stylesR.css';
import {db,auth,googleProvider,facebookProvider,GitHubProvider}  from "../../utils/firebase-config";

import {useEffect} from "react/cjs/react.development";

import { v4 as uuidv4 } from 'uuid';  // Import para generar ID para los usuarios de formulario.
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import firebase from 'firebase';

function Reg(){
    const { user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const{register,handleSubmit, formState: { errors }}=useForm();

    const [usuarios, setUsuarios] =  useState([]); //Contenedor (No es relevante)

    //Conexion con la fireBase
    const fetchUsuarios= async ()=>{ // Enganio para ejecutar codigo asincrono dentro useEffect
        try{
            const arr = [];
            const usuarioRef =db.collection("users"); //referencia a la seccion Usuarios de la base de datos
            const response= await usuarioRef.get();

            response.docs.forEach((element)=> {
                //console.log({ data: element.data() });
                arr.push({ ...element.data() });
            });
            
            setUsuarios(arr); //Actualizo Usuarios(No es relevante)
            

        }catch(error){
            console.log({ error });
        }

    };
    

    //Funcion para registro normal
    const regisNormal= async (data)=> {
        console.log("Se realizo un registro normal.");
        
        //Validacion de que los nuevos datos no esten en el sistema.
        var bol=true;
        usuarios.forEach((element)=>{
            if(data.email==element.email){
                
                alert("Este usuario ya se encuentra registrado en el sistema.Por favor inicie sesión.");
                bol=false;
                navigate("/login");
            }
            });
        if(bol){
                   
            setUser(data);
            alert("Registro exitoso.");
            navigate("/");
            return  db
            .collection("users")
            .doc(uuidv4()) //Generar ID para usuario.
            .set({ ...data });
        }
        
    }

    //Registrarse con Google
    const handleLoginWithGoogle = async () => {
        const response=await auth.signInWithPopup(googleProvider).catch(function(error){
            alert("Usted ya se encuentra registrado en la web. Por favor inicie sesion");
            navigate("/login");
        });   
  };

  //Registrarse con Facebook
  const handleLoginWithFacebook = async () => {
        const response=await auth.signInWithPopup(facebookProvider).catch(function(error){
            alert("Usted ya se encuentra registrado en la web. Por favor inicie sesion");
            navigate("/login");
        });
    };
  //Registro con GitHub
  const handleLoginWithGit= async()=>{
      const response=await auth.signInWithPopup(GitHubProvider).catch(function(error){
        alert("Usted ya se encuentra registrado en la web. Por favor inicie sesion");
        navigate("/login");

       });
  };

  // Completacion de informacion adicional del usuario

  const InfoAdicional=(data)=>{
        data["Genero"]="Sin espeficar";
        data["Fecha de nacimineto"]="Sin espeficar";
        data["País de origen"]="Sin espeficar";
  };

    useEffect(()=>{  // Me permite programa para que lo que este entre {} se ejecute apenas iniciar la vista
        console.log("Se ejecuta el useEffect");   
        fetchUsuarios();
        //console.log(usuarios);
        
    },[])

    return(
        <div className='reg'>
            <div className= 'content'> 
                <form className='form' onSubmit={handleSubmit((data)=>{ InfoAdicional(data) ; {/*console.log(data)*/}; regisNormal(data);})}>

                    <h1 className='headerReg'>Ingrese su nombre  y teléfono</h1>

                    <div className="form-group">
                        <label htmlFor="username">Nombre</label>
                        <input type="text" {... register("name",{required:"Es necesario que ingrese un nombre."})} placeholder="Ingrese su nombre..." />
                        <p className='mensajeR'>{errors.name?.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Nro. de teléfono</label>
                        <input type="number" {... register("tlf",{required:"Es necesario que ingrese su número de teléfono."})} placeholder="Ingrese su correo..." />
                        <p className='mensajeR'>{errors.tlf?.message}</p>
                    </div>

                    <h1 className='headerReg'>Ingrese su correo electronico</h1>
                    <div className="form-group">
                        <label htmlFor="username">Correo electronico</label>
                        <input type="text" {... register("email",{required:"Un correo electronico es necesario"})} placeholder="Ingrese su correo..." />
                        <p className='mensajeR'>{errors.username?.message}</p>
                    </div>

                    <h1 className='headerReg'>Ingrese una contraseña</h1>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="text" {... register ("password",{required:"Una clave es necesaria"})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeR'>{errors.password?.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password2">Confirme la cotraseña</label>
                        <input type="text" {... register ('password',{required:"La confirmacion de la clave es necesaria."})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeR'> {errors.password2?.message}</p>
                    </div>

                    <div className='footerReg'>
                        <button type='submit' className='btnReg'>
                            Registrarse
                        </button> 
                    </div> 

                </form>

            </div>
            {/*  Boton de login de Google*/}
            <button className='proveedor' type="button" onClick={handleLoginWithGoogle}>
                Registrarse con Google
            </button>
            {/*  Boton de login de Facebook*/}
            <button className='proveedor' type="button" onClick={handleLoginWithFacebook}>
                Registrarse con Facebook
            </button>

             {/*  Boton de login de GitHub*/}
             <button className='proveedor' type="button" onClick={handleLoginWithGit}>
                Registrarse con Github
            </button>

        </div>
    )

}
export default Reg