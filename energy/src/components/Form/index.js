import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react'
import axios from 'axios'
import './Form.css'



const Form = ({
    url,
    id,
    setNumber,
    form,
    setForm,
    input,
    handle
}) => {
   
   useEffect(() => {
        axios.get (`${url.url}`)
        .then(response => {
        const data = (response.data)  
        setForm({
            name: {value: data.name},
            usinasId: {value: data.usinas.usinaId},
            usinasPercent: {value: data.usinas.percentualDeParticipacao}
        })  
        setNumber(setNumber ? data.numeroCliente : response.data.length+1)
        console.log('Fez o effect')
        })             
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
                 
    

    return(               
        <div className='boxForm'>
            <div className='form'>
                <Box margin='15px'>            
                    <TextField                 
                        label="Nome:" 
                        variant="filled" 
                        name = 'name'
                        
                        onChange={input}
                    />
                </Box> 
                <Box margin='15px'>
                    <TextField                 
                        label="Id da Usina:" 
                        variant="filled" 
                        name = 'usinasId'
                        
                        onChange={input}
                    />
                </Box>
                <Box margin='15px'>
                    <TextField                 
                        label="Porcentagem da Usina:" 
                        variant="filled" 
                        name = 'usinasPercent'
                        
                        onChange={input}
                    />
                </Box>
                <Button onClick={handle} variant="contained" color='primary'>
                    Enviar
                </Button>
            </div>
            
        </div>               
    )
}

export default Form