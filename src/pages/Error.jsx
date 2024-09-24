import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
    return (
      <>
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center vh-100 text-light"
          bg="secondary"
          style={{ backgroundColor: '#062C2D' }}
        >
          <h1 className="display-3 text-center">An error occurred! Back to homepage</h1>
          <Link to="/">
            <Button type="button" className="mt-3 px-5">
              Go To Home
            </Button>
          </Link>
        </Container>
      </>
    );
}

export default Error;