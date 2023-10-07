import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'popper.js/dist/popper.min';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
