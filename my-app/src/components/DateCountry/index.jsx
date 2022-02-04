import React, { useEffect, useState } from "react";
import "./styles.css"
import { Paper,Grid } from "@mui/material";
import CardActualDays from "../CardActualDay";
import CardNextDays from "../CardNextDays";
export default function DateCountry (props) {
    
    const {selectCountry} = props
    const [data,setData] = useState({})
    useEffect(() => {
        if(selectCountry){
            setData({
                name: selectCountry.timezone,
                temp :  Math.round(selectCountry.current.temp),
                visibility : selectCountry.current.visibility,
                description : selectCountry.current.weather[0].description,
                icon : selectCountry.current.weather[0].icon,
                wind : selectCountry.current.wind_speed,
                humidity : selectCountry.current.humidity,

            })
        } 
               
             
    }, [selectCountry]);
    console.log(data,"essssssta")
    console.log(selectCountry)
    return(
        <Paper className="paper" elevation={6}>
           <CardActualDays country={data}></CardActualDays>
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