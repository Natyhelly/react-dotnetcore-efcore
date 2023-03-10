import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Menu from './components/Menu';
import 'bootswatch/dist/journal/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Menu />
    <div className='container'>
      <App />
    </div>
  </Router>
); */

ReactDOM.render(
  <Router>
      <Menu />
      <div className='container'>
          <App />
      </div>
  </Router>,
  document.getElementById('root')
);
