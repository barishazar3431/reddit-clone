import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ScrollToTop from './utils/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);
