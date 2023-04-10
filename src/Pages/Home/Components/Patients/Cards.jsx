import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Avatar, CardActionArea, Stack } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const Cards = ({ Name, Age, id}) => {
  
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          maxHeight: 300,
          borderRadius: 5,
          background: "#F1EEF5",
          boxShadow: "none",
          p: 0,
        }}
      >
        <CardActionArea  component={RouterLink} to={'/Home/' + id}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            width:500,
            height: 100,
           
          }}
        >
          <Stack direction='row'>
          <Avatar
            alt={Name}
            sx={{ width: 56, height: 56 }}
            src="/static/images/avatar/1.jpg"
            
          />
          <Stack direction='column'>
          <Typography
            className="Name"
            component="div"
            variant="h6"
            textAlign='center'
            fontSize={20}
            value={get(1)}
            sx={{ marginLeft: 7, marginTop:1 }}
          >
            {Name}
          </Typography>
          <Typography
            variant="subtitle"
            textAlign='center'
            fontSize={20}
            sx={{ marginLeft: 5, marginTop:1 }}
          >
            {Age} años
          </Typography>

          </Stack>
        
          </Stack>
          
        </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Cards;
