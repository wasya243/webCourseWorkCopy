import {authHeader} from '../_helpers';
// TODO: return back when implemented
// import config from 'config';
const config = {
  apiUrl: 'http://localhost:3000/v1'
};

export const userService = {
  login,
  register,
  logout,
  update,
  getAll,
  getById,
  _delete
};

function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: {...authHeader(), 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/auth/sign-up`, requestOptions).then(handleResponse);
}

function logout() {
  // remove persisted data from local storage
  localStorage.removeItem('persist:root');
  console.log(authHeader());
  const requestOptions = {
    method: 'POST',
    headers: {...authHeader(), 'Content-Type': 'application/json'},
  };
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  return fetch(`${config.apiUrl}/auth/sign-out`, requestOptions).then(handleResponse);
}

function login(email, password) {

  const userInfo = {email, password};

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userInfo)
  };

  return fetch(`${config.apiUrl}/auth/sign-in`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        localStorage.removeItem('user');
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
