import * as React from 'react';
import {
  Button,
  Snackbar,
  IconButton,  
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar({openAlert, setAlert, title, severity, message}) {
  

  const handleClose = () => {
    setAlert(false);
  };


  const action = (
    <React.Fragment>
      <Button style={{color: "#ADFF2F"}} size="small" onClick={handleClose} >
        {title}
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar        
        open={openAlert}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
        action={action}
        severity={severity}        
        anchorOrigin={{vertical: 'bottom',
        horizontal: 'left'}}       
      />
    </>
  );
}
