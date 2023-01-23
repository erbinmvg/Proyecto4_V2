//import { MuiPicker } from "../componentes/MuiPicker";
import { InputCaja } from "../componentes/InputCaja";

import { BtnGeneral } from "../componentes/BtnGeneral";
import { MuiNavbar } from "../componentes/MuiNavbar";
import { Footer } from "../componentes/Footer"


//mport { LocalizationProvider } from "@mui/x-date-pickers";
//import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const mail = React.createRef();
const nombre = React.createRef();
const apellidos = React.createRef();
const telefono = React.createRef();




const COLECCION = "clientes";



		  
//export default Parent;

export const RegistroView = () => {

const [registro, setRegistro] = useState({

		nombre:"",
		apellido:"",
		mail:"",
		telefono:"",
});
	

	//const saveRegistro = () => {
	//	console.log(rclte);
	//	}

	const handleInput = (e) => {


		setRegistro({
			...registro,
			[e.target.name]: e.target.value
		});
	};


	const saveRegistro = () => {
		setRegistro({
			nombre:"",
			apellido:"",
			mail:"",
			telefono:"",
			hr_registro: Date.now(),
		});

		console.log(registro);

		saveData(registro);
	};
//

	


	const saveData = async (values) => {
		try {
			await addDoc(collection(db, "clientes"), values);
		} catch (error) {
			console.log("Error ingresasndo reserva", error);
		}
		
	}

	return (


		<>
			<Box sx={{ height: "94vh" }}>
				
				<Grid container justifyContent="center" component="main"	>

					<Box sx={{
						mt: 10, px: 2, pt: 2,
						borderRadius: "20px ",
						bgcolor: "grey.A200",
						width: { xs: "70%", sm: "45%", md: "40%", xl: "35%" }
					}}>
						<Grid item xs={12} marginBottom={5} textAlign="center">
							<Typography variant="h6" color="error" > Registro de Clientes</Typography>
						</Grid>

						<Grid item xs={12} marginBottom={1}>
							<InputCaja value={registro.nombre} id="nombre" name="nombre" label="Nombre" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={1}>
							<InputCaja value={registro.apellido} id="apellido" name="apellido" label="Apellido" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={2}>

							<InputCaja value={registro.mail} id="mail" name="mail" label="Email" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={2}>
							<InputCaja value={registro.telefono} id="telefono" name="telefono" label="N° de Teléfono" accion={(e) => handleInput(e)} />
						</Grid >

					</Box>
				</Grid>


				{/* <Selector /> */}


				
				<Grid item xs={7} marginTop={6}>
					<BtnGeneral nombreBtn="Enviar" accion={saveRegistro()} />
					
				</Grid>




			</Box>
		
		</>





	);

};