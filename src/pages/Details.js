import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, Card, CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import './Details.css'


function Details() {
const navigate = useNavigate();
  const location = useLocation();
  const dog = location.state.dog;

  return (
    <Card
      sx={{
        display: "grid",
        gridAutoFlow: "row",
      }}
    >
      <div className="image">
        <CardMedia
          id="idImage"
          component="img"
          text-align='center'
          image={`${dog.image.url}`}
        />
      </div>
      <div>
        <h1>Name</h1>
        <Typography>{dog.name}</Typography>
        <h1>Life Span</h1>
        <Typography>{dog.life_span}</Typography>
        <h1>Height</h1>
        <Typography>{dog.height.metric}</Typography>
        <h1>Weight</h1>
        <Typography>{dog.weight.metric}</Typography>
        <h1>Breed Group</h1>
        <Typography>{dog.breed_group}</Typography>
        <h1>Bred For</h1>
        <Typography>{location.state.dog.bred_for}</Typography>
        <h1>Temperament</h1>
        <Typography>{dog.temperament}</Typography>
        <br></br>
      </div>
      <div>
        <Button 
             variant="contained"
            onClick={() => {
                    navigate('/home');
                }}>
                    GO TO HOME PAGE
        </Button>
      </div>
    </Card>
  );
};

export default Details;
