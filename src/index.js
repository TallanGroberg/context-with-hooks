import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './provider/ThemeProvider'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

<ThemeProvider>
  <App />
</ThemeProvider>

  ,document.getElementById('root'));


serviceWorker.unregister();
