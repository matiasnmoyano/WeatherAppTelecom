import React from "react";
import './styles.css'
import {Paper,Button} from "@mui/material"
export default function SelectCountries (props) {
    const {countrie} = props
    return (
        <Paper className="paper" elevation={12}>    
                <Button className="country" variant="outlined">Ciudad Actual</Button> 
                <Button className="country" variant="outlined">Miame,Florida</Button> 
                <Button className="country" variant="outlined">Andorra,España</Button> 
                <Button className="country" variant="outlined">Santiago, Chile</Button> 
                <Button className="country" variant="outlined">Montevideo, Uruguay</Button> 
                <Button className="country" variant="outlined">Lima,Perú</Button> 
        </Paper>
    )
}