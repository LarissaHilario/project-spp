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


const Prescription = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`http://18.188.198.17:/temperature`)
       .then((response) => response.json())
       .then((data) => {
          console.log(data.data);
          setPosts(data.data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);


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
              value={posts}
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
        <Button variant="contained" sx={{m:1, width:'98.7%'}}>
          Enviar Receta
        </Button>
          </Box>
        </div>
      </div>
    );
  };
  
  export default Prescription;
  