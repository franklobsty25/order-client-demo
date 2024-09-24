import { Formik } from 'formik';
import * as yup from 'yup';
import { Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { useState } from 'react';

const AddProduct = () => {
  const schema = yup.object().shape({
    name: yup.string().min(3, 'Name too short to be product').required(),
    unitPrice: yup.number().min(1).required(),
    quantity: yup.number().min(1).required(),
    category: yup.mixed().oneOf(['food', 'grain', 'fruit']).required(),
    description: yup.string(),
  });
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{
          name: '',
          unitPrice: 0,
          quantity: 0,
          category: '',
          description: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log('=======submitting....');
          console.log(values);
          resetForm({
            values: {
              name: '',
              unitPrice: 0,
              quantity: 0,
              category: '',
              description: '',
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
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                  isInvalid={!!errors.name}
                  placeholder="Enter name"
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} id="unitPrice">
                <Form.Label>Unit Price</Form.Label>
                <Form.Control
                  id="unitPrice"
                  type="number"
                  name="unitPrice"
                  onChange={handleChange}
                  isValid={touched.unitPrice && !errors.unitPrice}
                  isInvalid={!!errors.unitPrice}
                  placeholder="Enter unit price"
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.unitPrice}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} id="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  id="quantity"
                  type="number"
                  name="quantity"
                  onChange={handleChange}
                  isValid={touched.quantity && !errors.quantity}
                  isInvalid={!!errors.quantity}
                  placeholder="Enter quantity"
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.quantity}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} id="address">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  onChange={handleChange}
                  isValid={touched.category && !errors.category}
                  isInvalid={!!errors.category}
                >
                  <option value="">Choose category...</option>
                  <option value="food">Food</option>
                  <option value="grain">Grain</option>
                  <option value="fruit">Fruit</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.category}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="description"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  isValid={touched.description && !errors.description}
                  isInvalid={!!errors.description}
                  placeholder="Enter description"
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="d-grid">
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : 'Submit'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddProduct;
