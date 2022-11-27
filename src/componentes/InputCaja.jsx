import { Container, Grid, TextField } from "@mui/material";



export const InputCaja = ({id, label, name, accion}) => {


	return (
		<TextField
			autoFocus
			
			id={id}
			label={label}
			name={name}
			onChange={accion}
			fullWidth
			variant="outlined"
		/>
	);
};