import {authHeader} from '../_helpers';
// TODO: return back when implemented
// import config from 'config';
const config = {
  apiUrl: 'http://localhost:3000/v1'
};

export const orderService = {
  createOrder,
  getOrdersByUser
};

function createOrder(orderInfo) {
  const requestOptions = {
    method: 'POST',
    headers: {...authHeader(), 'Content-Type': 'application/json'},
    body: JSON.stringify(orderInfo)
  };

  return fetch(`${config.apiUrl}/orders`, requestOptions).then(handleResponse);
}

function getOrdersByUser(userId) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${userId}/orders`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
