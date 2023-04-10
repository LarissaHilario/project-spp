import { Button, Grid, Modal, Typography } from "@mui/material"
import PersonalData from "./Personal/PersonalData"

import Styles from './Form.module.css'
import Prescription from "./Prescription/Prescription"
import { axiosInstance } from "../../../../Helpers/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Form=()=>{

  const { patients } = useSelector(state => state.patients);
  


    return(

        <div className={Styles.Container}>
            <div className={Styles.headerContainer}>
            <h1 className={Styles.title}>Formulario</h1>
            </div>
            <br>
            </br>
            <div className="bodycontainer">
          
                <PersonalData 
                
              >
                </PersonalData>
                <Prescription/>
            </div>
        </div>

    )
}


export default Form