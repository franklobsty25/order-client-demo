import React from 'react';
import { Container } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function App() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#062C2D' }}
    >
      <Skeleton count={3} />
    </Container>
  );
}

export default App;
