import { cilPencil, cilTrash, cilSend, cilSearch } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
  Container,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  Row,
  Col,
  Button,
  Badge,
  Form,
  InputGroup,
} from 'react-bootstrap';
import AddProduct from '../components/AddProduct';

const Products = () => {
  return (
    <>
      <Stack
        id="chart-box"
        direction="horizontal"
        className="justify-content-evenly mb-5"
      >
        <div id="chart-box-content" className="border mx-3 px-4 py-3 rounded-4">
          <div>
            <Stack direction="horizontal">
              <span className="bg-dark p-2 me-3 rounded-4">
                <img
                  src="src/assets/layers.svg"
                  width="60"
                  className="px-2 text-light"
                />
              </span>
              <div>
                <span className="fw-bold">21</span>
                <p className="chart-subtitle text-secondary">Total customers</p>
              </div>
            </Stack>
          </div>
          <hr />
          <div>
            <Stack direction="horizontal" className="justify-content-between">
              <span className="chart-subtitle text-secondary me-5">
                Our lovely customers
              </span>
              <span id="chart-down" className="px-3 rounded-2 text-danger">
                <img src="src/assets/chart-down.svg" width="20" /> 14%
              </span>
            </Stack>
          </div>
        </div>

        <Card className="rounded-4 mb-3 flex-grow-1">
          <CardHeader>Product Entry</CardHeader>
          <CardBody>
            <AddProduct />
          </CardBody>
        </Card>
      </Stack>
      <Container id="order-table-box">
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
                    <th className="text-secondary">DESCRIPTION</th>
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
                          >
                            <CIcon icon={cilPencil} className="icon-size" />
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="outline-primary"
                            className="rounded-circle"
                            type="submit"
                            size="sm"
                          >
                            <CIcon icon={cilTrash} className="icon-size" />
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
                    <td>Description about the product</td>
                    <td>
                      <Row>
                        <Col>
                          <Button
                            variant="outline-primary"
                            className="rounded-circle"
                            type="submit"
                            size="sm"
                          >
                            <CIcon icon={cilPencil} className="icon-size" />
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="outline-primary"
                            className="rounded-circle"
                            type="submit"
                            size="sm"
                          >
                            <CIcon icon={cilTrash} className="icon-size" />
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
      </Container>
    </>
  );
};

export default Products;
