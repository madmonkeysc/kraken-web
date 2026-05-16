import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('--- MOUNTING APP: main.jsx ---');
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('CRITICAL: Root element #root not found!');
  } else {
    console.log('Attempting React createRoot...');
    const root = createRoot(rootElement);
    console.log('Rendering App component...');
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('React render call complete.');
  }
} catch (error) {
  console.error('CRITICAL exception in main.jsx:', error);
}
