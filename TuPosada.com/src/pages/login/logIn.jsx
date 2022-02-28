import { useState } from 'react'
import './stylesRL.css';


function Login(){

    return(
        <div className='login'>
            <h1 className='header'>Inicio de sesión</h1>
            <div className= 'content'> 

                
                <div className='image'>
                    <img  className='imaL'src='https://dbdzm869oupei.cloudfront.net/img/sticker/preview/3689.png'/>
                </div>
                
                <div className='form'>

                    <div className="form-group">
                        <label htmlFor="username">Correo electronico</label>
                        <input type="text" name="username" placeholder="Ingrese su correo..." />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" placeholder="Ingrese su contraseña..." />
                    </div>

                </div>

            </div>

            <div className='footer'>
                <button type='button' className='btn'>
                    Iniciar sesión
                </button> 

            </div>
    


        </div>


    )
}

export default Login