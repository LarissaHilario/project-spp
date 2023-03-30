import { Grid, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Cards from './Cards';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '-10px',
    paddingRight: '40px',
  },
});

const ManyCards = ({ cards }) => {
  const classes = useStyles();
  return (
    <div className={styled.container} >
      <Grid
        container spacing={2}
        className={classes.gridContainer}
        justifyItems='center'
      >
        {
          cards?.map(card => (
            <Grid key={card.id} item xs={12} sm={4} md={2} >
              <Cards
                name={card.name}
                edad={card.age}
                id={card.id}
              />
            </Grid>
          ))}
      </Grid>{' '}
    </div>
  );
};

export default ManyCards;
