
import './stylesRL.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react/cjs/react.development";
import { useState,useContext} from "react";
import {db,auth,googleProvider,facebookProvider}  from "../../utils/firebase-config";
import { UserContext } from "../../context/UserContext";
import firebase from 'firebase';


function Login(){
    const { user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]); //Contenedor 
    const{register,handleSubmit, formState: { errors }}=useForm();
    //Conexion con la fireBase para ver la base de datos.
    const fetchUsuarios= async ()=>{ // Enganio para ejecutar codigo asincrono dentro useEffect
        try{
            const arr = [];
            const usuarioRef =db.collection("users"); //referencia a la seccion Usuarios de la base de datos
            const response= await usuarioRef.get();

            response.docs.forEach((element)=> {
                //console.log({ data: element.data() });
                arr.push({ ...element.data() });

            });

            setUsuarios(arr); //Actualizo Usuarios
            

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
          bol=true;
          navigate("/");
          setUser(element);
          
        }
      }
    });

    if(!bol){
        alert("Usted no se encuentra registrado en el sistema.Registrese.");
        navigate("/reg");
    }
  }

  //Registrarse con Google
  const handleLoginWithGoogle = async () => {
    
    const response=await auth.signInWithPopup(googleProvider);
    var bol=false;
    usuarios.forEach((element)=>{
        if(response.user.email==element.email){
            console.log(response.user);
            bol=true;
            navigate("/");
            alert("Inicio de sesión éxitoso.");    
        }
        });
    if(!bol){
        console.log(response.user);
        alert("Usted no se encuentra registrado en el sistema.Registrese.");
        navigate("/reg");
    };
   }

   //Iniciar sesion con Facebook
   const handleLoginWithFacebook = async () => {
      
    var bol=false;
    try{
        const response=await auth.signInWithPopup(facebookProvider);
    }catch(error){
        
    }
    //Verificacion de que los datos se encuentren en el sistema antes de proceder a iniciar.
    usuarios.forEach((element)=>{
        if(response.user.email==element.email){
            bol=true; 
            navigate("/");
            alert("Inicio de sesión éxitoso.");
            console.log(response.user);
            
        } 
    });
    if(!bol){
        alert("Usted no se encuentra registrado en el sistema.Registrese.");
        navigate("/reg");
    }
   };

   useEffect(()=>{  // Me permite programa para que lo que este entre {} se ejecute apenas iniciar la vista
        
    fetchUsuarios();
    
   },[])

   return(
        <div className='login'>
            
            <div className= 'content1'> 
                <h1 className='header'>Inicio de sesión</h1>
                
                <div className='image'>
                    <img  className='imaL'src='https://dbdzm869oupei.cloudfront.net/img/sticker/preview/3689.png'/>
                </div>
                
                <form className='form'onSubmit={handleSubmit((data)=>{regisNormal(data)})}>

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


                </form>

            </div>
            {/*  Boton de login de Google*/}
            <button className='provedor1' type="button" onClick={handleLoginWithGoogle}>
                Login with google
            </button>
            {/*  Boton de login de Facebook*/}
            <button className='provedor1' type="button" onClick={handleLoginWithFacebook}>
                Login con Facebook
            </button>

        </div>


    )
}

export default Login