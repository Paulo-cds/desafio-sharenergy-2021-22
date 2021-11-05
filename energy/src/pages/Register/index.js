import {useState, useEffect} from 'react'
import axios from 'axios'
import Form from '../../components/Form'
import Alert from '../../components/Alert'
import './Register.css'
import {useHistory} from 'react-router-dom'



const Register = (clients) => {
    const [qtdClients, setQtdClients] = useState()
    const history = useHistory()
    const [id, setId] = useState()
    const [newId, setNewId] = useState([])
    const [openAlert, setAlert] = useState(false)

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
                setAlert(true)                                   
            })
            .then((res) => {  
                setTimeout(() => {
                    window.location.reload()
                }, 1000);                       
            })
            .catch((err) => {
                console.log(err)            
            }) 
        } 
    }             
    

    return(   
        <div style={{paddingBottom: '10rem'}}>         
            <div className='headRegister'></div>   
            <Form                               
                form={form}                
                input={handleInputChange}
                handle={handleRegister}
            />
            <Alert
                openAlert={openAlert}
                setAlert={setAlert}
                severity={'success'}
                title={'Sucesso!'}
                message='Cliente adicionado!'
            /> 
        </div>
    )
}

export default Register