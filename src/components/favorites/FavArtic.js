import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import trash from "../Article/trash.svg"
import {useDispatch} from 'react-redux'
import {favoriteArtc} from '../../redux/Actions/artclesActions'

import EditArticle from "../Edit/EditArticle";
import circle from './circle.svg'
import {Link} from "react-router-dom";





const FavArtic = ({el}) => {
    const dispatch = useDispatch()
  
    const handleFav = () => {
      dispatch(favoriteArtc(el.id))
    }
  
  
  return (
        <Card sx={{ maxWidth: 345 }} style={{ opacity : el.view ? "0.5" : "1" }}>
          
          
          <CardMedia
            component="img"
            height="140"
            image= {el.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {el.intro}
            </Typography>
          </CardContent>
          <CardActions>
            <EditArticle el = {el}></EditArticle>
            <Link to ={`/description/${el.id}`}> <Button size="small">Learn More</Button> </Link>  
            <Button onClick={handleFav} style={{position: "relative" , right: "-50px" }}> <img src={circle} width='18px' alt="delete"/> </Button>
            
          </CardActions>
        </Card>
      );
}
export default FavArtic