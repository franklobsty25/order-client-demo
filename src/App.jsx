import React, { Suspense } from 'react';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Login = lazy(() => import('./pages/Login.jsx'));
const Register = lazy(() => import('./pages/Register.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Orders = lazy(() => import('./pages/Orders.jsx'));
const Customers = lazy(() => import('./pages/Customers.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const LandingPage = lazy(() => import('./pages/Landing.jsx'));
const Error = lazy(() => import('./pages/Error.jsx'));
import AuthLayout from './components/AuthLayout.jsx';
import Dashboard from './components/Dashboard.jsx';
import Skeleton from 'react-loading-skeleton';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <Error />,
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
    element: (
      <Suspense fallback={<Skeleton count={4} />}>
        <Dashboard />
      </Suspense>
    ),
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
