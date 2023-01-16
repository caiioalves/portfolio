import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Header from './componentes/Hearder';
import Modelo3D from './componentes/Modelo3D';
import { Theme } from './componentes/Theme';
import Provider from './context/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider>
     <ThemeProvider theme={Theme}>
      <Modelo3D/>
      <Header/>
      <App />
      </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);