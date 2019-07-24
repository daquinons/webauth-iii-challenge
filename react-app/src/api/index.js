import axios from 'axios';

const getToken = () => {
  return localStorage.getItem('token');
};

const isLoggedIn = () => {
  const token = getToken();
  if (token) return true;
  return false;
}

const getHeaders = () => {
  const token = getToken();
  if (token) {
    return {
      'Content-Type': 'application/json',
      'Authorization': token
    };
  }
  console.log('No token');
  return {};
};

const saveToken = (token) => {
  localStorage.setItem('token', token);
  console.log("Saved token", localStorage.getItem('token'));
}

const client = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 5000
});

const login = async (username, password) => {
  try {
    const response = await client.post('/login', { username, password });
    const token = response.data.token;
    saveToken(token);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const register = async (username, department, password) => {
  try {
    const response = await client.post('/register', { username, department, password });
    const registered = response.data;
    if (registered) return true;
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getUsers = async () => {
  try {
    const response = await client.get('/users', {headers: getHeaders()});
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { login, getUsers, isLoggedIn, register };
