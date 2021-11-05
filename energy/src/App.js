import Home from './pages/Home'
import './App.css';
import React from 'react'
import Register from './pages/Register'
import Edit from './pages/Edit'
import Clients from './pages/Clients'
import Grafics from './pages/Grafics'
import Return from './pages/Return'
import TemplateDefault from './pages/Templates/Default.js'
import theme from '../src/theme'
import { ThemeProvider } from '@material-ui/styles'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

const admin = localStorage.getItem("token")

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      admin ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{path: '/', state:{from: props.location}}}/>
      )
    }
  />
)


function App() {
  return (
    <Router>
      <TemplateDefault> 
        <ThemeProvider theme={theme}>       
          <Switch>
            <PrivateRoute path='/return' component={Return}/>             
            <PrivateRoute path='/grafics' component={Grafics}/>              
            <PrivateRoute path='/clients' component={Clients}/>              
            <PrivateRoute path='/register' component={Register}/>              
            <PrivateRoute path="/edit/:id" component={Edit}/>              
            <Route path="/" component={Home}/>                   
          </Switch>  
        </ThemeProvider>      
      </TemplateDefault>
    </Router>
  );
}

export default App;
