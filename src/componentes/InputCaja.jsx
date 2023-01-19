import { Container, Grid, TextField } from "@mui/material";



export const InputCaja = ({value, id, label, name, accion}) => {


	return (
		<TextField
			autoFocus
			
			value={value}
			id={id}
			label={label}
			name={name}
			onChange={accion}
			fullWidth
			variant="outlined"
		/>
	);
};