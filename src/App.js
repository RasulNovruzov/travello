import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import Signin from './pages/signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={Signin} exact />
        </Switch>
      </Router>
    </div>
  ); 
}

export default App;