import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

const akar = ReactDOM.createRoot(document.getElementById('root'));
akar.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
