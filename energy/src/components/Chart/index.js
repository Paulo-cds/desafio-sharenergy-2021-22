import { 
    ComposedChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend           
} from 'recharts'
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@material-ui/core'
import './Chart.css'
import {useState} from 'react'

const Grafico = ({values}) => {        
    const [option,setOption] = useState()
    
    return(
        <div className='containerChart'>
            <ComposedChart
            width={700}
            height={400}
            data={values}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 0,
            }}            
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tempo_h" />
                <YAxis dataKey={option}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="tempo_h" stackId="a" fill="#8884d8" />
                <Bar dataKey={option} stackId="a" fill="#82ca9d" />
            </ComposedChart>
            <FormControl component="fieldset">
                <FormLabel component="legend">Valencia</FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel 
                        value="tensao_V"
                        onClick={()=>{setOption("tensao_V")}}
                        control={<Radio color='#008000'/>}
                        label="Tensão"
                    />
                    <FormControlLabel
                        value="corrente_A"
                        onClick={()=>{setOption("corrente_A")}}
                        control={<Radio color='#008000'/>}
                        label="Corrente"
                    />
                    <FormControlLabel
                        value="potencia_kW"
                        onClick={()=>{setOption("potencia_kW")}}
                        control={<Radio color='#008000'/>}
                        label="Potência"
                    />
                    <FormControlLabel
                        value="temperatura_C"  
                        onClick={()=>{setOption("temperatura_C")}}                  
                        control={<Radio color='#008000' />}
                        label="Temperatura"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Grafico
