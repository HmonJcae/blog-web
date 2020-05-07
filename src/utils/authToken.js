const TokenKey = "Token";

export function getToken() {
  return localStorage.getItem(TokenKey) ? localStorage.getItem(TokenKey) : "";
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}

export function setLStorage(key, value) {
  return localStorage.setItem(key, value);
}

export function getLStorage(key) {
  return localStorage.getItem(key);
}

export function removeLStorage(key) {
  return localStorage.removeItem(key);
}
