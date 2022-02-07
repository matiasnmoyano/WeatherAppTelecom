import React from "react";
import "./styles.css"
import { Paper, Typography, Grid } from "@mui/material";
export default function CardActualDays (props) {
    const {country} = props
    
    return(
        <Paper className="card" elevation={6}>
            <Typography variant="h4" component="div" gutterBottom>
                {country.name}
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
                Temperatura Actual: {country.temp}°C
            </Typography>
            <div className="info">
                <div>
                <img className="img" src={`https://openweathermap.org/img/wn/${country.icon}@2x.png`} alt='...'></img>
                <Typography variant="h5" gutterBottom component="div">
                    {country.description}
                </Typography>
                </div>
                <div className="secondaryInfo" variant="h8" gutterBottom component="div">
                <a>Viento: {country.wind}Km/h</a>
                <a>Humedad:{country.humidity}%</a> 
                <a>Visibilidad:{country.visibility}Km</a>
                </div>
            </div>
           
        </Paper>
    )
}