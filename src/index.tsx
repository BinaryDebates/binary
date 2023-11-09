import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { DebateRequests } from './DebateRequests/DebateRequests';
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
