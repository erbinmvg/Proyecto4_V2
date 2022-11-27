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

const [rclte, setRegistro] = useState({});
	

	//const saveRegistro = () => {
	//	console.log(rclte);
	//	}


    const nombreTmp=rclte.nombre;
    const mailTmp=rclte.mail;
    const telefonoTmp=rclte.personas;
    const apellidosTmp=rclte.apellidos;
	const saveRegistro = async () => {
		try {
		  await addDoc(collection(db, COLECCION),
			{
				mail: mailTmp,
				nombre: nombreTmp,
				apellidos: apellidosTmp,
				telefono: telefonoTmp,
				hr_registro: Date.now(),

			});
			
		} catch (error) {
		
		  console.log("Error al registrar cliente ", error);
		}
	};
//

	const handleInput = (e) => {


		setRegistro({
			...rclte,
			[e.target.name]: e.target.value
		});
	};

	return (


		<>
			<Box sx={{ height: "94vh" }}>
				<MuiNavbar />
				<Grid container justifyContent="center" component="main"	>

					<Box sx={{
						mt: 10, px: 2, pt: 2,
						borderRadius: "20px 20px 0 0 ",
						bgcolor: "grey.A200",
						width: { xs: "70%", sm: "45%", md: "40%", xl: "35%" }
					}}>
						<Grid item xs={12} marginBottom={5} textAlign="center">
							<Typography variant="h6" color="error" > Registro de Clientes</Typography>
						</Grid>

						<Grid item xs={12} marginBottom={1}>
							<InputCaja ref={nombre} id="nombre" name="nombre" label="Nombre" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={1}>
							<InputCaja ref={apellidos} id="apellidos" name="apellidos" label="Apellidos" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={2}>

							<InputCaja ref={mail} id="mail" name="mail" label="Email" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={2}>
							<InputCaja ref={telefono} id="personas" name="personas" label="N° de Teléfono" accion={(e) => handleInput(e)} />
						</Grid >

					</Box>
				</Grid>


				{/* <Selector /> */}


				
				<Grid item xs={7} marginTop={6}>
					<BtnGeneral nombreBtn="Enviar" accion={saveRegistro} />
					
				</Grid>




			</Box>
			<Footer />
		</>





	);

};