import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Form.css'



const Form = ({   
    form,    
    input,
    handle,
}) => {
                      
    return(               
        <div className='boxForm'>
            <div className='form'>
                <Box margin='15px auto' width='80%'>            
                    <TextField        
                        fullWidth='true'         
                        label="Nome:" 
                        variant="filled" 
                        name = 'name' 
                        error = {form.name.error}                     
                        onChange={input}
                        required
                    />
                </Box> 
                <Box margin='15px auto' width='80%'>
                    <TextField        
                        fullWidth='true'          
                        label="Id da Usina:" 
                        variant="filled" 
                        name = 'usinasId' 
                        error = {form.usinasId.error}                        
                        onChange={input}
                        required
                    />
                </Box>
                <Box margin='15px auto' width='80%'>
                    <TextField       
                        fullWidth='true'           
                        label="Porcentagem da Usina:" 
                        variant="filled" 
                        name = 'usinasPercent' 
                        error = {form.usinasPercent.error}                        
                        onChange={input}
                        required
                    />
                </Box>
                <Box margin='15px auto' width='60%'>
                    <Button 
                        onClick={handle} 
                        variant="contained" 
                        color='primary' 
                        fullWidth='true'                        
                    >
                        Enviar
                    </Button>
                </Box>
            </div>            
        </div>               
    )
}

export default Form