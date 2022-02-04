import React from "react";
import "./styles.css"
import { Paper, Typography } from "@mui/material";
export default function CardActualDays (props) {
    const {country} = props
    console.log(country)
    return(
        <Paper className="card" elevation={6}>
            <Typography variant="h4" component="div" gutterBottom>
                {country.name}
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
                Temperatura Actual : {country.temp} °
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
                {country.description}
            </Typography>
            <Typography className="secondaryInfo" variant="h8" gutterBottom component="div">
                <a>Viento: {country.wind}</a>
                <a>Humedad:{country.humidity}</a> 
                <a>Visibilidad:{country.visibility}</a>
            </Typography>
        </Paper>
    )
}