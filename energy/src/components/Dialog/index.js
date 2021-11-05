import * as React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'



export default function ResponsiveDialog({
  open, 
  onClose, 
  onConfirm, 
  item, 
  title,
  message
}) {
  
  

  return (
    <>
      <Dialog        
        open={open}
        onClose={() => {onClose()}}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {onClose()}}>
            Cancelar
          </Button>
          <Button onClick={()=>{onConfirm(item)}} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>      
  );
}
