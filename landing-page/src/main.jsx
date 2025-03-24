import { GlobalStyle } from './assets/styles/Header.styles'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.StrictMode>,
);
