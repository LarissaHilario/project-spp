import '../../Login/Components/Form.css'

import * as React from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

export const Form = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                    <div className="inputs2">
                        <Input
                            placeholder='CONTRASEÑA'
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility />:<VisibilityOff />  }
                                    </IconButton>
                                </InputAdornment>
                            } 
                            sx={{
                                background: '#D6C6FC',
                                borderRadius: '10px',
                                width: '350px',
                                height: '60px',
                                fontFamily: 'Unica one',
                            }}
                        />
                       
                    </div>
                    <div className="olvi">
                        <h4>¿OLVIDASTE TU CONTRASEÑA?</h4>
                    </div>
                    <div className="btnIniciar">
                        <button>Iniciar Sesión</button>
                    </div>
                </div>
                <div className="container">
                    <img src="src/assets/img/doctor.png" />
                </div>
            </div>
        </>
    )
}