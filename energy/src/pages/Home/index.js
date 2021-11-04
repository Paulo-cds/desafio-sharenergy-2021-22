import './Home.css'
import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



const Home = () => {
  const admin = localStorage.getItem("token")
  const [form, setForm] = useState({
    name:{
        value:'',
        error: false,
    },
    password:{
        value:'',
        error: false,
    }
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target
    console.log(e.target.value)

    setForm({
        ...form,
        [name]: {
            value,
        },
    })
  }

  const handleLogin = () => { 
    let hasError = false

    let newFormState = {
        ...form,
    }


    if(!form.name.value){
        hasError = true

        newFormState.name = {
            value: form.name.value,
            error: true,
            helperText: 'Digite o nome'
        }
    }

    if(!form.password.value){
        hasError = true

        newFormState.password = {
            value: form.password.value,
            error: true,
            helperText: 'Digite a senha'
        }
    }
   
    
    if(hasError) {
        setForm(newFormState)
    } else{                  
      if(form.name.value === process.env.REACT_APP_ADMIN && form.password.value === process.env.REACT_APP_PASSWORD){
        localStorage.setItem("token","admin") 
        window.location.reload();       
      } else {
        setForm(newFormState)
      }
    }
}


  
  return (
    <div className="home">      
      <img src='https://files.openstartups.net/uploaded/startupLogos/5a1dbe64b96b57f4f95d363d/logo%20Sharenergy-01.png' />          
      {!admin ?            
        <div className='formLogin'>
          <h2>Login</h2>
          <Box margin='15px auto' width='60%'>            
            <TextField        
              fullWidth='true'         
              label="Usuário:" 
              variant="filled" 
              name = 'name' 
              error = {form.name.error}                     
              onChange={handleInputChange}
              required
            />
          </Box> 
          <Box margin='15px auto' width='60%'>
            <TextField        
              fullWidth='true'          
              label="Senha:" 
              variant="filled" 
              name = 'password' 
              type='password'
              error = {form.password.error}                        
              onChange={handleInputChange}
              required
            />
          </Box>                
            <Box margin='15px auto' width='60%'>
              <Button 
                onClick={handleLogin} 
                variant="contained" 
                color='primary'                                                 
              >
                Entrar
            </Button>
          </Box>                  
        </div>  
      : ''}
    </div>
  )
}

export default Home