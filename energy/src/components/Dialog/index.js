import * as React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


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
