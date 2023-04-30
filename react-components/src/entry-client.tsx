import React from 'react';
import { HydrationOptions, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = document.getElementById('app');
if (root) {
  hydrateRoot(
    root,
    <App />
    // <BrowserRouter>
    //   <App />
    // </BrowserRouter>,
    // root as HydrationOptions
  );
}
