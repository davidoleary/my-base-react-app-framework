import 'isomorphic-fetch';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/home';
import TableSettings from './pages/table-settings';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Switch>
      <Route path="/table-settings" component={TableSettings} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;

