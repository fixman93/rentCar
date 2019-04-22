import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/index'
import CreateProjects from './components/createProject/createProject'
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={CreateProjects} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
