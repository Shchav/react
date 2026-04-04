import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BootstrapTest from './BootstrapTest';
import { Header } from './App';
import { StrictMode } from 'react';

const elem = (
  <div>
    <h2>Hello World!</h2>
    <input type="text" />
    <button />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // elem
  <StrictMode>
    <App />
    <BootstrapTest />
  </StrictMode >
);

