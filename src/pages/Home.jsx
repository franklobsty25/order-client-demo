import { cilCart, cilSearch } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { memo, useCallback, useEffect, useState } from 'react';
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
  Toast,
  ToastContainer,
  Spinner,
} from 'react-bootstrap';
import AddCustomer from '../components/AddCustomer';
import { fetchProducts } from '../../server-processing';
import { useDispatch, useSelector } from 'react-redux';

const INITIAL_PARAMS = {
  page: 1,
  perPage: 15,
  search: '',
  all: false,
};

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [toast, setToast] = useState(false);
  const [show, setShow] = useState(false);

  const fetchData = useCallback(async (params) => {
    try {
      const response = await fetchProducts(params);
      const { products } = response.data.data;
      const _products = products.data || products;
      const {
        current_page,
        last_page,
        from,
        to,
        next_page_url,
        prev_page_url,
        per_page,
        total,
      } = products;

      dispatch({
        type: 'products',
        products: {
          data: _products,
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
    } catch (error) {
      setToast(
        <Toast onClose={() => setToast(false)} show={true} autohide bg="danger">
          <Toast.Body className="text-light">
            {error.response.data.message || error.message}
          </Toast.Body>
        </Toast>
      );
    }
  });

  useEffect(() => {
    fetchData(INITIAL_PARAMS);
  }, []);

  const handleSearchProducts = (e) => {
    fetchData({
      page: INITIAL_PARAMS.page,
      perPage: INITIAL_PARAMS.perPage,
      search: e.target.value,
      all: INITIAL_PARAMS.all,
    });
  };
  
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
                    <Form.Control
                      type="search"
                      placeholder="Search..."
                      onChange={handleSearchProducts}
                    />
                  </InputGroup>
                </div>
              </Stack>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th className="text-secondary">NAME</th>
                    <th className="text-secondary">UNIT PRICE</th>
                    <th className="text-secondary">QUANTITY</th>
                    <th className="text-secondary">CATEGORY</th>
                    <th className="text-secondary">ACTION</th>
                  </tr>
                </thead>
                {products.data.length == 0 ? (
                  <tbody>
                    <tr>
                      <td className="border-0">No data</td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {products.data.map(
                      ({ id, name, unit_price, quantity, category }) => (
                        <tr key={id}>
                          <td>{name}</td>
                          <td>{unit_price}</td>
                          <td>{quantity}</td>
                          <td>
                            <Badge bg="primary">{category}</Badge>
                          </td>
                          <td>
                            <Row>
                              <Col>
                                <Button
                                  variant="outline-primary"
                                  className="rounded-circle"
                                  type="submit"
                                  size="sm"
                                  onClick={() => handleCustomerInformation(id)}
                                >
                                  <CIcon icon={cilCart} className="icon-size" />
                                </Button>
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                )}
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

export default memo(Home);
