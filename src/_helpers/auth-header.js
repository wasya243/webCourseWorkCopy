export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));
  debugger;

  if (user && user.accessToken) {
    return {'Authorization': 'Bearer ' + user.accessToken};
  } else {
    return {};
  }
}
