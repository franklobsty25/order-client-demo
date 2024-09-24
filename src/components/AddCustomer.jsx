import { cilSend } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Formik } from 'formik';
import { Row, Col, Form, Button, Stack, Spinner } from 'react-bootstrap';
import * as yup from 'yup';

const AddCustomer = ({ onClose }) => {
  const schema = yup.object().shape({
    firstname: yup.string().min(3, 'FirstnametToo short!').required(),
    lastname: yup.string().min(3, 'Lastnamet too short!').required(),
    contact: yup
      .string()
      .min(10, 'Contact should be at least 10 digits')
      .max(13, 'Contact should be at most 13 digits')
      .required(),
    email: yup.string().email('Invalid email address').required(),
    address: yup.string().required(),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{
          firstname: '',
          lastname: '',
          contact: '',
          email: '',
          address: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setSubmitting(false);
          resetForm({
            values: {
              firstname: '',
              lastname: '',
              contact: '',
              email: '',
              address: '',
            },
          });
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
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} id="firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  id="firstname"
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  isValid={touched.firstname && !errors.firstname}
                  isInvalid={!!errors.firstname}
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.firstname}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} id="lastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  id="lastname"
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  isValid={touched.lastname && !errors.lastname}
                  isInvalid={!!errors.lastname}
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.lastname}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} id="contact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  id="contact"
                  type="text"
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                  isValid={touched.contact && !errors.contact}
                  isInvalid={!!errors.contact}
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.contact}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
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
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  id="address"
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isValid={touched.address && !errors.address}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Stack
              direction="horizontal"
              className="justify-content-between"
              gap={3}
            >
              <div className="d-grid">
                <Button
                  variant="outline-secondary"
                  onClick={() => onClose(false)}
                  className="px-5"
                >
                  Close
                </Button>
              </div>
              <div className="d-grid">
                <Button
                  variant="primary"
                  type="submit"
                  className="px-5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : 'Submit'}
                </Button>
              </div>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddCustomer;

AddCustomer.propTypes = {
  onClose: PropTypes.func,
};
