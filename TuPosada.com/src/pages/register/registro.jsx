import React from 'react';
import { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import './stylesR.css';

import {db,auth,googleProvider,facebookProvider,GitHubProvider}  from "../../utils/firebase-config";


import {useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';  // Import para generar ID para los usuarios de formulario.
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import firebase from 'firebase';
import logo from "./tuposadasinfondo.png";

function Reg(){
    const { user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const{register,handleSubmit, formState: { errors }}=useForm();

    const [usuarios, setUsuarios] =  useState([]); //Contenedor (No es relevante)
    const [admins,setAdmins]=useState([]);

    //Conexion con la fireBase
    const fetchUsuarios= async ()=>{ // Enganio para ejecutar codigo asincrono dentro useEffect
        try{
            const arr = []; //Arreglo para los usuarios
            const arr2=[]; // Arreglo para los adminitradores

            const usuarioRef =db.collection("users"); //referencia a la seccion Usuarios de la base de datos
            const adminRef= db.collection("admins");

            const response= await usuarioRef.get();
            const response2= await adminRef.get();

            response.docs.forEach((element)=> {
                //console.log({ data: element.data() });
                arr.push({ ...element.data() });
            });
            response2.docs.forEach((element)=> {
                //console.log({ data: element.data() });
                arr2.push({ ...element.data() });
            });

            setUsuarios(arr); //Actualizo Usuarios(No es relevante)
            setAdmins(arr2);  //Actualizo Admins

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
            //Guardo el usuario en la base de datos local. 
            localStorage.setItem("usuario",JSON.stringify(data));
            //Agrego el nuevo usuario a la base de datos remota. 
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
        data["img"]= "https://firebasestorage.googleapis.com/v0/b/tuposada-com.appspot.com/o/ImagenPredeterminada.webp?alt=media&token=06f64ecd-46b7-4508-9acc-10a7d240e0b2";
  };

    useEffect(()=>{  // Me permite programa para que lo que este entre {} se ejecute apenas iniciar la vista
        console.log("Se ejecuta el useEffect");   
        fetchUsuarios();
        //console.log(usuarios);
        
    },[])

    return(
        
        <div className='reg'>

            <img className='imgReg' src={logo}/>
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

                    <h2 className='headerReg'>Ingrese su correo electronico</h2>
                    <div className="form-group">
                        <label htmlFor="username">Correo electronico</label>
                        <input type="text" {... register("email",{required:"Un correo electronico es necesario"})} placeholder="Ingrese su correo..." />
                        <p className='mensajeR'>{errors.username?.message}</p>
                    </div>

                    <h2 className='headerReg'>Ingrese una contraseña</h2>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="text" {... register ("password",{required:"Una clave es necesaria"})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeR'>{errors.password?.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password2">Confirme la cotraseña</label>
                        <input type="text" {... register ('password2',{required:"La confirmacion de la clave es necesaria."})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeR'> {errors.password2?.message}</p>
                    </div>

                    <div className='footerReg'>
                        <button type='submit' className='btnReg'>
                            Registrarse
                        </button> 
                    </div> 

                </form>
                {/*  Boton de login de Google*/}
                <div className="google-btn" type='button' onClick={handleLoginWithGoogle}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p className="btn-text"><b>Login with Google</b></p>
                </div>
                {/*  Boton de login de Facebook*/}
                <div className="google-btn" type='button' onClick={handleLoginWithFacebook}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"/>
                    </div>
                    <p className="btn-text"><b>Login with Facebook</b></p>
                </div>

                {/*  Boton de login de GitHub*/}
                <div className='google-btn' type="button" onClick={handleLoginWithGit}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                    </div>
                    <p className="btn-text"><b>Registrarse con Github</b></p>
                </div>

            </div>
        </div>
    )

}
export default Reg