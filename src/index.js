import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import A from './A';
import B from './B';
import C from './C';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Nav from './nav'



ReactDOM.render(
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={A}/>
        <Route path="/B" component={B}/>
        <Route path="/C" component={C}/>
        <Route path="/App" component={App}/>
      </Switch>
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
