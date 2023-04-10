import {
    Avatar,
    Box,
    Button,
    Divider,
    InputAdornment,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";

import ThermostatIcon from "@mui/icons-material/Thermostat";
import styles from './Prescription.module.css'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { axiosInstance } from "../../../../../Helpers/axiosInstance";
import { useParams } from "react-router-dom";

const Prescription = () => {
  const [post, setPosts]=useState()

  


    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Divider>
            <h2>Receta Médica</h2>
          </Divider>
        </div>
        <br></br>
  
        <div className={styles.form}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, maxWidth: '120ch' },
      }}
      noValidate
      autoComplete="off"
    >
            <TextField
              disabled
              label="Temperatura"
           
              id="temp"
              sx={{ m: 1, width: "20ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ThermostatIcon />
                  </InputAdornment>
                ),
              }}
            />
          <TextField
          disabled
          id="receta"
          label="Receta"
          multiline
          rows={11}
          defaultValue="Escribe aquí tu receta"
          sx={{ m: 1, width: "110ch" }}
        />
        <Button variant="contained" sx={{m:1, width:'98.7%'}} className='button'>
          Enviar Receta
        </Button>
          </Box>
        </div>
      </div>
    );
  };
  
  export default Prescription;
  