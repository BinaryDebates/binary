import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
   <App/> 
  </React.StrictMode>
);
