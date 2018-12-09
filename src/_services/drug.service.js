// TODO: return back when implemented
// import config from 'config';
const config = {
  apiUrl: 'http://localhost:3000/v1'
};

export const drugService = {
  getAll
};


function getAll() {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`${config.apiUrl}/drugs`, requestOptions).then(handleResponse);
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
