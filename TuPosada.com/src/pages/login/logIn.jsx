import { useState } from 'react'
import './stylesRL.css';
import { useForm } from "react-hook-form";

function Login(){
    const{register,handleSubmit, formState: { errors }}=useForm();

    return(
        <div className='login'>
            <h1 className='header'>Inicio de sesión</h1>
            <div className= 'content'> 

                
                <div className='image'>
                    <img  className='imaL'src='https://dbdzm869oupei.cloudfront.net/img/sticker/preview/3689.png'/>
                </div>
                
                <form className='form'onSubmit={handleSubmit((data)=>{console.log(data)})}>

                    <div className="form-group">
                        <label htmlFor="username">Correo electronico</label>
                        <input type="text" {... register("username",{required:"Un correo electronico es necesario"})} placeholder="Ingrese su correo..." />
                        <p className='mensajeL'>{errors.username?.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" {... register ("password",{required:"Una clave es necesaria"})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeL'>{errors.password?.message}</p>
                    </div>

                    <div className='footer'>
                        <button type='submit' className='btn'>
                            Iniciar sesión
                        </button> 
                    </div>


                </form>

            </div>

            
    


        </div>


    )
}

export default Login