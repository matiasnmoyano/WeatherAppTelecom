import React from "react";
import "./styles.css"
import { Paper, Typography } from "@mui/material";
export default function CardNextDays (props) {
    const {data} = props
    
    return(
        <Paper className="minicard" elevation={6}>
            <img className="img2" src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt='...'></img>
            <Typography variant="h10">
                {data.description}
            </Typography>
            <Typography variant="h10">
                Min:{data.tempMin}°C
            </Typography>
            <Typography variant="h10">
                Max:{data.tempMax}°C
            </Typography>
            <Typography variant="h10">
                Humedad :{data.humidity}%
            </Typography>
        </Paper>
    )
}