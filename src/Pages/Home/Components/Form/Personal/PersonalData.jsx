import {
  Avatar,
  Box,
  Button,
  Divider,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import HeightIcon from "@mui/icons-material/Height";
import WcIcon from "@mui/icons-material/Wc";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import EmailIcon from "@mui/icons-material/Email";
import FileName from "@mui/icons-material/DriveFileRenameOutline";
import styles from "./PersonalData.module.css";
import { useState } from "react";

const PersonalData = ({Name,age,email,height,weigth,Sexo}) => {

  
  const sexo = [
    {
      value: 'Woman',
      label: 'Mujer',
    },
    {
      value: 'Man',
      label: 'Hombre',
    },
  ];
  const handleChangeForm=(e)=>{
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }
  const handleSubmit=  (event)=>{
    event.preventDefault();
    
}

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Divider>
          <h2>Datos personales</h2>
        </Divider>
      </div>
      <br></br>

      <div className={styles.form}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, maxWidth: "200ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
              <Stack direction="column" spacing={4}>
              <TextField
                disabled={false}  
                id="name"
                label="Nombre completo del paciente"
                variant="outlined"
                sx={{ width: "108ch"}}
                value={Name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FileName />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                disabled
                id="email"
                value={email}
                label="Correo electrónico"
                variant="outlined"
                sx={{ width: "108ch"}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon/>
                    </InputAdornment>
                  ),
                }}
              />
              
            </Stack>
          </div>

          <TextField
          disabled
            id="age"
            value={age}
            label="Edad"
            type="number"
            sx={{ width: "17%" }}
          />

          <TextField
          disabled
            label="Peso"
            id="width"
            value={weigth}
            sx={{ m: 1, width: "27ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <MonitorWeightIcon /> <Typography>kg</Typography>
                </InputAdornment>
              ),
            }}
          />

          <TextField
          disabled
            label="Estatura"
            id="height"
            sx={{ m: 1, width: "28ch" }}
            value={height}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HeightIcon />
                  <Typography>M</Typography>
                </InputAdornment>
              ),
            }}
          />
          <TextField
          disabled
            label="Sexo"
            value={Sexo}
            select
            id="sex"
            sx={{ m: 1, width: "28ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WcIcon />
                </InputAdornment>
              ),
            }}
            >
            {sexo.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </div>
    </div>
  );
};

export default PersonalData;
