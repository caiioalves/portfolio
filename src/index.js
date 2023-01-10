import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Modelo3D from './componentes/Modelo3D';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Modelo3D/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);