import { Container, Grid, Box, Typography } from "@mui/material";


export const Footer =()=>{

  return (
    <footer>
      <Box sx={{bgcolor: "error.dark", height:"6.4vh"}} > 
        
          <Grid container sx={{justifyContent: "center"}}>
            <Grid item mt={2}>
            <Typography  variant="body2" >
								Desarrollado por: Jonathan Morales y Erbin Velasquez - Bootcamp UDD 
							</Typography>
            </Grid>
          </Grid>
        
      </Box>
    </footer>
  )
}