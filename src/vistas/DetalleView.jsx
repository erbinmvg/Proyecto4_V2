import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { db } from "../config/firebase";

import { getDocs, collection } from "firebase/firestore"

const reservas = [
  /*{
  nom:"jona",
  fono:"+ 56942574999",
  fecha:"21/01/2023",
  hr:"17:00 PM",
  cantidad: 4
 },
  {
  nom:"lucy",
  fono:"+ 56911111111",
  fecha:"21/01/2023",
  hr:"17:00 PM",
  cantidad: 7
 }*/
]






export const DetalleView = () => {

const [reservas, setReservas] = useState([]);
useEffect( ()=>{
  const getData = async ()=>{
	const datosReserva = await getDocs(collection(db, "reservas"));
	let reservas = datosReserva.docs.map(doc => {
    return {id: doc.id, ...doc.data()}
  });
  setReservas(reservas);
};
try {
  getData();
} catch (err) {
  console.log(err);
}
},[]);


  return (

    <Box sx={{ height: "94vh" }}>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell align="center">Telefono</TableCell>
          <TableCell align="center">Fecha</TableCell>
          <TableCell align="center">Hora</TableCell>
          <TableCell align="center">N° Personas</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          reservas.length === 0 ?
          <TableRow>
          <TableCell align="center" colSpan={5} sx={{size:"small" }}>No hay Reservas</TableCell></TableRow> :

         reservas.map((reservas) => (
          <TableRow
            key={reservas.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {reservas.nombre}
            </TableCell>
            <TableCell align="center">{reservas.telefono}</TableCell>
            <TableCell align="center">{reservas.fechaReserva}</TableCell>
            <TableCell align="center">{reservas.horaReserva}</TableCell>
            <TableCell align="center">{reservas.personas}</TableCell>
          </TableRow>
        ))
        }
      </TableBody>
    </Table>
  </TableContainer>
  </Box>
  )
}