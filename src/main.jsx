import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';  // Use 'react-dom' instead of 'react-dom/client'
import './index.css';
import App from './App.jsx';

ReactDOM.render(  // Use ReactDOM.render for React 17
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
