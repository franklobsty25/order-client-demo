import { cilCart, cilSearch } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Table,
  Badge,
  Pagination,
  InputGroup,
  Modal,
} from 'react-bootstrap';
import AddCustomer from '../components/AddCustomer';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleCustomerInformation = (productId) => {
    console.log(productId);
    setShow(!show);
  };

  

  return (
    <>
      <Container>
        <Card className="rounded-4">
          <CardHeader>Product List</CardHeader>
          <CardBody>
            <div>
              <Stack
                id="order-table-header"
                direction="horizontal"
                className="justify-content-between mb-3"
                gap={3}
              >
                <div>
                  <Form.Select aria-label="filtering">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                    <option>All</option>
                  </Form.Select>
                </div>
                <div>
                  <InputGroup>
                    <InputGroup.Text>
                      <CIcon icon={cilSearch} className="icon-size" />
                    </InputGroup.Text>
                    <Form.Control type="search" placeholder="Search..." />
                  </InputGroup>
                </div>
              </Stack>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th className="text-secondary">QUEUE ID</th>
                    <th className="text-secondary">DATE</th>
                    <th className="text-secondary">NAME</th>
                    <th className="text-secondary">UNIT PRICE</th>
                    <th className="text-secondary">QUANTITY</th>
                    <th className="text-secondary">CATEGORY</th>
                    <th className="text-secondary">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#QN0068</td>
                    <td>NOV 26, 2023</td>
                    <td>Maulana</td>
                    <td>12</td>
                    <td>200</td>
                    <td>
                      <Badge bg="primary">food</Badge>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Button
                            variant="outline-primary"
                            className="rounded-circle"
                            type="submit"
                            size="sm"
                            onClick={() => handleCustomerInformation(1)}
                          >
                            <CIcon icon={cilCart} className="icon-size" />
                          </Button>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>#QN0068</td>
                    <td>NOV 26, 2023</td>
                    <td>Maulana</td>
                    <td>34</td>
                    <td>566</td>
                    <td>
                      <Badge bg="success">grain</Badge>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Button
                            variant="outline-primary"
                            className="rounded-circle"
                            type="submit"
                            size="sm"
                            onClick={() => handleCustomerInformation(2)}
                          >
                            <CIcon icon={cilCart} className="icon-size" />
                          </Button>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Pagination className="float-end">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </CardBody>
        </Card>

        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header>Provide Information</Modal.Header>
          <Modal.Body>
            <AddCustomer onClose={setShow} />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default Home;
