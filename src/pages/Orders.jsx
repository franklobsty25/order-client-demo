import { cilPencil, cilTrash, cilSearch, cilLowVision } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useCallback, useEffect, useState } from 'react';
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
  Toast,
  ToastContainer,
} from 'react-bootstrap';
import { fetchOrders, fetchOrderStats } from '../../server-processing';
import { useDispatch, useSelector } from 'react-redux';

const INITIAL_PARAMS = {
  page: 1,
  perPage: 15,
  search: '',
  all: false,
};

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const [toast, setToast] = useState(false);
  const [orderStats, setOrderStats] = useState({
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
    totalIncome: 0,
  });

  const fetchStatsData = useCallback(() => {
    fetchOrderStats()
      .then((response) => {
        const { data } = response.data;
        setOrderStats(data);
      })
      .catch((error) => {
        setToast(
          <Toast
            onClose={() => setToast(false)}
            show={true}
            autohide
            bg="danger"
          >
            <Toast.Body className="text-light">
              {error.response.data.message || error.message}
            </Toast.Body>
          </Toast>
        );
      });
  });

  const fetchData = useCallback((params) => {
    fetchOrders(params).then((response) => {
      const { orders } = response.data.data;
      const _orders = orders.data || orders;
      const {
        current_page,
        last_page,
        from,
        to,
        next_page_url,
        prev_page_url,
        per_page,
        total,
      } = orders;
      
      dispatch({
        type: 'orders',
        orders: {
          data: _orders,
          meta: {
            current_page,
            last_page,
            from,
            to,
            next_page_url,
            prev_page_url,
            per_page,
            total,
          },
        },
      });

    }).catch((error) => {
      setToast(
        <Toast onClose={() => setToast(false)} show={true} autohide bg="danger">
          <Toast.Body className="text-light">
            {error.response.data.message || error.message}
          </Toast.Body>
        </Toast>
      );
    })
  });

  useEffect(() => {
    fetchStatsData();
    fetchData(INITIAL_PARAMS);
  }, []);
  
  const handleFiltering = (e) => {};

  const handleSearchOrders = (e) => {};

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
                <span className="fw-bold">{orderStats.totalOrders}</span>
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
                <span className="fw-bold">{orderStats.pendingOrders}</span>
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
                <span className="fw-bold">{orderStats.completedOrders}</span>
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
                <span className="fw-bold">{orderStats.totalIncome}</span>
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
                  <Form.Select
                    aria-label="filtering"
                    onChange={handleFiltering}
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="all">All</option>
                  </Form.Select>
                </div>
                <div>
                  <InputGroup>
                    <InputGroup.Text>
                      <CIcon icon={cilSearch} className="icon-size" />
                    </InputGroup.Text>
                    <Form.Control
                      type="search"
                      placeholder="Search..."
                      onChange={handleSearchOrders}
                    />
                  </InputGroup>
                </div>
              </Stack>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th className="text-secondary">CUSTOMER</th>
                    <th className="text-secondary">STATUS</th>
                    <th className="text-secondary">AMOUNT</th>
                    <th className="text-secondary">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.data.map((order) => (
                    <tr key={order.id}>
                      <td>{order.customer.firstname} {order.customer.lastname}</td>
                      <td>
                        <Badge bg="primary">{order.status}</Badge>
                      </td>
                      <td>{order.amount}</td>
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
                              <CIcon
                                icon={cilLowVision}
                                className="icon-size"
                              />
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
                  ))}
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
        <ToastContainer
          position="top-end"
          className="p-3"
          style={{ zIndex: 1 }}
        >
          {toast}
        </ToastContainer>
      </Container>
    </>
  );
};

export default Orders;
