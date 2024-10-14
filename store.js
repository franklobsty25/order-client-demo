import { legacy_createStore as createStore } from 'redux';

const initialState = {
  products: {
    data: [],
    meta: {
      current_page: 1,
      last_page: 0,
      from: 1,
      to: 2,
      next_page_url: null,
      prev_page_url: null,
      per_page: 15,
      total: 0,
    },
  },
  orders: {
    data: [],
    meta: {
      current_page: 1,
      last_page: 0,
      from: 1,
      to: 2,
      next_page_url: null,
      prev_page_url: null,
      per_page: 15,
      total: 0,
    },
  },
};

const changeState = (state = initialState, { type, ...reset }) => {
  switch (type) {
    case 'products':
      return { ...state, ...reset };
    case 'orders':
      return { ...state, ...reset };
    default:
      return state;
  }
};

const store = createStore(changeState);

export default store;