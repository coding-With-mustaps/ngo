import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ViewportContextProvider } from './Components/Contexts/ViewportWidthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ViewportContextProvider>
      <App />
    </ViewportContextProvider>
  </React.StrictMode>
);
