import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './REDUX/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

const { resolve } = require('path');
const { createRequire } = require('module');

const requireFallback = createRequire(resolve('./resolve.fallback'));

try {
  const util = requireFallback('util');
  // Use the 'util' module here
  console.log(util);
} catch (error) {
  console.error('Failed to load the fallback util module:', error);
}