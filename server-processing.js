import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL;

const register = async ({
  firstname,
  lastname,
  email,
  password,
  confirmPassword,
}) => {
  try {
    return await axios.post(`${baseUrl}/api/v1/users/register`, {
      firstname,
      lastname,
      email,
      password,
      password_confirmation: confirmPassword,
    });
  } catch (error) {
    throw error;
  }
};

const login = async ({ email, password, rememberMe }) => {
  let remember;
  if (rememberMe) remember = rememberMe;
  try {
    return await axios.post(`${baseUrl}/api/v1/users/login`, {
      email,
      password,
      remember,
    });
  } catch (error) {
    throw error;
  }
};

const fetchProducts = async ({ page, perPage, search, all }) => {
  const params = { page, perPage, search, all };
  const headers = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
  };

  try {
    return await axios.get(`${baseUrl}/api/v1/products/list`, {
      headers,
      params,
    });
  } catch (error) {
    throw error;
  }
};

const fetchOrderStats = async () => {
  const headers = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
  };

  try {
    return await axios.get(`${baseUrl}/api/v1/orders/overview/stats`, {
      headers,
    });
  } catch (error) {
    throw error;
  }
};

const fetchOrders = async ({ page, perPage, search, all }) => {
  const params = { page, perPage, search, all };
  const headers = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
  };

  try {
    return await axios.get(`${baseUrl}/api/v1/orders/list`, {
      headers,
      params,
    });
  } catch (error) {
    throw error;
  }
};

export { register, login, fetchProducts, fetchOrderStats, fetchOrders };
