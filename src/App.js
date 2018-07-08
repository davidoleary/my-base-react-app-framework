import 'isomorphic-fetch';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentWillMount() {
    const that = this;
    fetch('/api/v1/example')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((data) => {
        that.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    const apiResponse = JSON.stringify(data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. asfasf ass
        </p>
        <p>
          API Response: {apiResponse}
        </p>
        <div className="scss-example">This is styled with SCSS wow!</div>
      </div>
    );
  }
}

export default App;
