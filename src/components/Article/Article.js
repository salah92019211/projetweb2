import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import trash from "./trash.svg"
import {useDispatch} from 'react-redux'
import {deletArticle , viewArtc , favoriteArtc} from '../../redux/Actions/artclesActions'
import eye from './eye.svg'
import EditArticle from "../Edit/EditArticle";
import heart from './heart.svg'
import {Link} from "react-router-dom";



const Article = ({ el }) => {

  const dispatch = useDispatch()

  const deleteArtc = () => {
    dispatch(deletArticle(el.id))
  }

  const handleToggle = () => {
    dispatch(viewArtc(el.id))
  }

  const handleFav = () => {
    dispatch(favoriteArtc(el.id))
  }


  return (
    <Card sx={{ maxWidth: 345 }} style={{ opacity : el.view ? "0.5" : "1" }}>
      <Button onClick={handleToggle} style={{position: "relative" , left: "-50px" }} > <img src={eye} width='18px' alt="view"/> </Button>
      <Button onClick={deleteArtc} style={{position: "relative" , right: "-50px" }}> <img src={trash} width='18px' alt="delete" /> </Button>
      <Button onClick={handleFav} style={{position: "relative" , right: "-50px" }}> <img src={heart} width='18px' alt="delete"/> </Button>
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
        
        
      </CardActions>
    </Card>
  );
};

export default Article;
