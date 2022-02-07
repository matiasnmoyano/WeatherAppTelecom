import React, { useEffect, useState } from "react";
import "./styles.css"
import { Paper,Grid, Typography } from "@mui/material";
import CardActualDays from "../CardActualDay";
import CardNextDays from "../CardNextDays";
export default function DateCountry (props) {
    
    const {selectCountry} = props
    const [data,setData] = useState({})
    const [days,setDays] = useState([])
   
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
                setDays([
                    {
                        tempMax:selectCountry.daily[0].temp.max,
                        tempMin:selectCountry.daily[0].temp.min,
                        humidity:selectCountry.daily[0].humidity,
                        description:selectCountry.daily[0].weather[0].description,
                        icon:selectCountry.daily[0].weather[0].icon
                    },
                    {
                        tempMax:selectCountry.daily[1].temp.max,
                        tempMin:selectCountry.daily[1].temp.min,
                        humidity:selectCountry.daily[1].humidity,
                        description:selectCountry.daily[1].weather[0].description,
                        icon:selectCountry.daily[1].weather[0].icon
                    },
                    {
                        tempMax:selectCountry.daily[2].temp.max,
                        tempMin:selectCountry.daily[2].temp.min,
                        humidity:selectCountry.daily[2].humidity,
                        description:selectCountry.daily[2].weather[0].description,
                        icon:selectCountry.daily[2].weather[0].icon
                    },
                    {
                        tempMax:selectCountry.daily[3].temp.max,
                        tempMin:selectCountry.daily[3].temp.min,
                        humidity:selectCountry.daily[3].humidity,
                        description:selectCountry.daily[3].weather[0].description,
                        icon:selectCountry.daily[3].weather[0].icon
                    },
                    {
                        tempMax:selectCountry.daily[4].temp.max,
                        tempMin:selectCountry.daily[4].temp.min,
                        humidity:selectCountry.daily[4].humidity,
                        description:selectCountry.daily[4].weather[0].description,
                        icon:selectCountry.daily[4].weather[0].icon
                    },

                ])
            }              
             
    }, [selectCountry]);
    
    return(
        <Paper className="paper" elevation={6}>
           <CardActualDays country={data}></CardActualDays>
           <Typography className="title" variant="h6">Próximos días</Typography>
           <Grid className="grid">
            {
                days.map((d) => {
                    return <CardNextDays data={d}></CardNextDays>
                })
            }
           </Grid>
        </Paper>
    )
}