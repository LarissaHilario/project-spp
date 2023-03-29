import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Avatar } from '@mui/material';

const Cards=({Name, Age})=>{  
    return(
        <div>
    <Card sx={{ display: 'flex', maxWidth: 350, maxHeight: 300, borderRadius:5,background:'#F1EEF5', boxShadow: 'none'}} >
      <CardContent sx={{ flex: '1 0 auto', width:400, height:100, alignContent:'center'}}>
          <Typography className='Name'component="div" variant="h5">
            Aylin Malpica
          </Typography>
          <Typography variant='subtitle' align='center'>19 años</Typography>
        </CardContent>
    </Card>
        </div>

    )
}

export default Cards