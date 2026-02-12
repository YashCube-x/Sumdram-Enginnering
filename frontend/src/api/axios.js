import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? 'https://sundaram-engineering-api.onrender.com/api'
    : '/api',
});

export default api;
