import {useState} from 'react'
import { 
  styled,
  Box,
  Drawer,
  CssBaseline,  
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,  
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import MuiAppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import HomeIcon from '@material-ui/icons/Home'
import ListAltIcon from '@material-ui/icons/ListAlt'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import AssessmentIcon from '@material-ui/icons/Assessment'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import {useHistory} from 'react-router-dom'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft(theme) {
  //const theme = useTheme();
  const [open, setOpen] = useState(false);
  const history = useHistory()

  const handleDrawer = () => {
    setOpen(!open);
  };

    const handlePush = (find) => {
      history.push(find)
      handleDrawer()
    }

  const handleExit = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:'#194775',color:'white'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{ mr: 1, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SHARENERGY
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>     
            <ListItem button key={'Início'} onClick={()=>{handlePush('/')}}>
              <ListItemIcon>
                <HomeIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Início'} />
            </ListItem>    
            <ListItem button key={'Clientes'} onClick={()=>{handlePush('/clients')}}>
              <ListItemIcon>
                <ListAltIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Clientes'} />
            </ListItem>
            <ListItem button key={'Adicionar cliente'} onClick={()=>{handlePush('/register')}}>
              <ListItemIcon>
                <AddCircleIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Adicionar cliente'} />
            </ListItem>
            <ListItem button key={'Retorno Financeiro'} onClick={()=>{handlePush('/return')}}>
              <ListItemIcon>
                <AttachMoneyIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Retorno Financeiro'} />
            </ListItem>
            <ListItem button key={'Gráficos'} onClick={()=>{handlePush('/grafics')}}>
              <ListItemIcon>
                <AssessmentIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Gráficos'} />
            </ListItem>  
            <ListItem button key={'Exit'} onClick={()=>{handleExit()}}>
              <ListItemIcon>
                <ExitToAppIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Sair'} />
            </ListItem>         
        </List>        
      </Drawer>      
    </Box>
  );
}