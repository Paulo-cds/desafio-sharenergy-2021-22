import { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/lab/Alert';


const SetAlert = ({message,res}) => {    
    console.log('res = ', res)
    const [open,setOpen] = useState(true)
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
  return (        
    <Snackbar 
        anchorOrigin={{ 'bottom': 'left' }}
        open={res} 
        autoHideDuration={6000} 
        onClose={handleClose}
        message={message}
    />
        
  );
}

export default SetAlert