import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'normalize.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import Dashboard from './components/Dashboard.jsx';
import Orders from './pages/Orders.jsx';
import Customers from './pages/Customers.jsx';
import Products from './pages/Products.jsx';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Oops!, An error occurred, Back to Home Page!</div>,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
    errorElement: <Error />,
  },
  {
    element: <Dashboard />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/customers',
        element: <Customers />
      },
      {
        path: '/products',
        element: <Products />
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
