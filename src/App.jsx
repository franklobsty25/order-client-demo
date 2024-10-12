import React, { Suspense } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// const App = lazy(() => import('./App.jsx'));
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

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 text-light"
      style={{ backgroundColor: '#062C2D' }}
    >
      <Container>
        <Row>
          <Col>
            <Link to="/register">
              <div className="d-grid">
                <Button>Get Stared</Button>
              </div>
            </Link>
          </Col>
          <Col>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <div className="d-grid">
                <Button className="" variant="outline-light">
                  Login
                </Button>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>),
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
