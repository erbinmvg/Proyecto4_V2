import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderLinedIcon from "@mui/icons-material/FormatUnderlined"
import  React, {useState} from "react"




export const MuiButton = () => {
    
    const [formats, setFormats] = useState([])



    
   

    return (

        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">Success</Button>
                
            </Stack>


            <Stack display="block" spacing={2} direction="row">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="outlined" startIcon={<PersonAddIcon />} disableRipple >Registro</Button>
                <Button variant="contained" endIcon={<PersonAddIcon />} disableElevation>Registro</Button>
                <IconButton aria-label="login" color="warning" size="small" onClick={()=> alert("Clic en Login")}>  
                    <PersonAddIcon />
                </IconButton>
            </Stack>

            <Stack direction="row" >
                <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label="grupo btn alineacion">
                    <Button>Izquierda</Button>
                    <Button>Centro</Button>
                    <Button>Derecha</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction="row">
                <ToggleButtonGroup aria-label="formato de textos" value={formats} >
                    <ToggleButton value="bold"  aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic"  aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined"  aria-label="underlined">
                        <FormatUnderLinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Stack>
    )
}