import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});