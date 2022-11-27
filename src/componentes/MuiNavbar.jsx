import DiningIcon from "@mui/icons-material/Dining";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material"

import {MuiMenu } from "./MuiMenu"
import {MuiTabMenu } from "./MuiTabMenu"


export const MuiNavbar = () => {

    

    return (
        <AppBar position="static" color="error"  >
            
            <Toolbar  >
                <MuiMenu />
                <MuiTabMenu />
               
                <Typography sx={{width:"100%", textAlign:{sx:"left", md:"right"}}}   variant="h6" component="div" >
                    PROYECTO n°4 - APP RESERVA
                </Typography>
                {/* <Stack direction="row" spacing={2} >
                    <Button color="inherit" >Btn 1</Button>
                    <Button color="inherit" >Btn 2</Button>
                    <Button color="inherit" >Btn 3</Button>
                    <Button color="inherit" >Btn 4</Button>
                </Stack>  */}
            </Toolbar>
        </AppBar>
    );
};