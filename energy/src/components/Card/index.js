import {
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './Card.css'
import {useState} from 'react'
import Dialog from '../Dialog'



const CardClient = ({item, handleDelete, handleEdit}) => {
    const [open, setOpen] = useState(false)
    

    const handleClose = () => {
      setOpen(false)
    };

    return(
        <div className='cards'>
            <Card className='cardContent' sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography className='cardTypography' gutterBottom>
                  Número: {item.numeroCliente}
                </Typography>
                <Typography className='cardTypography'>
                  Nome: {item.nomeCliente}
                </Typography>                
                  <Typography className='cardTypography'>
                    Id Usina: {item.usinas[0].usinaId}
                  </Typography>
                  <Typography className='cardTypography'>
                    Percentual: {item.usinas[0].percentualDeParticipacao}
                  </Typography>                
              </CardContent>
              <CardActions>
                <div className='actions'>
                  <DeleteForeverIcon className='icons' onClick={()=>{setOpen(true)}} />
                  <EditIcon className='icons' onClick={()=>{handleEdit(item.id)}}/>                
                </div>
              </CardActions>
            </Card>   
            <Dialog 
              open={open} 
              setOpen={setOpen} 
              onConfirm={handleDelete} 
              item={item.id}
              title={"Tem certeza que deseja excluir esse cliente?"}
              message={'Após confirmado não será possível reverter!'}
              onClose={handleClose}
            />            
          </div>
    )
}

export default CardClient