import 'normalize.css';
import './index.css';
import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const App = lazy(() => import('./App.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Register = lazy(() => import('./pages/Register.jsx'));
const AuthLayout = lazy(() => import('./components/AuthLayout.jsx'));
import Dashboard from './components/Dashboard.jsx';
import Orders from './pages/Orders.jsx';
import Customers from './pages/Customers.jsx';
import Products from './pages/Products.jsx';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import Skeleton from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import store from '../store';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//   },
//   {
//     element: <AuthLayout />,
//     children: [
//       {
//         path: '/login',
//         element: <Login />,
//       },
//       {
//         path: '/register',
//         element: <Register />,
//       },
//     ],
//     errorElement: <Error />,
//   },
//   {
//     element: (
//       <Suspense fallback={<Skeleton count={4} />}>
//         <Dashboard />
//       </Suspense>
//     ),
//     children: [
//       {
//         path: '/home',
//         element: <Home />,
//       },
//       {
//         path: '/orders',
//         element: <Orders />,
//       },
//       {
//         path: '/customers',
//         element: <Customers />,
//       },
//       {
//         path: '/products',
//         element: <Products />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <RouterProvider router={router} /> */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
