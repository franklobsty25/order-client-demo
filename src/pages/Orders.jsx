import { cilPencil, cilTrash, cilSearch } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
  Container,
  Badge,
  Stack,
  Card,
  CardBody,
  Table,
  Pagination,
  Row,
  Col,
  Button,
  CardHeader,
  Form,
  InputGroup,
} from 'react-bootstrap';

const Orders = () => {
  return (
    <>
      <Stack
        id="chart-box"
        direction="horizontal"
        className="justify-content-around mb-5"
      >
        <div id="chart-box-content" className="border mx-3 px-4 py-3 rounded-4">
          <div>
            <Stack direction="horizontal">
              <span className="bg-dark p-2 me-3 rounded-4">
                <img
                  src="src/assets/file-alt.svg"
                  width="60"
                  className="px-2 text-light"
                />
              </span>
              <div>
                <span className="fw-bold">134</span>
                <p className="chart-subtitle text-secondary">Total order</p>
              </div>
            </Stack>
          </div>
          <hr />
          <div>
            <Stack direction="horizontal" className="justify-content-between">
              <span className="chart-subtitle text-secondary me-5">
                Compare to yesterday
              </span>
              <span id="chart-growth" className="px-3 rounded-2 text-success">
                <img src="src/assets/arrow-growth.svg" width="20" /> 14%
              </span>
            </Stack>
          </div>
        </div>

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
                <p className="chart-subtitle text-secondary">
                  Order on process
                </p>
              </div>
            </Stack>
          </div>
          <hr />
          <div>
            <Stack direction="horizontal" className="justify-content-between">
              <span className="chart-subtitle text-secondary me-5">
                Compare to yesterday
              </span>
              <span id="chart-down" className="px-3 rounded-2 text-danger">
                <img src="src/assets/chart-down.svg" width="20" /> 14%
              </span>
            </Stack>
          </div>
        </div>

        <div id="chart-box-content" className="border mx-3 px-4 py-3 rounded-4">
          <div>
            <Stack direction="horizontal">
              <span className="bg-dark p-2 me-3 rounded-4">
                <img
                  src="src/assets/file-check-alt.svg"
                  width="60"
                  className="px-2 text-light"
                />
              </span>
              <div>
                <span className="fw-bold">113</span>
                <p className="chart-subtitle text-secondary">Order done</p>
              </div>
            </Stack>
          </div>
          <hr />
          <div>
            <Stack direction="horizontal" className="justify-content-between">
              <span className="chart-subtitle text-secondary me-5">
                Compare to yesterday
              </span>
              <span id="chart-down" className="px-3 rounded-2 text-danger">
                <img src="src/assets/chart-down.svg" width="20" /> 14%
              </span>
            </Stack>
          </div>
        </div>

        <div id="chart-box-content" className="border mx-3 px-4 py-3 rounded-4">
          <div>
            <Stack direction="horizontal">
              <span className="bg-dark p-2 me-3 rounded-4">
                <img
                  src="src/assets/usd-circle.svg"
                  width="60"
                  className="px-2 text-light"
                />
              </span>
              <div>
                <span className="fw-bold">$2.096</span>
                <p className="chart-subtitle text-secondary">Total income</p>
              </div>
            </Stack>
          </div>
          <hr />
          <div>
            <Stack direction="horizontal" className="justify-content-between">
              <span className="chart-subtitle text-secondary me-5">
                Compare to yesterday
              </span>
              <span id="chart-growth" className="px-3 rounded-2 text-success">
                <img src="src/assets/arrow-growth.svg" width="20" /> 14%
              </span>
            </Stack>
          </div>
        </div>
      </Stack>
      <Container id="order-table-box" className="m">
        <Card className="rounded-4">
          <CardHeader>Order List</CardHeader>
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
                    <th className="text-secondary">CUSTOMER</th>
                    <th className="text-secondary">SERVICE TYPE</th>
                    <th className="text-secondary">ITEM NAME</th>
                    <th className="text-secondary">QTY</th>
                    <th className="text-secondary">STATUS</th>
                    <th className="text-secondary">TOTAL</th>
                    <th className="text-secondary">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#QN0068</td>
                    <td>NOV 26, 2023</td>
                    <td>Maulana</td>
                    <td>Delivery</td>
                    <td>American Style burger</td>
                    <td>1</td>
                    <td>
                      <Badge bg="primary">NEW</Badge>
                    </td>
                    <td>$75.00</td>
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
                    <td>Delivery</td>
                    <td>American Style burger</td>
                    <td>1</td>
                    <td>
                      <Badge bg="success">NEW</Badge>
                    </td>
                    <td>$75.00</td>
                  </tr>
                  <tr>
                    <td>#QN0068</td>
                    <td>NOV 26, 2023</td>
                    <td>Maulana</td>
                    <td>Take Away</td>
                    <td>American Style burger</td>
                    <td>1</td>
                    <td>
                      <Badge bg="danger">NEW</Badge>
                    </td>
                    <td>$75.00</td>
                  </tr>
                  <tr>
                    <td>#QN0068</td>
                    <td>NOV 26, 2023</td>
                    <td>Maulana</td>
                    <td>Delivery</td>
                    <td>American Style burger</td>
                    <td>1</td>
                    <td>
                      <Badge bg="warning">NEW</Badge>
                    </td>
                    <td>$75.00</td>
                  </tr>
                  <tr>
                    <td>#QN0068</td>
                    <td>NOV 26, 2023</td>
                    <td>Maulana</td>
                    <td>Take Away</td>
                    <td>Sushi Platter</td>
                    <td>1</td>
                    <td>
                      <Badge bg="primary">NEW</Badge>
                    </td>
                    <td>$75.00</td>
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

export default Orders;
