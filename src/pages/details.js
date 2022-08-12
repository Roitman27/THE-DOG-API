import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Details() {
    const navigate = useNavigate();

    return(
        <div>
            <h1>DETAILS PAGE</h1>
            <Button 
                onClick={() => {
                    navigate('/home');
                }}>
                    GO TO HOME PAGE
            </Button>
        </div>
    );
}

export default Details;