import React from 'react';
import ReactDOM from 'react-dom';
import { AzureAD } from 'react-aad-msal';

import './index.css';
import App from './App';
import { authProvider } from './authProvider';

ReactDOM.render(
  <AzureAD provider={authProvider} forceLogin={true}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AzureAD>,
  
  document.getElementById('root')
);
