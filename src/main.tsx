import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import App from './App.tsx';
import { theme } from './theme.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />,
  </ThemeProvider>,
);
