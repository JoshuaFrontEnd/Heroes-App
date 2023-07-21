import 'animate.css';
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { HeroesApp } from './HeroesApp';
import { AppRouter } from './router/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter>
      <HeroesApp />
    </AppRouter>
  </React.StrictMode>,
)
