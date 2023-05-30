import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/* import trash from "./trash.svg"
import eye from './eye.svg' */
import EditArticle from "../Edit/EditArticle";
/* import heart from './heart.svg' */
import {Link} from "react-router-dom";



const ApiCard = ({ el }) => {
   

  const test=()=>{
    window.location.href=`${el.url}`
  }
  
  
  
  return (
    <Card sx={{ maxWidth: 345 }} style={{ opacity : el.view ? "0.5" : "1" }}>
      <CardMedia
        component="img"
        height="140"
        image= {el.urlToImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {el.description}
        </Typography>
      </CardContent>
      <CardActions>
        
       <Link > <Button size="small" onClick={test }>Learn More</Button> </Link>   
        
        
      </CardActions>
    </Card>
  );
};

export default ApiCard;