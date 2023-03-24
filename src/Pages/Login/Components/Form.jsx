import '../../Login/Components/Form.css'

/* import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton'; */

export const Form = () => {

    return (
        <>
            <div className="todo">
                <div className="formulario">
                    <div className="contenedor">
                        <div className="iconPagina">
                            <img src='src/assets/img/IconSsp.png' />
                        </div>
                        <div className="titulo">
                            <h1>SSP</h1>
                        </div>
                    </div>
                    <div className="subtit">
                        <h2>Inicia sesión con tu cuenta</h2>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder='Correo Electrónico' />
                    </div>
                    <div className="inputs">
                        <input type="password" placeholder='contraseña' />
                    </div>
                    <div className="olvi">
                        <h4>¿OLVIDASTE TU CONTRASEÑA?</h4>
                    </div>
                    <div className="btnIniciar">
                        <button>Iniciar Sesións</button>
                    </div>
                </div>
                <div className="container">
                    <img src="src/assets/img/doctor.png" />
                </div>
            </div>
        </>
    )
}