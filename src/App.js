import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';
import SingleBook from './pages/SingleBook';

import Navbar from './components/Navbar';
 import './App.css'

function App(){  
  
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path ='/'>
          <Home />
        </Route>
        <Route path ='/book/:id'>
          <SingleBook />
        </Route>
        <Route path ='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}
 
export default App;
 