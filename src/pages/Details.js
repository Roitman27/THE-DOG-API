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
      id="card"
      sx={{ maxWidth: 900 }}
    >
      <div className="image">
        <CardMedia
          component="img"
          image={`${dog.image.url}`}
        />
      </div>
      <div>
        <br></br>
        <h1>{dog.name}</h1>
        <h2>Life Span</h2>
        <Typography>{dog.life_span}</Typography>
        <h2>Height</h2>
        <Typography>{dog.height.metric} cm</Typography>
        <h2>Weight</h2>
        <Typography>{dog.weight.metric} kg</Typography>
        <h2>Breed Group</h2>
        <Typography>{dog.breed_group}</Typography>
        <h2>Bred For</h2>
        <Typography>{location.state.dog.bred_for}</Typography>
        <h2>Temperament</h2>
        <Typography>{dog.temperament}</Typography>
        <br></br>
      </div>
      <div>
        <Button 
            id="botao"
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
