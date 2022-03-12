import { useState } from 'react'
import { useForm } from "react-hook-form";
import './stylesR.css';
import {db,auth}  from "../../utils/firebase-config";

import {useEffect} from "react/cjs/react.development";

import { v4 as uuidv4 } from 'uuid';  // Import para generar ID para los usuarios de formulario.
import { useNavigate } from "react-router-dom";

function Reg(){
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
        console.log("supuesto");
        
        //Validacion de que los nuevos datos no esten en el sistema.
        var bol=true;
        usuarios.forEach((element)=>{
            if(data.email==element.email){
                alert("Este usuario ya se encuentra registrado en el sistema. Inicie sesion.");
                bol=false;
                navigate("/");
            }
        });
        if(bol){
            return  db
            .collection("users")
            .doc(uuidv4()) //Generar ID para usuario.
            .set({ ...data });
        }
    }

    useEffect(()=>{  // Me permite programa para que lo que este entre {} se ejecute apenas iniciar la vista
        console.log("Se ejecuta el useEffect");   
        fetchUsuarios();
        console.log(usuarios);
        
    },[])

    return(
        <div className='reg'>
            <div className= 'content'> 
                <form className='form' onSubmit={handleSubmit((data)=>{ regisNormal(data);})}>

                    <h1 className='headerReg'>Ingrese su nombre  y teléfono</h1>

                    <div className="form-group">
                        <label htmlFor="username">Nombre</label>
                        <input type="text" {... register("name",{required:"Es necesario que ingrese un nombre."})} placeholder="Ingrese su nombre..." />
                        <p className='mensajeR'>{errors.name?.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Nro. de teléfono</label>
                        <input type="text" {... register("tlf",{required:"Es necesario que ingrese su número de teléfono."})} placeholder="Ingrese su correo..." />
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
                        <input type="password" {... register ("password",{required:"Una clave es necesaria"})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeR'>{errors.password?.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password2">Confirme la cotraseña</label>
                        <input type="password2" {... register ('password2',{required:"La confirmacion de la clave es necesaria."})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeR'> {errors.password2?.message}</p>
                    </div>

                    <div className='footerReg'>
                        <button type='submit' className='btnReg'>
                            Registrarse
                        </button> 
                    </div> 

                </form>

            </div>

        </div>
    )

}
export default Reg