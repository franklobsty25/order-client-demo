import { Container, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <Container
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
      </Container>
    </>
  );
};

export default LandingPage;
