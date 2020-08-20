import React from 'react';
import ReactDOM from 'react-dom';
import configureI18n from './translation/i18n';
import pt_BR from './translation/i18n';
import './design-tokens/main.scss';
import App from './App';

configureI18n({ res: { pt_BR } });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
