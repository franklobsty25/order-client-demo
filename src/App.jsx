import React, { Suspense } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 text-light"
      style={{ backgroundColor: '#062C2D' }}
    >
      <Suspense fallback={<Skeleton count={3} />}>
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
              <Link to="/login">
                <div className="d-grid">
                  <Button className="" variant="outline-light">
                    Login
                  </Button>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </Suspense>
    </Container>
  );
}

export default App;
