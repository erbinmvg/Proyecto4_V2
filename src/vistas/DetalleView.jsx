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

import { getDocs, collection, getDoc, deleteDoc, doc } from "firebase/firestore"
import { BtnGeneral } from "../componentes/BtnGeneral";


export const DetalleView =  () => {


const [reservas, setReservas] = useState([]);



const DelReserva = async (id)=>{

  try {
    await deleteDoc(doc(db, "reservas", id));
  const newReserva = reservas.filter(el => el.id !== id);
  setReservas(newReserva);
  console.log(newReserva);
  } catch (err) {
    console.log(err);
  };
 
  
  
};

useEffect( ()=>{
  const getData = async ()=>{
	const datosReserva = await getDocs(collection(db, "reservas"));
	let reservas = datosReserva.docs.map(doc => {
    return {id: doc.id, ...doc.data()};
  });
  setReservas(reservas);
  //console.log(reservas.map(e => e.id ));
};
try {
  getData();
} catch (err) {
  console.log("error al borrar" + err);
};
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
          <TableCell align="center">Accion</TableCell>
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
            <TableCell align="center"><BtnGeneral nombreBtn="Borrar" accion={()=>DelReserva(reservas.id)}  /></TableCell>
          </TableRow>
        ))
        }
      </TableBody>
    </Table>
  </TableContainer>
  </Box>
  );
};