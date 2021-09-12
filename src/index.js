import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Parámetros: 1er => lo que se va a renderizar (<App />)
//             2do => Dónde lo voy a renderizar ('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
