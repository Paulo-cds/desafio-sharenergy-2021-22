import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useHistory} from 'react-router-dom'
import './Edit.css'
import Alert from '../../components/Alert'
import Form from '../../components/Form';


const Edit = () => {
    const { id } = useParams()
    const [number, setNumber] = useState()
    const history = useHistory()
    const [openAlert, setAlert] = useState(false)    

    useEffect(() => {
        axios.get (`${process.env.REACT_APP_API}/${id}`)
            .then(response => {
                const data = (response.data)  
                setForm({
                    name: {value: data.name},
                    usinasId: {value: data.usinas.usinaId},
                    usinasPercent: {value: data.usinas.percentualDeParticipacao}
                })  
                setNumber(response.data.numeroCliente)                     
            })             
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
        let hasError = false

        let newFormState = {
            ...form,
        }


        if(!form.name.value){
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite o nome corretamente'
            }
        }

        if(!form.usinasId.value){
            hasError = true

            newFormState.usinasId = {
                value: form.usinasId.value,
                error: true,
                helperText: 'Digite o id da usina corretamente'
            }
        }

        if(!form.usinasPercent.value){
            hasError = true

            newFormState.usinasPercent = {
                value: form.usinasPercent.value,
                error: true,
                helperText: 'Digite o percentual corretamente'
            }
        }
       
        
        if(hasError) {
            setForm(newFormState)
        } else{              
        
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
                setAlert(true)                                   
            })
            .then((res) => {  
                setTimeout(() => {
                    history.push('/clients')
                }, 1000);                       
            })
            .catch((err) => {
                console.log(err)
            })  
        }
    }
     
   

    return(    
        <div style={{paddingBottom:'5rem'}}>           
            <div className='headEdit'></div>
            <Form                 
                form={form}                
                input={handleInputChange}
                handle={handleEdit}                
            />

            <Alert
                openAlert={openAlert}
                setAlert={setAlert}
                severity={'success'}
                title={'Sucesso!'}
                message='Cliente alterado!'
            />        
        </div>
    )
}

export default Edit