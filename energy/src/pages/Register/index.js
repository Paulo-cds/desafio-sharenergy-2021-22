import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Form from '../../components/Form';
import {
    useHistory,
  } from 'react-router-dom'



const Register = (clients) => {
    const [qtdClients, setQtdClients] = useState()
    const history = useHistory()
    const [id, setId] = useState()
    const [newId, setNewId] = useState([])

    useEffect(() => {
        axios.get (`${process.env.REACT_APP_API}`)
        .then(response => {
          setQtdClients(response.data.length+1)  
          setNewId(response.data.id) 
          handleId() 
        })     
        
      }, [])
    
    const handleId = () => {
        setId(Math.floor( Math.random() * 900))

        newId.map(identfy => 
            id === identfy ?
                handleId()
            : ''
        )            
        
    }
    

    const [form, setForm] = useState({
        name:{
            value:'',
            error: false,
        },
        usinasId:{
            value:'',
            error: false,
        },
        usinasPercent:{
            value:'',
            error: false,
        },
        
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegister = () => {      
       
        
        axios.post (`${process.env.REACT_APP_API}`,{
            id:id,
            numeroCliente: id,
            nomeCliente: form.name.value,
            usinas: 
            [
                {
                    usinaId: parseInt(form.usinasId.value),
                    percentualDeParticipacao: parseInt(form.usinasPercent.value)
                }
            ]
        })
        .then((res) => {
            history.push('/')
        })
        .catch((err) => {
            console.log(err)            
        })  
    }             
    

    return(
       
        
        <Form 
            url={`${process.env.REACT_APP_API}`}
            id={id}
            
            form={form}
            setForm={setForm}
            input={handleInputChange}
            handle={handleRegister}
        />
        
    )
}

export default Register