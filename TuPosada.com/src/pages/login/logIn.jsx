
import './stylesRL.css';
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {useEffect} from "react/cjs/react.development";
import { useState} from "react";
import {db,auth,googleProvider,facebookProvider}  from "../../utils/firebase-config";

function Login(){
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
      
      if(data.email==element.email){

        if(data.password==element.password){
          
          alert("Inicio de sesión éxitoso.");
          bol=true;
          navigate("/");
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
                    <img  className='imaL'src='https://dbdzm869oupei.cloudfront.net/img/sticker/preview/3689.png' alt='Logo Inicio de Sesión'/>
                </div>
                
                <form className='form'onSubmit={handleSubmit((data)=>{regisNormal(data)})}>
                    <div className='login-box'>
                    <div className="form-group">
                        <label htmlFor="username">Correo electronico</label>
                        <input type="text" {... register("username",{required:"Un correo electronico es necesario"})} placeholder="Ingrese su correo..." />
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
                
                <div className="google-btn" type='button' onClick={handleLoginWithGoogle}>
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><b>Login with Google</b></p>
                </div>
                
                <div className="google-btn" type='button' onClick={handleLoginWithFacebook}>
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"/>
                </div>
                <p className="btn-text"><b>Login with Facebook</b></p>
                </div>
            </div>

        </div>


    )
}

export default Login