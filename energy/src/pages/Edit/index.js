import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useHistory} from 'react-router-dom'
import './Edit.css'

import Form from '../../components/Form';


const Edit = () => {
    const { id } = useParams()
    const [number, setNumber] = useState()
    const history = useHistory()

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

    const handleEdit = () => {               
        
        axios.put (`${process.env.REACT_APP_API}/${id}`,
        {                  
            id:{id},
            nomeCliente: form.name.value,
            numeroCliente: number,            
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
            url={`${process.env.REACT_APP_API}/${id}`}
            id={id}
            setNumber={setNumber}
            form={form}
            setForm={setForm}
            input={handleInputChange}
            handle={handleEdit}
        />
    )
}

export default Edit