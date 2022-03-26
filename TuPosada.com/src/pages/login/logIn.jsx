import React from 'react';
import './stylesRL.css';
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {useEffect} from "react/cjs/react.development";
import { useState,useContext} from "react";
import {db,auth,googleProvider,facebookProvider,GitHubProvider}  from "../../utils/firebase-config";
import { UserContext } from "../../context/UserContext";
import firebase from 'firebase';




function Login(){
    const { user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]); //Contenedor 
    const [admins,setAdmins]=useState([]);

    const{register,handleSubmit, formState: { errors }}=useForm();
    //Conexion con la fireBase para ver la base de datos.
    const fetchUsuarios= async ()=>{ // Enganio para ejecutar codigo asincrono dentro useEffect
        try{
            const arr = [];
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

            setUsuarios(arr); //Actualizo Usuarios
            setAdmins(arr2);  //Actualizo Admins

        }catch(error){
            console.log({ error });
        }

    };


  //Funcion para inicio de sesion normal.
  const regisNormal= async (data)=> {

    //Validacion de que los  datos esten en el sistema.
    var bol=false; //Variable que confirma si un usuario se encuentra registrado o no. 
    usuarios.forEach((element)=>{
      console.log("Entro");
      if(data.email==element.email){
        
        if(data.password==element.password){
          alert("Inicio de sesión éxitoso.");
          //Comprobar si es administrador.
          admins.forEach((ele)=>{
              if (ele.user==data.email){
                  element["administrador"]="si";
                  alert("Usted es un administrador.");
              }
          })
          bol=true;
          navigate("/");
          setUser(element);
           //Guardo el usuario en la base de datos local.
          localStorage.setItem("usuario",JSON.stringify(element));
          
        }
      }
    });

    if(!bol){
        alert("Usted no se encuentra registrado en el sistema.Registrese.");
        navigate("/reg");
    }
  }

//Verificacion de que los datos se encuentren en el sistema antes de proceder a iniciar.
  const verificador=(response)=>{
    var bol=false;
    usuarios.forEach((element)=>{
        if(response.user.email==element.email){
            //console.log("por aqui");
            //console.log(response.user);
            bol=true;
            
            alert("Inicio de sesión éxitoso."); 
            navigate("/");
            //Comprobar si es administrador. 
            admins.forEach((ele)=>{
                if (ele.user==response.user.email){
                    element["administrador"]="si";
                    alert("Usted es un administrador.");
                    setUser(element);
                }
            })
            
        }
        });
    if(!bol){
        console.log(response.user);
        alert("Usted no se encuentra registrado en el sistema.Registrese.");
        navigate("/reg");
    };
  }

  //Registrarse con Google
  const handleLoginWithGoogle = async () => {
    var bol=false;
    try{
    const response=await auth.signInWithPopup(googleProvider);
    verificador(response);
    }catch(error){
        alert("Usted se encuentra registrado pero con otra credencial de proveedor. Iniciando sesion con esa credencial");
            var provedor = auth.fetchSignInMethodsForEmail(error.email).then( async function(methods){
                if(methods[0]= "facebook.com"){
                     const response= await auth.signInWithPopup(facebookProvider);
                     verificador(response);
                }
                else{
                    const response= await auth.signInWithPopup(GitHubProvider);
                    verificador(response);
                }
            })
    }
   }

   //Iniciar sesion con Facebook
   const handleLoginWithFacebook = async () => {
      
    var bol=false;
    try{
        const response=await auth.signInWithPopup(facebookProvider);
        verificador(response);
    }catch(error){
        alert("Usted se encuentra registrado pero con otra credencial de proveedor. Iniciando sesion con esa credencial");
            var provedor = auth.fetchSignInMethodsForEmail(error.email).then( async function(methods){
                if(methods[0]="google.com"){
                    const response= await auth.signInWithPopup(googleProvider);
                    verificador(response);
                }
                else{
                    const response=await auth.signInWithPopup(GitHubProvider);
                    verificador(response);
                }
            })
    }
    
   };
   
   //Inicio de sesion con GitHub
  const handleLoginWithGit= async()=>{
        const response=await auth.signInWithPopup(GitHubProvider).then(verificador(result)).catch(function(error){
            alert("Usted se encuentra registrado pero con otra credencial de proveedor. Iniciando sesion con esa credencial");
            var provedor = auth.fetchSignInMethodsForEmail(error.email).then( async function(methods) {
                if(methods[0]="facebook.com"){
                    console.log(methods)
                    try{
                        const   response= await auth.signInWithPopup(facebookProvider);
                        verificador(response);

                    }catch(error){
                        const response= await auth.signInWithPopup(googleProvider);
                        verificador(response);
                    }
                }
                else{
                    const response= await auth.signInWithPopup(googleProvider);
                    verificador(response);
                }
            })
            
        });
   }  

   useEffect(()=>{  // Me permite programa para que lo que este entre {} se ejecute apenas iniciar la vista
        
    fetchUsuarios();
    
   },[])

   return(
        <div className='login'>
            
            <div className= 'content1'> 
                <h1 className='header'>Inicio de sesión</h1>
                
                <div className='image'>
                    <img  className='imaL'src='https://dbdzm869oupei.cloudfront.net/img/sticker/preview/3689.png' alt='Logo Inicio de Sesión'/>
                </div>
                
                <form className='form'onSubmit={handleSubmit((data)=>{regisNormal(data)})}>
                    <div className='login-box'>
                    <div className="form-group">
                        <label htmlFor="username">Correo electronico</label>
                        <input type="text" {... register("email",{required:"Un correo electronico es necesario"})} placeholder="Ingrese su correo..." />
                        <p className='mensajeL'>{errors.username?.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="text" {... register ("password",{required:"Una clave es necesaria"})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeL'>{errors.password?.message}</p>
                    </div>

                    <div className='footer'>
                        <button type='submit' className='btn'>
                            Iniciar sesión
                        </button> 
                    </div>
                    </div>


                </form>
                {/*  Boton de login de Google*/}
                <div className="google-btn" type='button' onClick={handleLoginWithGoogle}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p className="btn-text"><b>Login con Google</b></p>
                </div>
                {/*  Boton de login de Facebook*/}
                <div className="google-btn" type='button' onClick={handleLoginWithFacebook}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"/>
                    </div>
                    <p className="btn-text"><b>Login con Facebook</b></p>
                </div>
                {/*  Boton de login de GitHub*/}
                <div className="google-btn" type='button' onClick={handleLoginWithGit}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                    </div>
                    <p className="btn-text"><b>Login con GitHub</b></p>
                </div>

            </div>
            

        </div>


    )
}

export default Login