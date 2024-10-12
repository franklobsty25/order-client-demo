import 'normalize.css';
import './index.css';
import { lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
const App = lazy(() => import('./App.jsx'));
import { Provider } from 'react-redux';
import store from '../store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
