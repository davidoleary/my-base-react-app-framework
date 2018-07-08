import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* eslint-disable */ 
/* this is a create react app file that we should not need to touch */
import registerServiceWorker from './registerServiceWorker';
/* eslint-enable */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
