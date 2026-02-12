import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? 'https://sumdram-enginnering-backend.onrender.com/api'
    : '/api',
});

export default api;
