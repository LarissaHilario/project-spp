
import * as React from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';

import {
  Button, Box, Typography
  } from '@mui/material';
  import { makeStyles } from '@mui/styles';

import './Pacientes.css'
import Cards from './Cards';
import Form from '../Form/Form';
import { cleanPatients } from '../../../../store/Slices/patientsSlice';
import { logout } from '../../../../store/Slices/authSlice';
import { deleteToken } from '../../../../Helpers/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      minWidth: 25,
      paddingLeft: 8,
      paddingRight: 8,
      "& .MuiButton-startIcon": {
        margin: 0
      }
    }
  },
  buttonText: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const People=()=> {
  const dispatch = useDispatch();
  const classes = useStyles();

  const navigate = useNavigate();
  const { patients } = useSelector(state => state.patients);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(cleanPatients());
    deleteToken();
  };

  return (
    <div className='container'>
    <Box sx={{ flexGrow: 1, p: '2px 4px', display: 'flex', alignItems: 'center'}}>
       <Grid container spacing={2} columns={16}> 
      
        <Grid item xs={8}   
        sx={{
                  height: 900,
                  background: '#B89CF980'
                }}
              > 
              <div className='headerContainer'>
           
            <h1 className='title'>Pacientes</h1>
            <Button onClick={handleLogout}>Salir</Button>
            <br></br>
            <span className='sub'>Selecciona un paciente para añadir su receta</span>
              </div>
              <div className='bodyContainer'>
                <Cards></Cards>
              </div>

                 
      
        </Grid>
        <Grid item xs={8}>

        <Form></Form>
      
      </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default People