import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'



const SelectClient = ({client, handleInputChange, form, handleCalc, dataUsina}) => {
  

    return(
        <div className='boxFormReturn'>
            <div className='form' >                
                <Box margin='15px auto' width='80%'>                                                                   
                    <Select
                        onChange={handleInputChange}
                        required
                        name='name'
                        style={{width:'100%'}}  
                        className='select'                                                                    
                    >
                        {client.map((item, i) => 
                            <MenuItem
                            value={item.nomeCliente}
                            key={i}
                            >
                                {item.nomeCliente}
                            </MenuItem>
                        )}
                    </Select>
                    <label style={{fontSize:15}} className='label'>Cliente</label> 
                </Box> 
                <Box margin='15px auto' width='50%'>
                 
                    <Select
                        onChange={handleInputChange}
                        required
                        name='diaInicial'
                        style={{width:'100%'}}
                    >
                        {dataUsina.map((item, i) => 
                            <MenuItem value={i} key={i}>{i+1}</MenuItem>
                        )}
                    </Select>
                    <label style={{fontSize:15}}>Instante Inicial</label>
                </Box>
                <Box margin='15px auto' width='50%'>
                
                    <Select
                        onChange={handleInputChange}
                        required
                        name='diaFinal'
                        style={{width:'100%'}}
                    >
                        {dataUsina.map((item, i) => 
                            <MenuItem value={i} key={i}>{i+1}</MenuItem>
                        )}
                    </Select>
                    <label style={{fontSize:15}} className='label'>Instante Final</label>
                </Box>
                <Box margin='15px auto' width='60%'>
                    <Button 
                        onClick={handleCalc} 
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

export default SelectClient