
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
  const classes = useStyles();
  

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
                <div className='title'>
                  <Typography variant='H1' fontSize={45} className='title' fontWeight={500}>Pacientes</Typography>
                </div>
                <br/>
                <div className='text'>
                  <span>Selecciona un paciente para abrir su expediente</span>
                </div>
                 
                 <div className='button'>
                  <Button 
                 className='btn'
                 variant='contained' 
                 color='secondary' 
                 startIcon={<AddIcon/>}
                 sx={{borderRadius:2, fontSize:20}}
                 >
                 <span>Añadir Paciente</span> 
                 </Button>
                 </div>
              </div>
              <div className='bodyContainer'>
                <Cards></Cards>
              </div>

                 
      
        </Grid>
      
      </Grid>
    </Box>
    </div>
  );
}

export default People