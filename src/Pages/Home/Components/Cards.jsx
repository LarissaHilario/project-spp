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

const Cards=()=>{  
    return(
        <div>
    <Card sx={{ display: 'flex', maxWidth: 350, maxHeight: 300, borderRadius:4}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography className='Name'component="div" variant="h5">
            Aylin Malpica
          </Typography>
          
        </CardContent>
        
      </Box>
      <CardMedia>
      <Avatar
        alt="Aylin"
        src="/aylin.png"
        sx={{ width: 60, height: 60, marginTop:1 }}
      />
      </CardMedia>
       
      
    </Card>
        </div>

    )
}

export default Cards