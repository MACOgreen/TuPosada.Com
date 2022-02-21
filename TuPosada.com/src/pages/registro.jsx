import { useState } from 'react'
import './stylesR.css';
function Reg(){



    return(
        <div className='reg'>
            <h1 className='headerReg'>Ingrese su correo electronico</h1>
            <div className= 'content'> 

                {/*
                <div className='image'>
                    <img source= 'tuposadalogo.com'/>
                </div>
                */}
                <div className='form'>

                    <div className="form-group">
                        <label htmlFor="username">Correo electronico</label>
                        <input type="text" name="username" placeholder="Ingrese su correo..." />
                    </div>

                    <h1 className='headerReg'>Crea una clave</h1>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" placeholder="Ingrese su contraseña..." />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Confirme la cotraseña</label>
                        <input type="password" name="password" placeholder="Ingrese su contraseña..." />
                    </div>

                </div>

            </div>

            <div className='footerReg'>
                <button type='button' className='btnReg'>
                    Registrarse
                </button> 

            </div>   



        </div>
    )

}
export default Reg