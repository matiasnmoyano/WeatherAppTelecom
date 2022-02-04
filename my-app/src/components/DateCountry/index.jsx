import React from "react";
import "./styles.css"
import { Paper,Grid } from "@mui/material";
import CardActualDays from "../CardActualDay";
import CardNextDays from "../CardNextDays";
export default function DateCountry () {
    
    return(
        <Paper className="paper" elevation={6}>
           <CardActualDays></CardActualDays>
           <Grid className="grid">
            <CardNextDays></CardNextDays>
            <CardNextDays></CardNextDays>
            <CardNextDays></CardNextDays>
            <CardNextDays></CardNextDays>
            <CardNextDays></CardNextDays>
           </Grid>
        </Paper>
    )
}