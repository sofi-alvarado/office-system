import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => response,
  error => {
      if (error.response && error.response.status === 401) {
          window.location.replace('/login'); 
          localStorage.removeItem('token');
          return;
      }
      return Promise.reject(error);
  }
);

export default apiClient;