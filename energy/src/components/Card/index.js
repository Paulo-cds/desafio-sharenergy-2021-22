import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './Card.css'
import {useState} from 'react'
import Dialog from '../Dialog'


const CardClient = ({item, handleDelete, handleEdit}) => {
    const [dialogo, setDialogo] = useState(false)
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
                  <DeleteForeverIcon className='icons' onClick={()=>{setDialogo(true)}} />
                  <EditIcon className='icons' onClick={()=>{handleEdit(item.id)}}/>                
                </div>
              </CardActions>
            </Card>   

            <Dialog dialogo={dialogo} setDialogo={setDialogo} handleDelete={handleDelete} item={item.id}/>
          </div>
    )
}

export default CardClient