import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField, Stack, Button, requirePropFactory } from "@mui/material"
import { ReplayCircleFilled } from "@mui/icons-material";

import { BtnGeneral } from "./BtnGeneral";





export  const ModalIngreso=() =>{
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        
      <BtnGeneral nombreBtn="Ingresar" accion={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ingresar</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="mail"
            label="Email "
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Contraseña"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


