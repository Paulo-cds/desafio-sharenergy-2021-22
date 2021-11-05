
import axios from 'axios'
import {useEffect, useState} from 'react'
import SelectClient from '../../components/selectClient'
import dataUsina from '../../dadosUsina.json'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './Return.css'


const Return = () => {
    const [clientReturn, setClientReturn] = useState([])   
    const [percentualCliente, setPercentualCliente] = useState([])
    const [valorCliente, setValorCliente] = useState()
    const [form, setForm] = useState({
        name:{
            value:'',
            error: false,
        },
        diaInicial:{
            value:'',
            error: false,
        },
        diaFinal:{
            value:'',
            error: false,
        },
        
    }) 

    useEffect (() => {
        axios.get (`${process.env.REACT_APP_API}`)
        .then(response => {
            setClientReturn(response.data)                            
        })           
        .catch((err) => {
          console.log(err)
        }) 
      }, [])
    

    const handleInputChange = (e) => {
        const {name, value} = e.target        
        console.log(e.target, e.target.value)
        setForm({
            ...form,
            [name]: {
                value,
            },
        })    
        setPercentualCliente(clientReturn.filter(item => item.nomeCliente === form.name.value))    
    }
    
    const handleCalc = () => {        
        let result = 0
        let control = 0
        let kw = 0        
        let x = form.diaInicial.value + 1        
        for(let i=form.diaInicial.value; i<form.diaFinal.value; i++){
            result += (dataUsina[x].tempo_h - dataUsina[i].tempo_h) 
            kw += dataUsina[i].potencia_kW                               
            control ++ 
            x++            
        }                
        const tempo = result/control
        const energiaT = tempo * kw
        const receitaDia = energiaT * 0.95        
        console.log('tempo = ', tempo, 'potencia = ', kw, 'energiaT = ', energiaT,
        'receitaDia = ', receitaDia)        
        setValorCliente((percentualCliente[0].usinas[0].percentualDeParticipacao/100)*receitaDia)
        console.log('Valor cliente = ', valorCliente)
    }

    

    return(
        <>
            <div className='headReturn'></div>
            <div style={{minHeight:'100vh'}}>            
                {
                    clientReturn ? !valorCliente ?
                    <SelectClient
                                client={clientReturn}
                                handleInputChange={handleInputChange} 
                                form={form} 
                                handleCalc={handleCalc}
                                dataUsina={dataUsina}
                            />
                    : '' : ''
                }
                            
                {
                    valorCliente ? 
                        <div className='cardClient'>
                            <Card className='cardContent'>
                                <CardContent >
                                    <Typography className='cardTypography' gutterBottom>
                                        Cliente: {form.name.value}
                                    </Typography>
                                    <Typography className='cardTypography'>
                                        Valor a receber = R${valorCliente.toFixed(2)}
                                    </Typography> 
                                    <Button
                                        onClick={()=>{setValorCliente('')}} 
                                        variant="contained" 
                                        color='primary'                                     
                                        className='cardButton'
                                    >
                                        Nova consulta
                                    </Button>                                                                                                                       
                                </CardContent>
                            </Card>  
                        </div>                                                                          
                    : ''
                }
            </div>
        </>
    )
}

export default Return