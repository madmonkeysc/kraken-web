import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('--- DEBUG ENTRY POINT: main_debug.jsx START ---');
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('CRITICAL: Root element #root not found in main_debug.jsx!');
  } else {
    console.log('Attempting render in main_debug.jsx...');
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('Render command completed in main_debug.jsx.');
  }
} catch (error) {
  console.error('CRITICAL Error in main_debug.jsx:', error);
}
