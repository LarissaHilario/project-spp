import { Grid, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Cards from './Cards';


const ManyCards = () => {
  const { patients } = useSelector(state => state.patients);
 
  return (
    <div >
      <Grid
        container spacing={2}
        direction='column'
        justifyItems='center'
      >
        {
          patients?.map(card => (
            <Grid key={card.id} item xs={12} sm={4} md={2} >
              <Cards
                Name={card.name}
                Age={card.age}
                id={card.id}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ManyCards;
