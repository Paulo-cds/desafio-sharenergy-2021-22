import Home from './pages/Home'
import './App.css';
import React from 'react'
import Register from './pages/Register'
import Edit from './pages/Edit'
import TemplateDefault from './pages/Templates/Default.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'



function App() {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path='/register'>
            <Register Component={Register}/>
          </Route>
          <Route path="/edit/:id">
            <Edit Component={Edit}/>
          </Route>
          <Route path="/">
            <Home Component={Home} />
          </Route>        
        </Switch>
      </TemplateDefault>
    </Router>
  );
}

export default App;
