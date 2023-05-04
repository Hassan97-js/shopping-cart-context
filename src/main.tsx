import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';
import './styles/main.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);