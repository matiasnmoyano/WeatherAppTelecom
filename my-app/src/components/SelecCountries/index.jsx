import React from "react";
import './styles.css'
import {Paper,Button} from "@mui/material"
export default function SelectCountries (props) {
    const {selectCountry,setSelectCountry} = props
    function onClick (name) {
        setSelectCountry(name)
    }
    return (
        <Paper className="paper" elevation={12}>    
                <Button className="country" onClick={(e) => onClick(e.target.value)} value="actual" variant="outlined">Ciudad Actual</Button> 
                <Button className="country" onClick={(e) => onClick(e.target.value)} value="America/Chicago" variant="outlined">America, Chicago</Button> 
                <Button className="country" onClick={(e) => onClick(e.target.value)} value="Santiago/Chile" variant="outlined">Santiago,Chile</Button> 
                <Button className="country" onClick={(e) => onClick(e.target.value)} value="Madrid/Europa" variant="outlined">Madrid,Europa</Button> 
                <Button className="country" onClick={(e) => onClick(e.target.value)} value="Montevideo/Uruguay" variant="outlined">Montevideo, Uruguay</Button> 
                <Button className="country" onClick={(e) => onClick(e.target.value)} value="Lima/Peru" variant="outlined">Lima,Perú</Button> 
        </Paper>
    )
}