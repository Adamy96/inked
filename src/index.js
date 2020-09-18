import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './design-tokens/main.scss';
import App from './App';

import './translation/i18n';

ReactDOM.render(
  <Suspense fallback={(<div> Loading </div>)}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
