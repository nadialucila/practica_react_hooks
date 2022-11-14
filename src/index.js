import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleForm } from './components/useEffect/SimpleForm';
// import { CounterApp } from './components/useState/CounterApp';
// import { CounterCustomHook } from './components/useState/CounterCustomHook';
// import { HooksApp } from './HooksApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
);

