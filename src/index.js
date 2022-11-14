import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/useState/CounterApp';
// import { HooksApp } from './HooksApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);

