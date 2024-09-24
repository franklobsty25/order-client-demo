import {
  Button,
  Col,
  Container,
  Row,
  Card,
  CardBody,
  Spinner,
} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import CIcon from '@coreui/icons-react';
import { cilArrowLeft, cilArrowRight } from '@coreui/icons';

const AuthLayout = () => {
  return (
    <>
      <Container
        id="login-page"
        className="d-flex justify-content-center align-items-center"
        fluid
      >
        <Suspense fallback={<Spinner animation="grow" variant="success" />}>
          <Card id="login-main" className="px-5 pt-5 rounded-5">
            <Row>
              <Outlet />
              <Col md={6}>
                <Card
                  id="seekers-box"
                  className="rounded-5 bg-success text-light px-3 mb-3"
                >
                  <CardBody>
                    <h1>What's our</h1>
                    <h1>Jobseekers Said</h1>
                    <h1>"</h1>
                    <p>
                      "Search and find your dream job is now easier than ever."
                    </p>
                    <p>Just browse a job and apply if you need to."</p>
                    <div className="my-5">
                      <p>Mas Parjono</p>
                      <p>UI Designer at Google</p>
                    </div>
                    <div className="my-5 gx-2">
                      <Button className="me-3 px-4" variant="light">
                        <CIcon icon={cilArrowLeft} className="icon-size" />
                      </Button>
                      <Button
                        className="bg-dark px-4 text-light"
                        variant="light"
                      >
                        <CIcon icon={cilArrowRight} className="icon-size" />
                      </Button>
                    </div>
                    <Row>
                      <Col xs={10} md={10}>
                        <div className="p-4 border rounded-4 bottom-20 w-100 bg-light text-dark">
                          <h6 className="fw-bold">
                            Get your right job and right place apply now
                          </h6>
                          <p className="fw-lighter">
                            Be among the first founders to experience the
                            easiest way to start run a business
                          </p>
                        </div>
                      </Col>
                      <Col xs={2} md={2}>
                        <span>
                          <img
                            src="src/assets/compass.svg"
                            width="50"
                            className="text-dark"
                          />
                        </span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Suspense>
      </Container>
    </>
  );
};

export default AuthLayout;
