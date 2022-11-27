import { MuiPicker } from "../componentes/MuiPicker";
import { InputCaja } from "../componentes/InputCaja";

import { BtnGeneral } from "../componentes/BtnGeneral";
import { MuiNavbar } from "../componentes/MuiNavbar";
import { Footer } from "../componentes/Footer"

import { addDoc, collection } from "firebase/firestore"

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Grid, Box, Typography } from "@mui/material";
import { useState } from "react";


import React from "react";

import { db } from "../config/firebase";

const mail = React.createRef();
const nombre = React.createRef();
const apellidos = React.createRef();
const fono = React.createRef();
const personas = React.createRef();




const COLECCION = "reservas";




export const ReservaView = () => {

	
const [reserva, setReserva] = useState({});
	

	//const saveReserva = () => {
	//	console.log(reserva);
	//}



    const nombreTmp=reserva.nombre;
    const mailTmp=reserva.mail;
    const telefonoTmp=reserva.fono;
	const personasTmp=reserva.personas;
    const apellidosTmp=reserva.apellido;

	const saveReserva = async () => {
		try {
		  await addDoc(collection(db, COLECCION),
			{
				mail: mailTmp,
				nombre: nombreTmp,
				apellidos: apellidosTmp,
				telefono: telefonoTmp,
				personas: personasTmp,
				hr_registro: Date.now(),

			 
			});
			
		} catch (error) {
		
		  console.log("Error al registrar cliente ", error);
		}
	};


	const handleInput = (e) => {


		setReserva({
			...reserva,
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
							<Typography variant="h6" color="error" > Ingresa los datos de resarva</Typography>
						</Grid>

						<Grid item xs={12} marginBottom={1}>
							<InputCaja ref={nombre} id="nombre" name="nombre" label="Nombre" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={1}>
							<InputCaja ref={apellidos} id="apellido" name="apellido" label="Apellido" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={2}>
							<InputCaja ref={mail} id="mail" name="mail" label="Email" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={2}>
							<InputCaja ref={fono} id="fono" name="fono" label="N° Teléfono" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={2}>
							<InputCaja ref={personas} id="personas" name="personas" label="Cantidad personas" accion={(e) => handleInput(e)} />
						</Grid >

					</Box>
				</Grid>


				{/* <Selector /> */}


				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<Grid item >
						<MuiPicker  />
					</Grid>
				</LocalizationProvider>

				<Grid item xs={7} marginTop={6}>
					<BtnGeneral nombreBtn="Confirmar" accion={saveReserva} />
				</Grid>




			</Box>
			<Footer />
		</>





	);

};