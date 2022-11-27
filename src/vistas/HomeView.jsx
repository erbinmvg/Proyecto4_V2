
import { BtnGeneral } from "../componentes/BtnGeneral";

import { MuiNavbar } from "../componentes/MuiNavbar";
import {Footer} from "../componentes/Footer"

import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RegistroView } from "./RegistroView";




const style = {
	imgCarta: {

		maxWidth: "95%",
		maxHeight: "450px",
		borderRadius: "10px 10px 10px 10px",
	},

};

export const HomeView = (props) => {

	const navegar = useNavigate();

	const imprimirReserva = () => {
		navegar("/reserva");
	}
	const ingresarRegistro = () => {
		navegar("/registro");
	}
	//sx={{my: {xs:"15%", lg:"50%"}}}
	return (
		<>
			<Box sx={{ height: "94vh" }}>
				<MuiNavbar />

				<Grid
					container
					justifyContent="center"
					alignContent="center"
					sx={{ height: "93%" }}
					component="main"   >

					<Grid item
						textAlign="center"
						xs={10} md={6}>
						<Box  sx={{
							bgcolor: "grey.A200",
							borderRadius: { xs: "20px 20px 0 0  ", md: "20px 0 0 20px" },
							height: { xs: "370px", md: "70vh" }
						}}>

							<Typography pt={5} variant="h4" color="textPrimary" >
								Restaurant 777
							</Typography>

							<Box sx={{ pt: 4 }}>
								<img src="https://www.astarteinformatica.com/blog/wp-content/uploads/2018/09/como-elaborar-una-carta-restaurante.jpg" alt="cartamenu" style={style.imgCarta} />
							</Box>
						</Box>
					</Grid>

					<Grid gap={2} item container direction="column" justifyContent="center" alignItems="center"
						pt={1}
						xs={10} md={4}
						sx={{
							bgcolor: "grey.A200",
							borderRadius: { xs: "0 0 20px 20px ", md: "0 20px 20px 0 " }
						}} >

						<Typography sx={{width:{xs:"300px", lg:"400px", xl:"500px"}}} variant="h6" color="primaryChannel" textAlign="center" paragraph >
							Ya provaste nuestra nueva carta con las especialidades de coleccion!? No te la pierdas!!
						</Typography>

						<BtnGeneral  nombreBtn="Reserva Ya!" accion={imprimirReserva} />
						<br />
						<Typography sx={{width:{xs:"300px", lg:"400px", xl:"500px"}}} variant="h6" color="primaryChannel" textAlign="center" paragraph >
							Quieres recibir información con nuestras promociones? 
						</Typography>

						<BtnGeneral  nombreBtn="Registrate Aquí!" accion={ingresarRegistro} />
						<br />
					</Grid>
					
				</Grid>
				<Footer />
				
			</Box>
			



		</>






	);
};