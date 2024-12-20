import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { SchemaMarkup } from './components/SEO/SchemaMarkup';
import './index.css';

const container = document.getElementById('root')!;
const schemaContainer = document.createElement('div');
document.body.appendChild(schemaContainer);

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

createRoot(schemaContainer).render(
  <StrictMode>
    <SchemaMarkup />
  </StrictMode>
);