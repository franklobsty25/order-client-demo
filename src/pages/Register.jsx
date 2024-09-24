import {
  Button,
  Col,
  Form,
  InputGroup,
  Spinner,
  Toast,
  ToastContainer,
} from 'react-bootstrap';
import {
  UimFacebook,
  UimGithub,
  UimGoogle,
} from '@iconscout/react-unicons-monochrome';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { cilLockLocked, cilLockUnlocked } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useState } from 'react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState('');

  const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const numberPattern = /\d+/;

  const schema = yup.object().shape({
    firstname: yup.string().min(3, 'Firstname to short').trim().required(),
    lastname: yup.string().min(3, 'Lastname too short').trim().required(),
    email: yup.string().email().trim().required(),
    password: yup
      .mixed()
      .test({
        name: /^[0-9].*[\W]/,
        test: (value) => {
          return (
            value.includes(value.charAt(0).toUpperCase()) &&
            value.match(numberPattern) &&
            pattern.test(value) &&
            value.length >= 8
          );
        },
        message:
          'Password should start with capital letter, have at least a number, special character and 8 characters long.',
        exclusive: false,
      })
      .required(),
    confirmPassword: yup.string().trim().required(),
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

  const handleConfirmShowPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    const confirmPasswordAttr = document.getElementById('confirm-password');
    if (confirmPasswordAttr.getAttribute('type') === 'password') {
      confirmPasswordAttr.setAttribute('type', 'text');
    } else {
      confirmPasswordAttr.setAttribute('type', 'password');
    }
  };

  return (
    <>
      <Col>
        <h1>Sign up</h1>
        <p className="mt-2 mb-4 fontt-w-100">
          Please enter your details to create an account
        </p>

        <Formik
          validationSchema={schema}
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            if (values.password !== values.confirmPassword) {
              setPasswordInvalid("Password doesn't match");
              setToast(
                <Toast
                  onClose={() => setToast(false)}
                  show={true}
                  autohide
                  bg="danger"
                >
                  <Toast.Body>Password doesn't match</Toast.Body>
                </Toast>
              );
              setSubmitting(false);
              return;
            }
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
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  id="firstname"
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  isValid={touched.firstname && !errors.firstname}
                  isInvalid={!!errors.firstname}
                  placeholder="Enter firstname"
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.firstname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  id="lastname"
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  isValid={touched.lastname && !errors.lastname}
                  isInvalid={!!errors.lastname}
                  placeholder="Enter lastname"
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.lastname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                  placeholder="Enter email"
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                    placeholder="Enter password"
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

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    id="confirm-password"
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    isValid={touched.confirmPassword && !errors.confirmPassword}
                    isInvalid={!!errors.confirmPassword}
                    placeholder="Enter confirm password"
                  />
                  <InputGroupText onClick={handleConfirmShowPassword}>
                    <CIcon
                      icon={
                        showConfirmPassword ? cilLockUnlocked : cilLockLocked
                      }
                      className="icon-size"
                    />
                  </InputGroupText>
                  <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <div className="d-grid">
                <Button variant="success" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Spinner /> : 'Sign up'}
                </Button>
              </div>
              <ToastContainer
                position="top-end"
                className="p-3"
                style={{ zIndex: 1 }}
              >
                {toast}
              </ToastContainer>
            </Form>
          )}
        </Formik>

        <div className="d-flex align-items-center justify-content-center mt-4 position-relative">
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
          <Link to="/login">Already have an account</Link>
        </div>
      </Col>
    </>
  );
};

export default Register;
