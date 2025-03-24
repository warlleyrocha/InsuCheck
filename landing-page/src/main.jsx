import { UrbanistFont } from './assets/styles/Header.styles'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UrbanistFont>
      <App />
    </UrbanistFont>
  </React.StrictMode>,
);
