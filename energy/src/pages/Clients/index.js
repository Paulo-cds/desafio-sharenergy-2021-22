import axios from 'axios'
import './Clients.css';
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import * as React from 'react';
import CardClient from '../../components/Card'
import Alert from '../../components/Alert'



const Home = () => {
  const [client, setClient] = useState([])
  const [qtdClients, setQtdClients] = useState()
  const history = useHistory()
  const [openAlert, setAlert] = useState(false)



  useEffect (() => {
    axios.get (`${process.env.REACT_APP_API}`)
    .then(response => {
      setClient(response.data)        
      setQtdClients(response.data.length)          
    })           
    .catch((err) => {
      console.log(err)
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
        
        setAlert(true)
      })
      .catch((err) => {
        
      }) 
  }
 
  const handleEdit = (id) => {
    history.push(`edit/${id}`)
  }

  
  return (
    <>
      <div className='headClient'></div>
      <div className="client">                          
        <div className='containerCards'>  
          {
            client ? 
              client.map((item, i) =>
                <CardClient 
                key={i}
                item={item}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                />
              )
              : ''
          }                      
        </div>  
        <Alert
          openAlert={openAlert}
          setAlert={setAlert}
          severity={'success'}
          title={'Sucesso!'}
          message='Cliente excluído!'
        />            
      </div>
    </>
  );
}

export default Home;