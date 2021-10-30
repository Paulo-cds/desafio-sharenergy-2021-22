import axios from 'axios'
import './Home.css';
import {useEffect, useState} from 'react'

import Button from '@material-ui/core/Button';
import {
  useHistory,
} from 'react-router-dom'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Alert from '../../components/Alert'
import CardClient from '../../components/Card'

const Home = () => {
  const [client, setClient] = useState([])
  const [qtdClients, setQtdClients] = useState()
  const history = useHistory()
  const [alertRes, setAlertRes] = useState(false)

  useEffect(() => {
    axios.get (`${process.env.REACT_APP_API}`)
    .then(response => {
      setClient(response.data)        
      setQtdClients(response.data.length)    
    })     
    
  }, [])
  

  const newClient = () => {
    history.push('/register')  
  }

  const handleDelete = (id) => {
    axios.delete (`${process.env.REACT_APP_API}/${id}`)
      .then(response => {
             
        axios.get (`${process.env.REACT_APP_API}`)
        .then(response => {
          setClient(response.data)  
          setQtdClients(response.data.length)    
        })   
      
      })
      .then( () => {
        handleAlert()
      })
      .catch((err) => {
        
      }) 
  }

  const handleAlert = () => {
    console.log('Abriu alerta')
    setAlertRes(true)
  }
  

  const handleEdit = (id) => {
    history.push(`edit/${id}`)
  }


  const setCard = () => {
    
    if(client) {
      return (
        client.map((item) =>                      
          <CardClient 
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )              
      )
    }
  }

  
  
  return (
    <div className="home">      
      <Button onClick={newClient} 
        variant="contained" className='buttonAdd' color='primary'>
        Adicionar cliente
      </Button>                
      <div className='containerCards'>               
        {setCard()}      
      </div>
      <Alert message='Cliente excluído com sucesso' res={alertRes}/>
    </div>
  );
}

export default Home;