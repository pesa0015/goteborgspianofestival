import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

unregister();

ReactDOM.render(<CookiesProvider><App /></CookiesProvider>, document.getElementById('root'));
// registerServiceWorker();
