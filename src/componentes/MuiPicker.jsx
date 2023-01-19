import { Grid, Box, Stack, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState, useEffect } from "react";
import { format } from 'date-fns'


export const MuiPicker = (props) => {

	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);

	useEffect(() => {
		console.log(props.isClicked);
		setSelectedDate(null);
		setSelectedTime(null);
	}, [props.isClicked])

	//console.log(selectedDate);
	const handlerFormDate = (values) => {

		let formatDate = format(new Date(values), 'dd/MM/yyyy');

		setSelectedDate(values);

		props.handledate(currentvalue => {

			return {
				...currentvalue,

				fechaReserva: formatDate
			};
		});
	};


	const handlerFormHour = (values) => {

		let formatHour = format(new Date(values), 'HH:mm a');

		setSelectedTime(values);

		props.handledate(currentvalue => {
			return {
				...currentvalue,

				horaReserva: formatHour
			};
		});

	};


	return (
		<Grid container justifyContent="center"   >
			<Box sx={{
				px: 2, pb: 2,
				borderRadius: "0 0 20px 20px",
				bgcolor: "grey.A200",
				width: { xs: "70%", sm: "45%", md: "40%", xl: "35%" }
			}}>
				<Grid item container xs={12} justifyContent="space-between"  >

					<Grid item xs={5.5} >
						<DatePicker
							label="Fecha "
							inputFormat='dd/MM/yyyy'
							renderInput={(params) => <TextField sx={{ width: "100%" }} {...params} />}
							value={selectedDate}
							onChange={handlerFormDate} />
					</Grid>

					<Grid item xs={5.5}>
						<TimePicker
							sx={{ width: "100%" }}
							label="Hora"
							renderInput={(params) => <TextField sx={{ width: "100%" }} {...params} />}
							name="horaReserva"
							value={selectedTime}
							onChange={handlerFormHour}
						/>
					</Grid>
				</Grid>
			</Box>
		</Grid>

	);
};

