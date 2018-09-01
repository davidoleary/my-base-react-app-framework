import 'isomorphic-fetch';
import React, { Component } from 'react';
import ButtonContainer from '../../containers/ButtonExampleContainer';
import '../../App.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentWillMount() {
    fetch('/api/v1/example')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    const apiResponse = JSON.stringify(data);
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. asfasf ass
        </p>
        <p>
          API Response: {apiResponse}
        </p>
        <div className="scss-example">This is styled with SCSS wow!</div>
        <br />
        <ButtonContainer />
      </div>
    );
  }
}

export default Home;
