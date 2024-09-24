import { Button, Col, Row, Form, Spinner, InputGroup } from 'react-bootstrap';
import {
  UimFacebook,
  UimGithub,
  UimGoogle,
} from '@iconscout/react-unicons-monochrome';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilLockUnlocked } from '@coreui/icons';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    rememberMe: yup.boolean().required(),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    const passwordAttr = document.getElementById('password');
    if (passwordAttr.getAttribute('type') === 'password') {
      passwordAttr.setAttribute('type', 'text');
    } else {
      passwordAttr.setAttribute('type', 'password');
    }
  };

  return (
    <>
      <h6>Habu</h6>
      <Col>
        <h1>Welcome back</h1>
        <p className="mt-2 mb-4 fontt-w-100">
          Please enter your account details
        </p>

        <Formik
          validationSchema={schema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
            isSubmitting,
          }) => (
            <Form className="me-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                  />
                  <InputGroupText onClick={handleShowPassword}>
                    <CIcon
                      icon={showPassword ? cilLockUnlocked : cilLockLocked}
                      className="icon-size"
                    />
                  </InputGroupText>
                  <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      name="rememberMe"
                      value={values.rememberMe}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col align="end">
                  <a href="#">Forgot Password</a>
                </Col>
              </Row>

              <div className="d-grid">
                <Button variant="success" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Spinner /> : 'Sign in'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="d-flex justify-content-center mt-4 position-relative">
          <span className="social">
            <UimGoogle size="50" />
          </span>
          <span className="social">
            <UimGithub size="50" />
          </span>
          <span>
            <UimFacebook size="50" />
          </span>
        </div>
        <div align="end" className="my-5">
          <Link to="/register">Create an account</Link>
        </div>
      </Col>
    </>
  );
};

export default Login;
