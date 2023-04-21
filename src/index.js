import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render } from 'react-dom';
import './index.css';
import App from './App';



const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);