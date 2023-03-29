import { Button, Grid, Modal, Typography } from "@mui/material"
import PersonalData from "./Personal/PersonalData"

import Styles from './Form.module.css'
import Prescription from "./Prescription/Prescription"

const Form=()=>{
    return(

        <div className={Styles.Container}>
            <div className={Styles.headerContainer}>
            <h1 className={Styles.title}>Formulario</h1>
            </div>
            <br>
            </br>
            <div className="bodycontainer">
                <PersonalData></PersonalData>
                <Prescription/>
            </div>
        </div>

    )
}

export default Form