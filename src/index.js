import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  // <Provider store={store}>
  <Router>
    <App />
  </Router>,
  // </Provider>,
  document.getElementById('root')
);
