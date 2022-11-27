import { TextField, MenuItem, InputLabel, FormHelperText, FormControl, Select, Grid, Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

import { InputCaja } from "../componentes/InputCaja";



export const Selector = () => {
  const [mesa, setMesa] = useState("");

  const handleChange = (event) => {
    setMesa(event.target.value);
  };

  return (
    <Grid container justifyContent="center" >
      <Box sx={{ 
        px:2,
        bgcolor: "grey.A200", width: { xs:"70%",sm:"45%", md:"40%", xl:"35%" } }}>
        <Grid container spacing={2} justifyContent= 'space-between'>
        <Grid item xs={5.5} >
          <FormControl fullWidth >
            <InputLabel id="select-label" >Mesa</InputLabel>
            <Select 
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={mesa}
              label="Mesa"
              onChange={handleChange}

            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Mesa 1">Mesa 1</MenuItem>
              <MenuItem value="Mesa 2">Mesa 2</MenuItem>
              <MenuItem value="Mesa 3">Mesa 3</MenuItem>

            </Select>


          </FormControl>
        </Grid>
        <Grid item xs={5.5}>
        <InputCaja  id="Cant. Persona" label="Cantidad"/>
        
          <FormHelperText>Cantidad de Personas</FormHelperText>
        </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}