import 'animate.css';
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { HeroesApp } from './HeroesApp';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter>
        <HeroesApp />
      </AppRouter>
    </AuthProvider>
  </React.StrictMode>,
)
