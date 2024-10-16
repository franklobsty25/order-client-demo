import { cilAccountLogout } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  switch (location.pathname) {
    case '/orders':
      document.getElementById('orders')?.classList.add('link-primary');
      document.getElementById('orders')?.classList.add('fw-bold');
      document.getElementById('customers')?.classList.remove('fw-bold');
      document.getElementById('products')?.classList.remove('fw-bold');
      document.getElementById('home')?.classList.remove('fw-bold');
      break;
    case '/customers':
      document.getElementById('customers')?.classList.add('link-primary');
      document.getElementById('orders')?.classList.remove('fw-bold');
      document.getElementById('customers')?.classList.add('fw-bold');
      document.getElementById('products')?.classList.remove('fw-bold');
      document.getElementById('home')?.classList.remove('fw-bold');
      break;
    case '/products':
      document.getElementById('products')?.classList.add('link-primary');
      document.getElementById('orders')?.classList.remove('fw-bold');
      document.getElementById('customers')?.classList.remove('fw-bold');
      document.getElementById('products')?.classList.add('fw-bold');
      document.getElementById('home')?.classList.remove('fw-bold');
      break;

    default:
      document.getElementById('home')?.classList.add('link-primary');
      document.getElementById('orders')?.classList.remove('fw-bold');
      document.getElementById('customers')?.classList.remove('fw-bold');
      document.getElementById('products')?.classList.remove('fw-bold');
      document.getElementById('home')?.classList.add('fw-bold');
      break;
  }

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <Container fluid className="border-bottom">
        <Nav
          id="nav-bar"
          className="d-flex justify-content-between align-items-center"
        >
          <Nav.Item href="#" id="brand-logo">
            <img src="src/assets/box.svg" width="50" />
          </Nav.Item>
          <Nav>
            <Nav.Item className="px-3">
              <Link
                id="home"
                to="/home"
                className="text-decoration-none text-dark"
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="pe-3">
              <Link
                id="orders"
                to="/orders"
                className="text-decoration-none text-dark"
              >
                Orders
              </Link>
            </Nav.Item>
            <Nav.Item className="pe-3">
              <Link
                id="customers"
                to="/customers"
                className="text-decoration-none text-dark"
              >
                Customers
              </Link>
            </Nav.Item>
            <Nav.Item className="pe-3">
              <Link
                id="products"
                to="/products"
                className="text-decoration-none text-dark"
              >
                Products
              </Link>
            </Nav.Item>
            <Nav id="nav-icons" className="d-flex align-items-center">
              <Nav.Item>
                <img
                  src="src/assets/bell.svg"
                  width="30"
                  className="nav-icons"
                />
              </Nav.Item>
              <Nav.Item className="mx-2">
                <img
                  src="src/assets/user.svg"
                  width="30"
                  className="border rounded-circle nav-icons"
                />
                {user && (
                  <Navbar.Text id="user-info">
                    {user?.firstname} {user?.lastname}
                  </Navbar.Text>
                )}
              </Nav.Item>
              <Nav.Item>
                <CIcon
                  icon={cilAccountLogout}
                  className="icon-size text-danger"
                  onClick={logout}
                />
              </Nav.Item>
            </Nav>
          </Nav>
        </Nav>
      </Container>
    </>
  );
};

export default Header;
