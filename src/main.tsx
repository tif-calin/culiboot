import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    "Culi Boot"
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
