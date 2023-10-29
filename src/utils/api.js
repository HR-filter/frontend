export function checkResponse(res) {
  return res.ok
    ? res.json()
    : res.json().then((errorResponse) => {
        // ошибка с сообщением
        if (errorResponse) {
          return Promise.reject(errorResponse);
        }
        //  общее сообщение об ошибке
        return Promise.reject(
          new Error(`Ошибка ${res.statusText} ${res.status}`),
        );
      });
}

function request(url, options) {
  return fetch(`https://test.ru/api/${url}`, options).then(checkResponse);
}

export function setHeaders() {
  const token = localStorage.getItem('token');

  if (token) {
    return {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json',
    };
  }

  return {
    'Content-Type': 'application/json',
  };
}

export function searchLocations(params = {}) {
  const query = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined && params[key] !== null) {
      query.append(key, params[key]);
    }
  });

  return request(`/locations/?${query.toString()}`, {
    method: 'GET',
    headers: setHeaders(),
  });
}
