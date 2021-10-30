import * as React from 'react';
//import Button from '@material/core/Button';
import Dialog from '@material/core/Dialog';
import DialogActions from '@material/core/DialogActions';
import DialogContent from '@material/core/DialogContent';
import DialogContentText from '@material/core/DialogContentText';
import DialogTitle from '@material/core/DialogTitle';
import useMediaQuery from '@material/core/useMediaQuery';
import { useTheme } from '@material/core/styles';

export default function ResponsiveDialog({dialogo, setDialogo, handleDelete, item}) {
  //const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  /* const handleClickOpen = () => {
    setOpen(true);
  }; */

  const handleClose = () => {
    setDialogo(false);
  };

  return (
    <div>      
      <Dialog
        fullScreen={fullScreen}
        open={dialogo}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Tem certeza que deseja excluir esse cliente?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Após confirmado não será possível reverter!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button autoFocus onClick={handleClose}>
            Cancelar
          </button>
          <button onClick={()=>{handleDelete(item)}} autoFocus>
            Confirmar
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
