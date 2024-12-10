import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { SchemaMarkup } from './components/SEO/SchemaMarkup';
import './index.css';

const container = document.getElementById('root')!;
const schemaContainer = document.createElement('div');
document.body.appendChild(schemaContainer);

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(schemaContainer).render(
  <StrictMode>
    <SchemaMarkup />
  </StrictMode>
);