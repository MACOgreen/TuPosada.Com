import { useState } from 'react'
import { useForm } from "react-hook-form";

import './stylesR.css';
function Reg(){
    const{register,handleSubmit, formState: { errors }}=useForm();


    return(
        <div className='reg'>
            <div className= 'content'> 
                <form className='form' onSubmit={handleSubmit((data)=>{console.log(data)})}>

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
                        <input type="text" {... register("username",{required:"Un correo electronico es necesario"})} placeholder="Ingrese su correo..." />
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